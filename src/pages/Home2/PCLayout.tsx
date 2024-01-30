import { PropsWithChildren, UIEventHandler, useCallback, useEffect, useRef, useState } from "react";
import useApp from "../../hooks/useApp";

export default function PCLayout({ children }: PropsWithChildren<unknown>) {
  const [scrollPercent, setScrollPercent] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const { setScrollLeft } = useApp();

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(
    (ev) => {
      const { scrollWidth, clientWidth, scrollLeft } = ev.currentTarget;
      const percent = clientWidth < scrollWidth ? (scrollLeft * 100) / (scrollWidth - clientWidth) : 0;
      setScrollPercent(percent);
      setScrollLeft(scrollLeft);
    },
    [setScrollLeft]
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

  return (
    <main className="w-screen h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="max-h-[80rem] min-h-[55rem] h-screen w-screen overflow-y-hidden overflow-x-scroll flex items-center"
        style={{ scrollbarWidth: "none" }}
        onScroll={handleScroll}
        ref={ref}
      >
        {children}
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
