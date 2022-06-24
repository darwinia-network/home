import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import data from "./data";

const LottieAnimation = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: data,
      });
    }

    return () => {
      lottie.destroy();
    };
  }, []);

  return <div ref={container} />;
};

export default LottieAnimation;
