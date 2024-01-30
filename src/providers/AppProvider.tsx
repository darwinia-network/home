import { PropsWithChildren, createContext, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

interface AppCtx {
  isDesktopHeight: boolean;
  isDesktopWidth: boolean;
  pcScrollLeft: number;
  setPcScrollLeft: (value: number) => void;
}

export const AppContext = createContext({} as AppCtx);

export default function AppProvider({ children }: PropsWithChildren<unknown>) {
  const [pcScrollLeft, setPcScrollLeft] = useState(0);
  const isDesktopHeight = useMediaQuery("md", "vertical");
  const isDesktopWidth = useMediaQuery("lg");

  return (
    <AppContext.Provider value={{ isDesktopHeight, isDesktopWidth, pcScrollLeft, setPcScrollLeft }}>
      {children}
    </AppContext.Provider>
  );
}
