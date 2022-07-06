// import lottie from "lottie-web";
import { useEffect, useRef } from "react";
// import data from "./data";
import DarwiniaModelAnimation, { Options } from "../../utils/DarwiniaModelAnimation";

const LottieAnimation = () => {
  const game = useRef<HTMLCanvasElement>(null);
  /* never use React state to control this, since three JS will
  lose the canvas reference due to re--rendering */
  const spinner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let engine: DarwiniaModelAnimation | undefined;

    if (game.current) {
      const options: Options = {
        // background: "#111",
        onLoad: () => {
          if (spinner.current) {
            spinner.current.style.opacity = "0";
            spinner.current.style.transition = "opacity 2000ms ease-out";
          }
        },
      };
      engine = new DarwiniaModelAnimation(game.current, options);
    }

    return () => {
      engine?.clean();
    };
  }, []);

  const onTransitionEnd = () => {
    if (spinner.current) {
      spinner.current.style.zIndex = "-1";
    }
  };

  return (
    /* I changed the padding bottom here from pb-[90.42%] to pb-[84.17%] here to at least reduce
     * the 3D model scale issues between mobile and PC when the dimensions almost collide.
     * IMPORTANT: The wrapper below is positioned relative on mobile phones and the height
     * depends on the padding bottom but on PCs, it is positioned absolute and its height depends
     * on the it's parent (outside this component) */
    <div
      className={
        "w-full relative lg:absolute lg:top-0 lg:bottom-0 overflow-hidden lg:right-0 pb-[120.17%] lg:pb-0 z-10"
      }
    >
      <div
        ref={spinner}
        onTransitionEnd={() => {
          onTransitionEnd();
        }}
        className={"w-full h-full absolute left-0 lg:left-[unset] lg:right-[-100px] top-0 bg-black z-20"}
      />
      <canvas
        key={new Date().getTime()}
        className={"w-full h-full absolute left-0 lg:left-[unset] lg:right-[-100px] top-0 z-10"}
        ref={game}
      />
    </div>
  );
};

export default LottieAnimation;
