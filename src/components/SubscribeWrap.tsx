import Subscribe from "./Subscribe";

export default function SubscribeWrap() {
  return (
    <div className="hidden lg:flex flex-col items-end gap-5 pb-5 max-w-max self-end">
      <h3 className="text-h2 text-app-white">Subscribe to Project Updates</h3>
      <span className="text-t16 text-app-white">Track the latest updates of Darwinia Network</span>
      <Subscribe />
    </div>
  );
}
