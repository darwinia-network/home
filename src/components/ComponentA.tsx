import { useTranslation } from "react-i18next";
import localeKeys from "../locale/localeKeys";
const ComponentA = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div>This is component A</div>
      <div>Translation {t(localeKeys.welcomeToReact)}</div>
      <div dangerouslySetInnerHTML={{ __html: t(localeKeys.messagesCounter, { counter: 50, user: "IsuNas" }) }} />
    </div>
  );
};

export default ComponentA;
