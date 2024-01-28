import { Link } from "react-router-dom";
import Dropdown from "../../ui/Dropdown";

interface Props {
  data: { label: string; sub: { label: string; link: string; isExternal?: boolean }[] }[];
}

export default function NavigationV2PC({ data }: Props) {
  return (
    <div className="flex items-center gap-[2.5rem]">
      {data.map(({ label, sub }) => (
        <Navigation key={label} label={label} sub={sub} />
      ))}
    </div>
  );
}

function Navigation({ label, sub }: { label: string; sub: { label: string; link: string; isExternal?: boolean }[] }) {
  return (
    <Dropdown
      hoverable
      placement="bottom"
      label={<span className="text-t20 text-app-black whitespace-nowrap">{label}</span>}
      labelClassName="flex items-center gap-[0.3125rem]"
      childClassName="rounded-[1.25rem] bg-app-black p-[1.875rem] flex flex-col"
    >
      {sub.map((s) =>
        s.isExternal ? (
          <a
            key={s.label}
            className="text-t16b text-app-white px-[0.9375rem] py-[0.6875rem] rounded-[0.625rem] transition-colors bg-transparent hover:bg-app-main"
            rel="noopener noreferrer"
            target="_blank"
            href={s.link}
          ></a>
        ) : (
          <Link
            key={s.label}
            className="text-t16b text-app-white px-[0.9375rem] py-[0.6875rem] rounded-[0.625rem] transition-colors bg-transparent hover:bg-app-main"
            to={s.link}
          >
            {s.label}
          </Link>
        )
      )}
    </Dropdown>
  );
}
