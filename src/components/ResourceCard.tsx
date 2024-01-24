interface Props {
  icon: string; // File path
  title: string;
  description: string;
  detail: {
    link: string;
    // isExternal?: boolean;
  };
}

export default function ResourceCard({ icon, title, description, detail }: Props) {
  return (
    <div className="bg-app-inner-white rounded-[10px] p-5 lg:p-[60px] flex flex-col gap-10 h-fit w-full lg:w-[345px]">
      <img alt="" src={icon} className="w-[70px] h-[70px]" />
      <div className="flex flex-col gap-medium">
        <h3 className="text-h3 text-black">{title}</h3>
        <span className="text-t16 text-app-gray">{description}</span>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href={detail.link}
        className="w-fit inline-flex items-center gap-medium pl-[15px] pr-[10px] py-[8px] rounded-[40px] border border-black"
      >
        <span className="text-t16b text-black">Detail</span>
        <img width={24} height={24} alt="..." src="/images/right-arrow-black-background-round.svg" />
      </a>
    </div>
  );
}
