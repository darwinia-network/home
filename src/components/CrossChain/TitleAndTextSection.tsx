interface props {
  text: string;
  title: string;
  classes: string;
}

const TitleAndTextSection = ({ text, title, classes }: props) => {
  return (
    <div className={"text-center lg:text-left " + classes}>
      <h2 className="text-[1.375rem] lg:text-[1.875rem] font-[700] lg:font-[600] leading-[1.688rem] lg:leading-[2.375rem] text-black tracking-[0.063rem]">
        {title}
      </h2>
      <p className="text-[0.875rem] text-black leading-[1.375rem] tracking-[0.063rem] font-[400] mt-[1.25rem]">
        {text}
      </p>
    </div>
  );
};

export default TitleAndTextSection;
