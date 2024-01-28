import PrettyCode from "../PrettyCode";
import { useEffect, useRef, useState } from "react";

interface Props {
  title: string;
  activeTitle: string;
  description: string;
  code: string;
  onChange?: (title: string) => void;
}

export default function BuildingWithMsgportMobileMenuItem({
  title,
  activeTitle,
  description,
  code,
  onChange = () => undefined,
}: Props) {
  const [expandHeight, setExpandHeight] = useState<number>();
  const [btnHeight, setBtnHeight] = useState<number>();
  const ref = useRef<HTMLDivElement | null>(null);
  const isActive = title === activeTitle;

  useEffect(() => {
    setTimeout(() => {
      setExpandHeight(ref.current?.clientHeight);
    }, 0);
  }, [btnHeight]);

  return (
    <div className="relative" style={{ minHeight: btnHeight, paddingTop: btnHeight ? btnHeight / 2 : undefined }}>
      <button
        className={`absolute top-0 left-0 right-0 rounded-[2.5rem] py-[17px] text-center text-t16b ${
          isActive ? "bg-app-main text-app-white hover:cursor-default" : "bg-app-inner-white text-app-black"
        }`}
        onClick={() => {
          if (!isActive) {
            onChange(title);
          }
        }}
        ref={(node) => setBtnHeight(node?.clientHeight)}
      >
        {title}
      </button>
      <div
        className="overflow-y-hidden transition-[height] duration-300 rounded-b-[2.5rem] bg-app-black"
        style={{ height: isActive ? expandHeight : 0 }}
      >
        <div className="flex flex-col gap-5 p-5" style={{ paddingTop: btnHeight }} ref={ref}>
          <span className="text-t14 text-app-white">{description}</span>
          <PrettyCode className="h-[36.375rem]" language="solidity" code={code} />
        </div>
      </div>
    </div>
  );
}
