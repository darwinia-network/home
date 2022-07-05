// import lottie from "lottie-web";
import { useEffect, useRef } from "react";
// import data from "./data";
import DarwiniaModelAnimation from "../../utils/DarwiniaModelAnimation";
import throttle from "lodash.throttle";

const LottieAnimation = () => {
  const game = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let engine: DarwiniaModelAnimation | undefined;

    const init3DModel = () => {
      console.log("fired====");
      engine?.clean();
      if (game.current) {
        engine = new DarwiniaModelAnimation(game.current, false);
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
