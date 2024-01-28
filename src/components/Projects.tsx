import React, { useCallback, useEffect, useRef } from "react";

interface Project {
  Icon: JSX.Element;
}

const projectsData: Project[] = [
  {
    Icon: (
      <img
        alt="..."
        className="shrink-0 w-[16.5rem] h-[4.125rem]"
        width={264}
        height={66}
        src="/images/projects/ethereum.png"
      />
    ),
  },
  {
    Icon: (
      <img
        alt="..."
        className="shrink-0 w-[16.375rem] h-[4.125rem]"
        width={262}
        height={66}
        src="/images/projects/arbitrum.png"
      />
    ),
  },
  {
    Icon: (
      <img
        alt="..."
        className="shrink-0 w-[14.875rem] h-[1.8125rem]"
        width={238}
        height={29}
        src="/images/projects/darwinia.png"
      />
    ),
  },
];

const Card = ({ project }: { project: Project }) => {
  return <div className="flex items-center justify-center h-[7.5rem] shrink-0">{project.Icon}</div>;
};

const AutoInfiniteScroll = ({ items, isVertical }: { items: Project[]; isVertical?: boolean }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const container = e.currentTarget;

    if (container.scrollWidth <= container.clientWidth + container.scrollLeft) {
      container.scrollLeft = 1;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth - container.clientWidth - 1;
    }
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy(isVertical ? -1 : 1, 0);
      }
    }, 30);
    return () => {
      clearInterval(t);
    };
  }, [isVertical]);

  useEffect(() => {
    if (containerRef.current) {
      const w = containerRef.current.scrollWidth - containerRef.current.clientWidth;
      if (w > 0) {
        containerRef.current.scrollBy({ left: Math.floor(w / 2) });
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="overflow-x-scroll scrollbar-hide" onScroll={handleScroll}>
      <div className="flex items-center gap-[3.75rem]">
        {items.map((item, index) => (
          <Card key={`1-${index}`} project={item} />
        ))}

        {/* Copy */}
        {items
          .concat(items)
          .concat(items)
          .map((item, index) => (
            <Card key={`2-${index}`} project={item} />
          ))}
      </div>
    </div>
  );
};

export default function Projects({ isVertical }: { isVertical?: boolean }) {
  return (
    <div className={`bg-app-inner-white origin-top-left ${isVertical ? "rotate-90" : ""}`}>
      <AutoInfiniteScroll items={projectsData} isVertical={isVertical} />
    </div>
  );
}
