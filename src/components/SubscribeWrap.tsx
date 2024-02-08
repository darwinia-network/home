import Subscribe from "./Subscribe";

export default function SubscribeWrap({ isHomePage }: { isHomePage?: boolean }) {
  return (
    <div
      className={`hidden lg:flex flex-col gap-5 pb-5 max-w-max ${isHomePage ? "items-end self-end" : "items-start"}`}
    >
      <h3 className="text-h2 text-app-white whitespace-nowrap">Subscribe to Project Updates</h3>
      <span className={`text-t16 ${isHomePage ? "text-app-white" : "text-app-gray"}`}>
        Track the latest updates of Darwinia Network
      </span>
      <Subscribe />
    </div>
  );
}
