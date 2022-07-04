// import lottie from "lottie-web";
import { useEffect, useRef } from "react";
// import data from "./data";
import DarwiniaModelAnimation from "../../utils/DarwiniaModelAnimation";

const LottieAnimation = () => {
  const game = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let engine: DarwiniaModelAnimation | undefined;
    if (game.current) {
      engine = new DarwiniaModelAnimation(game.current);
    }

    return () => {
      engine?.clean();
    };
  }, []);

  return (
    <div className={"w-full"}>
      <div className={"w-full pb-[90.42%] lg:pb-[100%] relative"}>
        <canvas key={new Date().getTime()} className={"w-full h-full absolute left-0 right-0 top-0"} ref={game} />
      </div>
    </div>
  );
};

export default LottieAnimation;
