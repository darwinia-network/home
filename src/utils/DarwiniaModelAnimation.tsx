import {
  DirectionalLight,
  Mesh,
  PerspectiveCamera,
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
} from "three";
import { GUI } from "dat.gui";
// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

interface CanvasDimensions {
  width: number;
  height: number;
}

export default class DarwiniaModelAnimation {
  private canvas: HTMLCanvasElement;
  private readonly background: string;
  private renderer: WebGLRenderer;
  private camera: PerspectiveCamera;
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

  constructor(canvas: HTMLCanvasElement, shouldResize = true, background = "#000000") {
    this.canvas = canvas;
    this.shouldResize = shouldResize;
    this.background = background;
    const dimensions = this.getCanvasDimensions();
    this.canvasWidth = dimensions.width;
    this.canvasHeight = dimensions.height;
    this.renderer = new WebGLRenderer({ antialias: true, canvas });
    this.setupGameRenderer();

    this.camera = new PerspectiveCamera(45, this.canvasWidth / this.canvasHeight, 0.1, 3000);
    this.camera.position.set(18, 26, 18);

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
        // this.animationMixer = new AnimationMixer(model);
        // const clip = AnimationClip.findByName(model.animations,"mixamo.com")
        // const action = this.animationMixer.clipAction(clip);
        // action.play();
        this.threeDModel = model;
        const { width } = this.getCanvasDimensions();
        this.resize3DModel(width);
        this.scene.add(model);
      },
      () => {
        // ignore
      },
      () => {
        console.log("error====");
        // ignore
      }
    );
  }

  private addOrbitControl() {
    this.orbitControl = new OrbitControls(this.camera, this.canvas);
    this.orbitControl.enableDamping = true;
    this.orbitControl.autoRotateSpeed *= -3;
    this.orbitControl.autoRotate = true;
    // this.orbitControl.enablePan = false;
    // this.orbitControl.enableZoom = false;
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

  private resize3DModel(width: number) {
    if (this.threeDModel) {
      if (width >= 500 && width < 600) {
        // Mobile phones with bigger displays will use this scale
        this.threeDModel.scale.set(0.00902, 0.00902, 0.00902);
      } else if (width >= 600 && width < 800) {
        // Tablets will use this scale
        this.threeDModel.scale.set(0.0092, 0.0092, 0.0092);
      } else if (width >= 800) {
        // PC will use this scale
        this.threeDModel.scale.set(0.009, 0.009, 0.009);
      } else {
        // Mobile phones with small display will use this scale
        this.threeDModel.scale.set(0.005, 0.005, 0.005);
      }
    }
  }

  private resizeGame() {
    const { width, height } = this.getCanvasDimensions();
    this.resize3DModel(width);
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
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
