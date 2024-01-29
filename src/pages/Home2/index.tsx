import HomeV2Mobile from "./mobile";
import HomeV2PC from "./pc";

export default function HomeV2() {
  return (
    <>
      {false && <HomeV2Mobile />}
      {false && <HomeV2PC />}
      <main className="overflow-auto lg:flex items-center hidden scrollbar-color">
        <div className="bg-app-main h-[120vh] w-[160vw] relative shrink-0">
          <div className="absolute z-10 text-black top-0 left-0">Top Left</div>
          <div className="absolute z-10 text-black top-0 right-0">Top Right</div>
          <div className="absolute z-10 text-black bottom-0 left-0">Bottom Left</div>
          <div className="absolute z-10 text-black bottom-0 right-0">Bottom Right</div>
        </div>
      </main>
    </>
  );
}
