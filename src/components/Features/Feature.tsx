import useApp from "../../hooks/useApp";

interface Props {
  icon: string; // File path
  title: string;
  description: string;
}

export default function Feature({ icon, title, description }: Props) {
  const { isDesktopWidth, isDesktopHeight } = useApp();

  return (
    <div className="w-full lg:w-[500px] flex flex-col gap-5" data-aos={isDesktopWidth ? "fade-left" : "fade-up"}>
      <div className="flex items-center justify-center w-[90px] h-[60px] lg:w-[180px] lg:h-[120px] bg-black rounded-[10px]">
        <img className="w-10 h-10 lg:w-20 lg:h-20" alt="..." src={icon} />
      </div>
      <h2 className={`text-black ${isDesktopWidth ? (isDesktopHeight ? "text-h1" : "text-h2") : "text-h2"}`}>
        {title}
      </h2>
      <span className="text-t16 text-black">{description}</span>
    </div>
  );
}
