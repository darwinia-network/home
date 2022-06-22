interface Props {
  tag: string;
}
const PaperTag = ({ tag }: Props) => {
  return (
    <div
      className={
        "border px-[3.5px] capitalize mr-[0.4375rem] mt-[0.625rem] text text-white text-[0.625rem] leading-[1.5rem]"
      }
    >
      {tag}
    </div>
  );
};

export default PaperTag;
