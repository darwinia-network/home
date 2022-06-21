import { CodeSample as ICodeSample } from "../../data/types";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "../../assets/styles/prism.css";

interface Props {
  data: ICodeSample;
}

const CodeSample = ({ data }: Props) => {
  const [activePCTabIndex, setActivePCTabIndex] = useState<number>(0);
  const [activeMobileTabIndex, setActiveMobileTabIndex] = useState<number | undefined>(0);
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const onSwitchPCCodeSampleTab = (tabIndex: number) => {
    setActivePCTabIndex(tabIndex);
  };

  const onSwitchMobileCodeSampleTab = (tabIndex: number) => {
    const index = tabIndex === activeMobileTabIndex ? undefined : tabIndex
    setActiveMobileTabIndex(index);
  };

  const mobileCodeSample = getMobileCodeSample(data, activeMobileTabIndex, onSwitchMobileCodeSampleTab);
  const PCCodeSample = getPCCodeSample(data, activePCTabIndex, onSwitchPCCodeSampleTab);
  return (
    <div>
      <div className={"lg:hidden"}>{mobileCodeSample}</div>
      <div className={"hidden lg:block"}>{PCCodeSample}</div>
    </div>
  );
};

const getPCCodeSample = (
  codeSample: ICodeSample,
  activeTabIndex: number,
  onSwitchCodeSampleTab: (index: number) => void
) => {
  const tabs = codeSample.codes.map((code, index) => {
    const decorationClass = index === activeTabIndex ? `text-primary` : "";
    const key = `${index}-${code.title}`;
    return (
      <div
        className={`${decorationClass} uppercase hover:cursor-pointer title leading-normal text-white mb-[1.875rem] last:mb-0 text-[1.8rem] xl:text-[2.2rem]`}
        key={key}
        onClick={() => {
          onSwitchCodeSampleTab(index);
        }}
      >
        {code.title}
      </div>
    );
  });
  const links = codeSample.links.map((link, index) => {
    const key = `${index}-${link.title}`;
    if (link.isExternal) {
      return (
        <a className={"btn"} key={key} href={link.url} target="_blank" rel="noreferrer">
          {link.title}
        </a>
      );
    }
    return (
      <NavLink className={"btn"} key={key} to={link.url}>
        {link.title}
      </NavLink>
    );
  });
  const codeView = codeSample.codes.map((code, index) => {
    const visibilityClass = activeTabIndex === index ? `` : `hidden`;
    const key = `${index}-${code.title}`;
    const highlightedCode = getCodeView(code.sample, code.language);
    return (
      <div className={`${visibilityClass} flex-1 flex`} key={key}>
        {highlightedCode}
      </div>
    );
  });
  return (
    <div className={"flex items-center"}>
      <div className={"w-[39.25%] shrink-0"}>
        <div>{tabs}</div>
        <div className={"flex gap-[1.25rem] mt-[3.125rem]"}>{links}</div>
      </div>
      {codeView}
    </div>
  );
};

const getMobileCodeSample = (
  codeSample: ICodeSample,
  activeTabIndex: number | undefined,
  onSwitchCodeSampleTab: (index: number) => void
) => {
  const tabsWithSampleCode = codeSample.codes.map((code, index) => {
    const decorationClass = index === activeTabIndex ? `text-primary` : "";
    const key = `${index}-${code.title}`;

    const visibilityClass = activeTabIndex === index ? `` : `hidden`;

    const customPadding = index === 0 ? "0" : "3.125rem";
    const tab = (
      <div
        style={{ paddingTop: customPadding }}
        className={`${decorationClass} uppercase hover:cursor-pointer title leading-normal text-white mb-[0.625rem] last:mb-0`}
        onClick={() => {
          onSwitchCodeSampleTab(index);
        }}
      >
        {`${code.title} ▾`}
      </div>
    );

    const highlightedCode = getCodeView(code.sample, code.language, true);
    const codeJSX = <div className={`${visibilityClass} flex-1 flex`}>{highlightedCode}</div>;
    return (
      <div key={key}>
        {tab}
        {codeJSX}
      </div>
    );
  });
  return <div>{tabsWithSampleCode}</div>;
};

const getCodeView = (codeSample: string, language = "javascript", isMobile = false) => {
  const height = isMobile ? "370px" : "670px";
  const width = isMobile ? "100%" : "auto";
  const padding = isMobile ? "20px" : "40px";
  return (
    <div
      style={{ height, maxHeight: height, width }}
      className={"flex-1 relative flex border border-[255,255,255,0.5]"}
    >
      <div
        style={{ left: padding, right: padding, top: padding, bottom: padding }}
        className={"bg-[#1e1e1e] custom-scroll-bar absolute overflow-auto"}
      >
        <div>
          <pre>
            <code className={`language-${language}`}>{codeSample}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default CodeSample;
