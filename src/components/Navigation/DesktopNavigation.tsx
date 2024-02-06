import { Link } from "react-router-dom";
import Dropdown from "../../ui/Dropdown";
import { Dispatch, SetStateAction, useCallback } from "react";
import ExternalIcon from "../ExternalIcon";

interface Props {
  data: { label: string; sub: { label: string; link: string; isExternal?: boolean }[] }[];
  isNavigationActive: boolean[];
  setIsNavigationActive: Dispatch<SetStateAction<boolean[]>>;
}

export default function DesktopNavigation({ data, isNavigationActive, setIsNavigationActive }: Props) {
  const handleActiveChange = useCallback(
    (index: number, isActive: boolean) =>
      setIsNavigationActive((prev) => {
        const preSate = [...prev];
        preSate[index] = isActive;
        return preSate;
      }),
    [setIsNavigationActive]
  );

  return (
    <div className="hidden lg:flex items-center gap-[2.5rem]">
      {data.map(({ label, sub }, index) => (
        <Navigation
          key={label}
          index={index}
          label={label}
          sub={sub}
          isActive={isNavigationActive[index]}
          onActiveChange={handleActiveChange}
        />
      ))}
    </div>
  );
}

function Navigation({
  index,
  label,
  sub,
  isActive,
  onActiveChange,
}: {
  index: number;
  label: string;
  sub: { label: string; link: string; isExternal?: boolean }[];
  isActive: boolean;
  onActiveChange: (index: number, active: boolean) => void;
}) {
  const handleOpenChange = useCallback((isOpen: boolean) => onActiveChange(index, isOpen), [index, onActiveChange]);

  return (
    <Dropdown
      hoverable
      offset={12}
      isOpen={isActive}
      placement="bottom"
      label={
        <span
          className={`text-t20 whitespace-nowrap transition-colors hover:text-app-main ${
            isActive ? "text-app-main" : "text-app-black"
          }`}
        >
          {label}
        </span>
      }
      labelClassName="flex items-center gap-[0.3125rem]"
      childClassName="rounded-[1.25rem] bg-app-black p-[1.875rem] flex flex-col"
      onOpenChange={handleOpenChange}
    >
      {sub.map((s) =>
        s.isExternal ? (
          <a
            key={s.label}
            className="text-t16b text-app-white px-[0.9375rem] py-[0.6875rem] rounded-[0.625rem] transition-colors bg-transparent hover:bg-app-main inline-flex items-center gap-1"
            rel="noopener noreferrer"
            target="_blank"
            href={s.link}
          >
            <span>{s.label}</span> <ExternalIcon color="app-gray" />
          </a>
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
