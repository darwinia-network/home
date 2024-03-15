import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ExternalIcon from "../ExternalIcon";

interface Props {
  data: {
    label: string;
    sub: { label: string; link: string; isExternal?: boolean }[];
    link?: string;
    isExternal?: boolean;
  }[];
}

export default function MobileNavigation({ data }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<(HTMLDivElement | null)[]>(new Array(data.length).fill(null));

  return (
    <div className="flex flex-col lg:hidden w-full">
      {data.map(({ label, sub, link, isExternal }, index) => (
        <div key={label} className="w-full flex flex-col items-end">
          {sub.length ? (
            <>
              <button
                className="px-[1.25rem] py-[1.0625rem] flex items-center justify-end gap-[0.625rem] w-full"
                onClick={() => setActiveIndex((prev) => (prev === index ? -1 : index))}
              >
                <span className="text-t16b text-app-white">{label}</span>
                <Arrow isOpen={index === activeIndex} />
              </button>
              <div
                className="transition-[height] duration-200 overflow-y-hidden w-full"
                style={{ height: index === activeIndex ? ref.current[index]?.clientHeight : 0 }}
              >
                <div
                  className="bg-app-inner-black flex flex-col items-end"
                  ref={(node) => {
                    ref.current[index] = node;
                  }}
                >
                  {sub.map((s) => (
                    <SubItem key={s.label} label={s.label} link={s.link} isExternal={s.isExternal} />
                  ))}
                </div>
              </div>
            </>
          ) : isExternal ? (
            <a
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              className="px-[1.25rem] py-[1.0625rem] inline-flex items-center justify-end gap-[0.625rem] w-full"
            >
              <span className="text-t16b text-app-white">{label}</span>
              <Arrow className="invisible" />
            </a>
          ) : (
            <Link
              to={link ?? "/"}
              className="px-[1.25rem] py-[1.0625rem] inline-flex items-center justify-end gap-[0.625rem] w-full"
            >
              <span className="text-t16b text-app-white">{label}</span>
              <Arrow className="invisible" />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

function SubItem({ label, link, isExternal }: { label: string; link: string; isExternal?: boolean }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="flex items-center gap-[0.9375rem] w-full"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isExternal ? (
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
          className={`w-full text-end py-[1.0625rem] text-t14b transition-colors inline-flex items-center justify-end gap-2 ${
            isHovering ? "text-app-main" : "text-app-gray"
          }`}
        >
          <span>{label}</span>
          <ExternalIcon color="app-gray" width={14} height={14} />
        </a>
      ) : (
        <Link
          className={`w-full text-end py-[1.0625rem] text-t14b transition-colors ${
            isHovering ? "text-app-main" : "text-app-gray"
          }`}
          to={link}
        >
          {label}
        </Link>
      )}
      <div
        className={`w-[0.3125rem] h-[3.125rem] transition-colors ${isHovering ? "bg-app-main" : "bg-transparent"}`}
      />
    </div>
  );
}

function Arrow({ isOpen, className }: { isOpen?: boolean; className?: string }) {
  return (
    <div
      className={`border-t-[0.3125rem] border-t-app-white border-x-[0.25rem] border-x-transparent shrink-0 transition-transform ${className}`}
      style={{ transform: isOpen ? "rotateX(180deg)" : "rotateX(0)" }}
    />
  );
}
