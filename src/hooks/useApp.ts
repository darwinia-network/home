import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";

export function useApp() {
  return useContext(AppContext);
}
