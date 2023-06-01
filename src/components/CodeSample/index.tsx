import { CodeSample as ICodeSample } from "../../data/types";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { funky } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
  data: ICodeSample;
}

const CodeSample = ({ data }: Props) => {
  const [activePCTabIndex, setActivePCTabIndex] = useState<number>(0);
  const [activeMobileTabIndex, setActiveMobileTabIndex] = useState<number | undefined>(0);

  const onSwitchPCCodeSampleTab = (tabIndex: number) => {
    setActivePCTabIndex(tabIndex);
  };

  const onSwitchMobileCodeSampleTab = (tabIndex: number) => {
    const index = tabIndex === activeMobileTabIndex ? undefined : tabIndex;
    setActiveMobileTabIndex(index);
  };

  const mobileCodeSample = getMobileCodeSample(data, activeMobileTabIndex, onSwitchMobileCodeSampleTab);
  const PCCodeSample = getPCCodeSample(data, activePCTabIndex, onSwitchPCCodeSampleTab);
  return (
    <div>
      <h3 className="lg:hidden title uppercase text-2xl text-white font-bold">{data.title}</h3>
      <div className={"lg:hidden mt-12"}>{mobileCodeSample}</div>
      <div className={"hidden lg:block"}>{PCCodeSample}</div>
    </div>
  );
};

const getPCCodeSample = (
  codeSample: ICodeSample,
  activeTabIndex: number,
  onSwitchCodeSampleTab: (index: number) => void
) => {
  const { title, pcSide } = codeSample;
  const tabs = codeSample.codes.map((code, index) => {
    const decorationClass = index === activeTabIndex ? `text-primary` : "";
    const key = `${index}-${code.title}`;
    return (
      <div
        className={`${decorationClass} ease-in-out transition-colors duration-[300ms] lowercase self-start hover:cursor-pointer title text-white mb-[1.875rem] last:mb-0`}
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
    const isCodeVisible = activeTabIndex === index;
    const key = `${index}-${code.title}`;
    const highlightedCode = getCodeView(code.sample, code.language);

    return (
      <CSSTransition
        key={key}
        unmountOnExit={true}
        in={isCodeVisible}
        appear={true}
        timeout={500}
        classNames={"pc-code"}
      >
        <div className={`flex-1 flex h-[670px] absolute w-full`}>
          <div className={`w-full`}>{highlightedCode}</div>
        </div>
      </CSSTransition>
    );
  });
  return (
    <div className={"flex items-center gap-[5.625rem]"}>
      <div className={`shrink-0 w-fit ${pcSide === "left" ? "order-2" : ""}`}>
        <div className="title uppercase text-white text-5xl leading-[4rem] font-bold">{title}</div>
        <div className={"flex flex-col mt-[2.375rem]"}>{tabs}</div>
        <div className={"flex gap-[1.25rem] mt-[2.375rem]"}>{links}</div>
      </div>
      <div className={`flex-1 h-[670px] relative border border-halfWhite ${pcSide === "left" ? "order-1" : ""}`}>
        {codeView}
      </div>
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

    // const visibilityClass = activeTabIndex === index ? `` : `hidden`;
    const isCodeVisible = activeTabIndex === index;

    const tab = (
      <div
        className={`${decorationClass} ease-in-out transition-colors duration-[300ms] lowercase hover:cursor-pointer text text-xl font-bold text-white mb-[0.625rem]`}
        onClick={() => {
          onSwitchCodeSampleTab(index);
        }}
      >
        {`${code.title} ▾`}
      </div>
    );

    const highlightedCode = getCodeView(code.sample, code.language, true);
    const codeJSX = <div className={`overflow-hidden flex-1 flex`}>{highlightedCode}</div>;
    return (
      <div key={key} className={`${isCodeVisible ? "mb-[3.125rem]" : ""}`}>
        {tab}
        <CSSTransition unmountOnExit={true} in={isCodeVisible} appear={true} timeout={300} classNames={"mobile-code"}>
          {codeJSX}
        </CSSTransition>
      </div>
    );
  });
  return <div>{tabsWithSampleCode}</div>;
};

const getCodeView = (codeSample: string, language = "javascript", isMobile = false) => {
  const height = isMobile ? "370px" : "670px";
  const width = isMobile ? "100%" : "auto";
  const padding = isMobile ? "20px" : "40px";
  const border = isMobile ? "border border-halfWhite" : "";
  return (
    <div style={{ height, maxHeight: height, width, padding }} className={`flex-1 relative flex ${border}`}>
      <SyntaxHighlighter
        className={"w-full custom-scroll-bar overflow-auto"}
        customStyle={{ background: "#141818" }}
        codeTagProps={{
          style: {
            textAlign: "left",
            wordSpacing: "normal",
            wordBreak: "normal",
            overflowWrap: "normal",
            lineHeight: 1.5,
            tabSize: 4,
            hyphens: "none",
            background: "none",
            color: "white",
            fontFamily: "JetBrainsMono-Light",
            fontSize: "0.875rem",
          },
        }}
        language={language}
        style={funky}
      >
        {codeSample}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSample;
