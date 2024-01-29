import HomeV2Mobile from "./Home2Mobile";
import HomeV2PC from "./Home2PC";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function HomeV2() {
  const isMatchedMediaQuery = useMediaQuery("lg");
  return isMatchedMediaQuery ? <HomeV2PC /> : <HomeV2Mobile />;
}
