import {
  DirectionalLight,
  Mesh,
  Scene,
  WebGLRenderer,
  AmbientLight,
  AxesHelper,
  SpotLight,
  AnimationMixer,
  GridHelper,
  Clock,
  Group,
  sRGBEncoding,
  OrthographicCamera,
  AnimationClip,
} from "three";
import { GUI } from "dat.gui";
// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

interface CanvasDimensions {
  width: number;
  height: number;
}

export interface Options {
  shouldResize?: boolean;
  background?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default class DarwiniaModelAnimation {
  private onLoad: (() => void) | undefined;
  private onError: (() => void) | undefined;
  private canvas: HTMLCanvasElement;
  private readonly background: string;
  private renderer: WebGLRenderer;
  private camera: OrthographicCamera;
  private scene: Scene;
  private canvasWidth: number;
  private canvasHeight: number;
  private shouldResize: boolean;
  private boxMesh: Mesh | undefined;
  private animationMixer: AnimationMixer | undefined;
  private frontLight: DirectionalLight | SpotLight | undefined;
  private backLight: DirectionalLight | SpotLight | undefined;
  private topLight: DirectionalLight | SpotLight | undefined;
  private bottomLight: DirectionalLight | SpotLight | undefined;
  private leftLight: DirectionalLight | SpotLight | undefined;
  private rightLight: DirectionalLight | SpotLight | undefined;
  private ambientLight: AmbientLight | undefined;
  private threeDModel: Group | undefined;
  private orbitControl: OrbitControls | undefined;

  constructor(canvas: HTMLCanvasElement, options: Options) {
    this.onLoad = options.onLoad;
    this.onError = options.onError;
    this.canvas = canvas;
    this.shouldResize = options.shouldResize ?? true;
    this.background = options.background ?? "#000000";

    const dimensions = this.getCanvasDimensions();
    this.canvasWidth = dimensions.width;
    this.canvasHeight = dimensions.height;
    this.renderer = new WebGLRenderer({ antialias: true, canvas });
    this.setupGameRenderer();

    this.camera = new OrthographicCamera(
      this.canvasWidth / -2,
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      this.canvasHeight / -2,
      0.1,
      3000
    );

    this.camera.position.set(18, 30, 18);
    this.camera.zoom = 25; // 28
    this.camera.updateProjectionMatrix();
    // this.camera.updateMatrix();
    // this.camera = new OrthographicCamera(45, this.canvasWidth / this.canvasHeight, 0.1, 3000);
    // this.camera.position.set(18, 26, 18);
    // this.camera.position.set(18, 40, 18);
    this.scene = new Scene();

    // this.addBox();
    this.add3DModel();
    this.addOrbitControl();

    this.addLights();

    // this.addDatGUI();
    // this.addGameHelpers();

    this.animate();

    if (this.shouldResize) {
      this.bindResizeEvents();
    }
  }

  private addDatGUI() {
    document.querySelector(".dg.main.a")?.remove();
    const datGUI = new GUI();
    const cameraGUI = datGUI.addFolder("Camera");
    cameraGUI.add(this.camera.position, "x", -10, 10, 0.2);
    cameraGUI.add(this.camera.position, "y", -10, 10, 0.2);
    cameraGUI.add(this.camera.position, "z", 0, 100, 0.2);

    if (this.topLight) {
      const lightGUI = datGUI.addFolder("Top Light");
      lightGUI.add(this.topLight.position, "x", -200, 200, 0.5);
      lightGUI.add(this.topLight.position, "y", -200, 200, 0.5);
      lightGUI.add(this.topLight.position, "z", -200, 200, 0.5);
      lightGUI.add(this.topLight, "intensity", 0, 10, 0.1);
    }

    if (this.bottomLight) {
      const lightGUI = datGUI.addFolder("Bottom Light");
      lightGUI.add(this.bottomLight.position, "x", -200, 200, 0.5);
      lightGUI.add(this.bottomLight.position, "y", -200, 200, 0.5);
      lightGUI.add(this.bottomLight.position, "z", -200, 200, 0.5);
      lightGUI.add(this.bottomLight, "intensity", 0, 10, 0.1);
    }

    if (this.frontLight) {
      const lightGUI = datGUI.addFolder("Front Light");
      lightGUI.add(this.frontLight.position, "x", -200, 200, 0.5);
      lightGUI.add(this.frontLight.position, "y", -200, 200, 0.5);
      lightGUI.add(this.frontLight.position, "z", -200, 200, 0.5);
      lightGUI.add(this.frontLight, "intensity", 0, 10, 0.1);
    }

    if (this.backLight) {
      const lightGUI = datGUI.addFolder("Back Light");
      lightGUI.add(this.backLight.position, "x", -200, 200, 0.5);
      lightGUI.add(this.backLight.position, "y", -200, 200, 0.5);
      lightGUI.add(this.backLight.position, "z", -200, 200, 0.5);
      lightGUI.add(this.backLight, "intensity", 0, 10, 0.1);
    }

    if (this.leftLight) {
      const lightGUI = datGUI.addFolder("Left Light");
      lightGUI.add(this.leftLight.position, "x", -200, 200, 0.5);
      lightGUI.add(this.leftLight.position, "y", -200, 200, 0.5);
      lightGUI.add(this.leftLight.position, "z", -200, 200, 0.5);
      lightGUI.add(this.leftLight, "intensity", 0, 10, 0.1);
    }

    if (this.rightLight) {
      const lightGUI = datGUI.addFolder("Right Light");
      lightGUI.add(this.rightLight.position, "x", -200, 200, 0.5);
      lightGUI.add(this.rightLight.position, "y", -200, 200, 0.5);
      lightGUI.add(this.rightLight.position, "z", -200, 200, 0.5);
      lightGUI.add(this.rightLight, "intensity", 0, 10, 0.1);
    }

    if (this.ambientLight) {
      const ambientLightGUI = datGUI.addFolder("Ambient Light");
      ambientLightGUI.add(this.ambientLight.position, "x", -10, 10, 0.5);
      ambientLightGUI.add(this.ambientLight.position, "y", -10, 10, 0.5);
      ambientLightGUI.add(this.ambientLight.position, "z", -10, 10, 0.5);
      ambientLightGUI.add(this.ambientLight, "intensity", 0, 10, 0.1);
    }
  }

  /* private add3DModel() {
        const loader = new GLTFLoader()
        loader.load("/island_model/scene.gltf",(gltf)=> {
            gltf.scene.scale.set(0.5,0.5,0.5);
            gltf.scene.position.x = -1;
            this.scene.add(gltf.scene);
        },()=> {
            //ignore
        },()=> {
            //ignore
        })
    } */

  private add3DModel() {
    const loader = new FBXLoader();
    loader.load(
      "/darwinia_model/scene.fbx",
      (model) => {
        this.animationMixer = new AnimationMixer(model);
        const clip = AnimationClip.findByName(model.animations, "CINEMA_4D___");
        const action = this.animationMixer.clipAction(clip);
        action.play();
        this.threeDModel = model;
        /* this.threeDModel.position.setY(2);
        this.threeDModel.position.setZ(-1); */
        this.threeDModel.position.set(0, -3, 0);
        const { width } = this.getCanvasDimensions();
        this.resize3DModel(width);
        this.scene.add(model);
        /* delay on purpose to give a canvas some loading time to avoid the weird flickering */
        setTimeout(() => {
          if (this.onLoad) {
            this.onLoad();
          }
        }, 200);
      },
      () => {
        // ignore
      },
      () => {
        // ignore
      }
    );
  }

  private addOrbitControl() {
    this.orbitControl = new OrbitControls(this.camera, this.canvas);
    this.orbitControl.enableDamping = true;
    this.orbitControl.autoRotateSpeed *= 0.3;
    this.orbitControl.autoRotate = true;
    this.orbitControl.enablePan = false;
    this.orbitControl.enableZoom = false;
  }

  private addGameHelpers() {
    const axesHelper = new AxesHelper();
    this.scene.add(axesHelper);

    const grid = new GridHelper(30, 30);
    this.scene.add(grid);
  }

  private addLights() {
    this.topLight = new SpotLight(0xffffff, 1.4);
    this.topLight.position.set(0, 100, 0);
    this.scene.add(this.topLight);

    this.bottomLight = new SpotLight(0xffffff, 1.4);
    this.bottomLight.position.set(0, -100, 0);
    this.scene.add(this.bottomLight);

    this.frontLight = new SpotLight(0xffffff, 1.4);
    this.frontLight.position.set(0, 0, 100);
    this.scene.add(this.frontLight);

    this.backLight = new SpotLight(0xffffff, 1.4);
    this.backLight.position.set(0, 0, -100);
    this.scene.add(this.backLight);

    this.leftLight = new SpotLight(0xffffff, 1.4);
    this.leftLight.position.set(-100, 0, 0);
    this.scene.add(this.leftLight);

    this.rightLight = new SpotLight(0xffffff, 1.4);
    this.rightLight.position.set(100, 0, 0);
    this.scene.add(this.rightLight);
  }

  private setupGameRenderer() {
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvasWidth, this.canvasHeight, false);
    this.renderer.setClearColor(this.background, 1);
    // this.renderer.toneMapping = ACESFilmicToneMapping;
    // this.renderer.physicallyCorrectLights = true;

    /* IMPORTANT: This property here will brighten your models by default */
    this.renderer.outputEncoding = sRGBEncoding;
  }

  private getCanvasDimensions(): CanvasDimensions {
    const width = this.canvas.scrollWidth;
    const height = this.canvas.scrollHeight;
    return {
      width,
      height,
    };
  }

  /* This code may look very weird, but it's the only way we can make the
   * 3D model responsive since the model's design itself is too big */
  private resize3DModel(width: number) {
    /* IMPORTANT: this width here is the canvas container width, NOT screen width */
    if (this.threeDModel) {
      console.log(width);
      if (width >= 1020) {
        console.log("9===");
        const size = 0.0142;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 970) {
        console.log("8.3===");
        const size = 0.0131;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 920) {
        console.log("8.2===");
        const size = 0.0131;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 870) {
        console.log("8.1===");
        const size = 0.0129;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 820) {
        /* PCs will use this dimension */
        console.log("8===");
        const size = 0.0122;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 770) {
        console.log("7.3===");
        const size = 0.0118;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 720) {
        console.log("7.2===");
        const size = 0.0117;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 670) {
        /* laptops will also use this dimension */
        console.log("7.1===");
        const size = 0.0097;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 620) {
        console.log("7===");
        const size = 0.0097;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 570) {
        console.log("6===");
        const size = 0.0095;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 520) {
        console.log("5===");
        const size = 0.0085;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 470) {
        console.log("4===");
        const size = 0.0079;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 420) {
        console.log("3.1===");
        const size = 0.00695;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 370) {
        console.log("3===");
        const size = 0.00585;
        this.threeDModel.scale.set(size, size, size);
      } else if (width >= 320) {
        console.log("2===");
        const size = 0.00565;
        this.threeDModel.scale.set(size, size, size);
      } else {
        console.log("1===");
        const size = 0.00499;
        this.threeDModel.scale.set(size, size, size);
      }

      this.camera.zoom = 25;
      this.camera.updateProjectionMatrix();
      this.camera.updateMatrix();
      this.scene.updateMatrixWorld(true);
    }
  }

  private resizeGame() {
    const { width, height } = this.getCanvasDimensions();
    this.canvasWidth = width;
    this.canvasHeight = height;

    /* this.camera = new OrthographicCamera(
      this.canvasWidth / -2,
      this.canvasWidth / 2,
      this.canvasHeight / 2,
      this.canvasHeight / -2,
      0.1,
      3000
    ); */

    this.resize3DModel(width);
    this.renderer.setSize(width, height, false);
    // this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  clean() {
    this.renderer.clear();
    this.scene.clear();
    this.camera.clear();
    this.orbitControl = undefined;
    this.unBindResizeEvents();
  }

  private bindResizeEvents() {
    window.addEventListener("resize", this.resizeGame.bind(this));
  }

  private unBindResizeEvents() {
    window.removeEventListener("resize", this.resizeGame.bind(this));
  }

  clock = new Clock();
  private animate() {
    if (this.animationMixer) {
      this.animationMixer.update(this.clock.getDelta());
    }
    if (this.boxMesh) {
      this.boxMesh.rotation.x += 0.01;
    }
    if (this.orbitControl) {
      this.orbitControl.update();
    }
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }
}
