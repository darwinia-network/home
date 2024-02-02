import PrettyCode from "../PrettyCode";
import { useRef, useState } from "react";

interface Props {
  title: string;
  activeTitle: string;
  description: string;
  code: string;
  language: "solidity" | "javascript";
  onChange?: (title: string) => void;
}

export default function MobileMenuItem({
  title,
  activeTitle,
  description,
  code,
  language,
  onChange = () => undefined,
}: Props) {
  const [btnHeight, setBtnHeight] = useState<number>();
  const ref = useRef<HTMLDivElement | null>(null);
  const isActive = title === activeTitle;

  return (
    <div className="relative" style={{ minHeight: btnHeight, paddingTop: btnHeight ? btnHeight / 2 : undefined }}>
      <button
        className={`absolute top-0 left-0 right-0 rounded-[2.5rem] py-[17px] text-center text-t16b capitalize ${
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
        style={{ height: isActive ? ref.current?.clientHeight : 0 }}
      >
        <div className="flex flex-col gap-5 p-5" style={{ paddingTop: btnHeight }} ref={ref}>
          {description ? <span className="text-t14 text-app-white">{description}</span> : null}
          <PrettyCode className="h-[36.375rem]" language={language} code={code} />
        </div>
      </div>
    </div>
  );
}
