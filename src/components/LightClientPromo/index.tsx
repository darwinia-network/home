import { LightClient } from "../../data/types";

interface Props {
  data: LightClient;
}
const LightClientPromo = ({ data }: Props) => {
  const { title, subTitle, image, text } = data;
  return (
    <div>
      <div>{title}</div>
      <div className={"flex flex-col lg:flex-row lg:items-center"}>
        <div className={"inter-block-space-2 flex-shrink-0 w-full lg:w-[42.08%]"}>
          <img src={image} alt="image" />
        </div>
        <div className={"flex flex-col capitalize inter-block-space-2 lg:pl-[4.6875rem] lg:pr-[8.75rem]"}>
          <div className={"title text-white"}>{subTitle}</div>
          <div className={"mt-[0.625rem] lg:mt-[2.5rem]"} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </div>
    </div>
  );
};

export default LightClientPromo;
