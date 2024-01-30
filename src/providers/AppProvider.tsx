import { PropsWithChildren, createContext, useState } from "react";

interface AppCtx {
  scrollLeft: number;
  setScrollLeft: (value: number) => void;
}

export const AppContext = createContext({} as AppCtx);

export default function AppProvider({ children }: PropsWithChildren<unknown>) {
  const [scrollLeft, setScrollLeft] = useState(0);

  return <AppContext.Provider value={{ scrollLeft, setScrollLeft }}>{children}</AppContext.Provider>;
}
