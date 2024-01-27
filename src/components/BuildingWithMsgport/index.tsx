import BuildingWithMsgportMobile from "./BuildingWithMsgportMobile";
import BuildingWithMsgportPC from "./BuildingWithMsgportPC";

interface Props {
  title: string[];
  menu: {
    title: string;
    description: string;
    code: string;
  }[];
  link: string; // External link
}

export default function BuildingWithMsgport({ title, menu, link }: Props) {
  return (
    <>
      <BuildingWithMsgportMobile title={title} menu={menu} link={link} />
      <BuildingWithMsgportPC title={title} menu={menu} link={link} />
    </>
  );
}
