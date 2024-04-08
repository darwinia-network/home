import { PropsWithChildren, UIEventHandler, useCallback, useEffect, useRef, useState } from "react";
import { useApp } from "../hooks/useApp";
import HomePageDesktopHeader from "../components/Header/HomePageDesktopHeader";
import { MAX_HEIGHT_ON_DESKTOP, MIN_HEIGHT_ON_DESKTOP } from "../config/constant";
import { HomePageDesktopFooter } from "../components/Footer/HomePageDesktopFooter";

export default function HomePageDesktopLayout({ children }: PropsWithChildren<unknown>) {
  const [progress, setProgress] = useState(0); // From 0 to 100
  const ref = useRef<HTMLDivElement | null>(null);
  const { setDesktopScrollLeft } = useApp();

  const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(
    (ev) => {
      const { scrollWidth, clientWidth, scrollLeft } = ev.currentTarget;
      setProgress(clientWidth < scrollWidth ? (scrollLeft * 100) / (scrollWidth - clientWidth) : 0);
      setDesktopScrollLeft(scrollLeft);
    },
    [setDesktopScrollLeft]
  );

  useEffect(() => {
    const listener = (ev: WheelEvent) => {
      if (ref.current) {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        if(isMac) {
          ref.current.scrollLeft += ev.deltaY * 10;
        } else {
          ref.current.scrollLeft += ev.deltaY * 2;
        }
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
      setDesktopScrollLeft(0); // Reset
    },
    [setDesktopScrollLeft]
  );

  return (
    <main className="w-screen h-screen flex flex-col justify-center overflow-hidden relative">
      <div className="flex">
        <div className="relative">
          <HomePageDesktopHeader />
        </div>
        <div
          className="h-[99.375vh] w-screen overflow-y-hidden overflow-x-scroll flex items-center"
          style={{ maxHeight: MAX_HEIGHT_ON_DESKTOP, minHeight: MIN_HEIGHT_ON_DESKTOP, scrollbarWidth: "none" }}
          onScroll={handleScroll}
          ref={ref}
        >
          {children}
          <HomePageDesktopFooter />
        </div>
      </div>
      <ProgressBar progress={progress} />
    </main>
  );
}

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-[0.625rem] w-screen bg-app-black">
      <div
        className="absolute z-10 h-[0.625rem] top-0 left-0 bg-app-main w-0 transition-[width]"
        style={{ width: `${progress}vw` }}
      />
    </div>
  );
}
