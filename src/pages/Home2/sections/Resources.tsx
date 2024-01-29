import Projects from "../../../components/Projects";
import ResourcesV2 from "../../../components/ResourcesV2";

export function ResourcesSectionMobile() {
  return (
    <div className="bg-app-white pb-[6.25rem]">
      <Projects />
      <div className="h-[6.25rem]" />
      <div className="px-[1.25rem]">
        <ResourcesV2 />
      </div>
    </div>
  );
}

export function ResourcesPC() {
  return (
    <div className="bg-app-white pl-[7.5rem] h-full flex flex-col justify-center relative">
      <div className="w-[20rem] h-[20rem] shrink-0 bg-app-main opacity-20 rounded-full blur-[200px] absolute z-10 -top-[11rem] right-[10rem]" />
      <div className="w-[20rem] h-[20rem] shrink-0 bg-app-main opacity-20 rounded-full blur-[200px] absolute z-10 -bottom-[14rem] left-[6rem]" />
      <div className="absolute z-10 top-0">
        <Projects isVertical />
      </div>
      <div className="px-[7.5rem]">
        <ResourcesV2 />
      </div>
    </div>
  );
}
