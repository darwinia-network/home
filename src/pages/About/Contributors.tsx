import { useEffect, useRef, useState } from "react";
import RightArrowRound from "../../components/RightArrowRound";

interface Props {
  contributors: { avatar: string }[];
  github: string;
}

export default function Contributors({ contributors, github }: Props) {
  const [styles, setStyles] = useState<{ height: number | undefined; width: number | undefined }>({
    height: undefined,
    width: undefined,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setStyles({ width: ref.current?.clientWidth, height: ref.current?.clientHeight }), 0);
  }, []);

  return (
    <div className="rounded-[1.875rem] bg-app-black relative" style={{ height: styles.height, width: styles.width }} data-aos="fade-up">
      <img
        alt="..."
        src="/images/github-bg.svg"
        width={400}
        height={400}
        className="absolute z-10 shrink-0 top-1/2 left-1/2 lg:left-[80%]"
        style={{ height: 400, width: 400, maxWidth: "unset", transform: "translate(-50%, -50%)" }}
      />
      <div className="absolute top-0 left-0 p-5 flex flex-col gap-[1.875rem] z-[11]" ref={ref}>
        <span className="text-h3 text-app-white">Contributors on GitHub</span>
        <div className="flex items-center gap-5 flex-wrap">
          {contributors.map((contributor, index) => (
            <img
              key={index}
              alt="..."
              width={50}
              height={50}
              className="w-[3.125rem] h-[3.125rem]"
              src={contributor.avatar}
            />
          ))}
        </div>
        <ViewAll github={github} />
      </div>
    </div>
  );
}

function ViewAll({ github }: { github: string }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={github}
      className={`border transition-colors rounded-[6.25rem] flex items-center justify-center gap-medium p-medium w-full lg:w-fit ${
        isHovering ? "border-app-main text-app-main" : "border-app-white text-app-white"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <span className="text-t16">View all in Github</span>
      <RightArrowRound fill={isHovering ? "main" : "white"} />
    </a>
  );
}
