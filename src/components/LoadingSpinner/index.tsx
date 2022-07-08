import "./styles.scss";
import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";

const LoadingSpinner = () => {
  const { t } = useTranslation();
  return (
    <div className={"spinner-wrapper"}>
      <div className={"spinner-ball"} />
      <div className={"spinner-text"}>{t(localeKeys.loading)}</div>
    </div>
  );
};

export default LoadingSpinner;
