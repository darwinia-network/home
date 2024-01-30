import { PropsWithChildren, UIEventHandler, useCallback, useEffect, useRef, useState } from "react";
import useApp from "../../hooks/useApp";
import HeaderPC from "../../components/Header/HeaderPC";
import { MAX_HEIGHT_ON_PC, MIN_HEIGHT_ON_PC } from "../../config/constant";

export default function PCLayout({ children }: PropsWithChildren<unknown>) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { setPcScrollLeft } = useApp();

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(
    (ev) => {
      const { scrollWidth, clientWidth, scrollLeft } = ev.currentTarget;
      const percent = clientWidth < scrollWidth ? (scrollLeft * 100) / (scrollWidth - clientWidth) : 0;
      setScrollPercent(percent);
      setPcScrollLeft(scrollLeft);
    },
    [setPcScrollLeft]
  );

  useEffect(() => {
    const listener = (ev: WheelEvent) => {
      if (ref.current) {
        ref.current.scrollLeft += ev.deltaY * 2;
      }
      ev.preventDefault();
    };
    ref.current?.addEventListener("wheel", listener, false);
    return () => {
      ref.current?.removeEventListener("wheel", listener, false);
    };
  }, []);

  useEffect(
    () => () => {
      setPcScrollLeft(0); // Reset
    },
    [setPcScrollLeft]
  );

  return (
    <main className="w-screen h-screen flex flex-col justify-center overflow-hidden relative">
      <div className="flex">
        <div className="relative">
          <HeaderPC />
        </div>
        <div
          className="h-screen w-screen overflow-y-hidden overflow-x-scroll flex items-center"
          style={{ maxHeight: MAX_HEIGHT_ON_PC, minHeight: MIN_HEIGHT_ON_PC, scrollbarWidth: "none" }}
          onScroll={handleScroll}
          ref={ref}
        >
          {children}
        </div>
      </div>
      <ScrollPercentBar percent={scrollPercent} />
    </main>
  );
}

function ScrollPercentBar({ percent }: { percent: number }) {
  return (
    <div className="relative h-1 w-screen bg-app-black">
      <div
        className="absolute z-10 h-1 top-0 left-0 bg-app-main w-0 transition-[width]"
        style={{ width: `${percent}vw` }}
      />
    </div>
  );
}
