// import lottie from "lottie-web";
import { useEffect, useRef } from "react";
// import data from "./data";
import DarwiniaModelAnimation, { Options } from "../../utils/DarwiniaModelAnimation";
import throttle from "lodash.throttle";

const LottieAnimation = () => {
  const game = useRef<HTMLCanvasElement>(null);

  /* Here we monitor the screen resize and re-initialize the Three JS instance */
  /* 💣 Initializing class instances in the resize method is a very bad practice
   * but at this point it had to be done this way since Three JS wasn't build for
   * making responsive design models. Our design needs to be responsive and every time
   * we scale it, it would bring different kinds of bugs that's why I decided to simply
   * just clean the previous instance and re-initialized it. */
  useEffect(() => {
    let engine: DarwiniaModelAnimation | undefined;

    const init3DModel = () => {
      engine?.clean();
      if (game.current) {
        const options: Options = {
          background: "yellow",
          shouldResize: false,
          onLoad: () => {
            console.log("loaded===");
          },
        };
        console.log(options);
        engine = new DarwiniaModelAnimation(game.current, options);
      }
    };

    init3DModel();
    const debouncedFunction = throttle(init3DModel, 1000, { leading: false });

    window.addEventListener("resize", debouncedFunction);

    return () => {
      engine?.clean();
      window.removeEventListener("resize", debouncedFunction);
    };
  }, []);

  return (
    <div className={"w-full relative lg:absolute lg:top-0 lg:bottom-0 overflow-hidden lg:right-0 pb-[100%] lg:pb-0"}>
      <canvas
        key={new Date().getTime()}
        className={"w-full h-full absolute left-0 lg:left-[unset] lg:right-[-100px] top-0"}
        ref={game}
      />
    </div>
  );
};

export default LottieAnimation;
