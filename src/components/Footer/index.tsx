import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";
import { Footer as IFooter, FooterSection, SocialNetwork } from "../../data/types";
import { NavLink } from "react-router-dom";
// import earth from "../../assets/images/earth.svg";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { isValidEmail } from "../../utils";

interface Props {
  data: IFooter;
}

const Footer = ({ data }: Props) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const feedbackRef = useRef<HTMLDivElement>(null);
  const successFeedbackRef = useRef<HTMLDivElement>(null);
  const errorFeedbackRef = useRef<HTMLDivElement>(null);
  const submitButton = useRef<HTMLButtonElement>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const footerSections = createFooterSections(data.referenceLinks);
  const copyRight = data.copyright;
  const socialNetworkLinks = getSocialNetworkLinks(data.socialNetworks);

  /* NOTE: Load this javascript here to avoid issues with mailchimp's JS file */
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    /* watch the DOM changes to see when the email feedback is visible to the user or not.
     * This API may not be supported by some old browsers */
    const observer = new MutationObserver((mutationRecord) => {
      /* if there are any changes in the DOM, enable the button  */
      setLoading(false);
    });

    if (feedbackRef.current) {
      observer.observe(feedbackRef.current, {
        attributes: true,
        subtree: true,
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    hideFeedback();
    setEmail(() => {
      return e.target.value;
    });
  };

  const onInputFocused = () => {
    hideFeedback();
  };

  const hideFeedback = () => {
    if (successFeedbackRef.current) {
      successFeedbackRef.current.style.display = "none";
    }
    if (errorFeedbackRef.current) {
      errorFeedbackRef.current.style.display = "none";
    }
  };

  const onFormSubmitted = () => {
    if (!submitButton.current) {
      return;
    }
    if (!isValidEmail(email)) {
      return;
    }
    setLoading(true);
    submitButton.current.click();
  };

  return (
    <div className={"inter-block-space-1"}>
      <div className={"hidden lg:block lg:px-0"}>
        <div className={"divider-50"} />
      </div>
      <div className={"container py-[1.25rem] lg:py-[3.125rem]"}>
        {/* Only visible on PC */}
        <div className={"hidden lg:block"}>
          <div className={"title text-white uppercase"}>{t(localeKeys.subscribeToUpdates)}</div>
          <div className={"text-white my-[1.25rem] capitalize"}>{t(localeKeys.trackLatestUpdates)}</div>

          {/* Custom Input Field */}
          <div className={"relative"}>
            <div className={"relative inline-block w-full max-w-[21rem]"}>
              {/* for some reasons when you press enter when the focus is on the
                form, the form calls the onFormSubmitted method automatically
                 and that's exactly what we need. SO we don't need to further do anything
                  on the form submission when the user clicks enter button */}
              <form
                action="https://network.us6.list-manage.com/subscribe/post?u=eb1c779b75a344e2d52755879&amp;id=70a65557b6"
                target="_blank"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
              >
                <input
                  onChange={(e) => {
                    onInputChanged(e);
                  }}
                  onFocus={() => {
                    onInputFocused();
                  }}
                  onClick={() => {
                    onInputFocused();
                  }}
                  name={"EMAIL"}
                  id="mce-EMAIL"
                  className={
                    "w-full placeholder:text-white placeholder:opacity-50 text-white border border-1 border-solid bg-black outline-0 p-[0.625rem] pr-[7.375rem]"
                  }
                  type="email"
                  placeholder={t(localeKeys.yourEmailHere)}
                />
                <button
                  type="submit"
                  className={
                    "btn capitalize absolute right-0 top-0 bottom-0 flex items-center disabled:text-gray disabled:cursor-default"
                  }
                  disabled={isLoading}
                  onClick={() => {
                    onFormSubmitted();
                  }}
                >
                  {isLoading ? t(localeKeys.subscribing) : t(localeKeys.subscribe)}
                </button>
                {/* the hidden button to trigger form submit action */}
                <button
                  ref={submitButton}
                  type="submit"
                  className={"btn w-[1px] h-[1px] opacity-0 overflow-hidden absolute right-0 -z-10"}
                >
                  hidden btn
                </button>
              </form>
            </div>
            <div
              ref={feedbackRef}
              id="mce-responses"
              className="clear absolute capitalize text-white left-0 -bottom-[1.875rem]"
            >
              <div className="response" ref={errorFeedbackRef} id="mce-error-response" style={{ display: "none" }} />
              <div
                className="response"
                ref={successFeedbackRef}
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div className={"flex shrink-0 justify-between mt-[3.125rem]"}>{footerSections}</div>
        </div>
      </div>
      <div className={"hidden lg:block lg:px-0"}>
        <div className={"divider-50"} />
      </div>
      <div className={"container lg:hidden"}>
        <div className={"divider-50"} />
      </div>
      <div className={"container py-[1.25rem] lg:py-[3.125rem]"}>
        <div className={"flex flex-col justify-between lg:flex-row"}>
          <div className={"order-3 lg:order-1"}>{copyRight}</div>
          <div className={"divider-50 my-[1.25rem] order-2 lg:hidden"} />
          <div className={"flex items-center order-1 lg:order-2"}>
            {socialNetworkLinks}
            {/* <div className={"flex items-center shrink-0 hover:opacity-70 hover:cursor-pointer"}>
              <img className={"w-[1.5rem] h-[1.5rem] mr-[5px]"} src={earth} alt="image" />
              <div className={"uppercase text-white"}>en</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const getSocialNetworkLinks = (socialNetworks: SocialNetwork[]) => {
  return socialNetworks.map((network, index) => {
    const rightSpace = index === socialNetworks.length - 1 ? "" : "mr-[1.5rem]";
    return (
      <a className={"shrink-0 hover:opacity-70"} key={index} href={network.url} target="_blank" rel="noreferrer">
        <img className={`w-[1.5rem] h-[1.5rem] ${rightSpace}`} src={network.logo} alt="image" />
      </a>
    );
  });
};

const createFooterSection = (section: FooterSection) => {
  const sectionTitle = <div className={"title text-white"}>{section.title}</div>;
  const links = section.links.map((link) => {
    const key = `${link.title}`;
    if (link.isFake) {
      return (
        <div className={"capitalize text-white py-[0.3125rem] my-[0.3125rem]"} key={key}>
          {link.title}
        </div>
      );
    }
    if (link.url === "") {
      return (
        <div className={"capitalize text-white py-[0.3125rem] my-[0.3125rem] opacity-50"} key={key}>
          {link.title}
        </div>
      );
    }
    if (link.isExternal) {
      return (
        <a
          className={"capitalize text-white py-[0.3125rem] my-[0.3125rem] hover:opacity-70"}
          key={key}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.title}
        </a>
      );
    }

    return (
      <NavLink
        className={"capitalize text-white py-[0.3125rem] my-[0.3125rem] hover:opacity-70"}
        key={key}
        to={link.url}
      >
        {link.title}
      </NavLink>
    );
  });

  return (
    <div className={"flex flex-col"} key={section.title}>
      <div
        className={
          "relative pb-[1.25rem] mb-[1.25rem] after:content-[''] after:absolute after:left-0 after:bottom-0 after:bg-primary after:h-[5px] after:w-[2.75rem]"
        }
      >
        {sectionTitle}
      </div>
      <div className={"flex flex-col"}>{links}</div>
    </div>
  );
};

const createFooterSections = (data: FooterSection[]) => {
  return data.map((section) => {
    if (section.categories?.length) {
      return (
        <div key={section.title} className="flex flex-col items-start justify-start gap-20">
          {section.categories.map((s) => createFooterSection(s))}
        </div>
      );
    }

    return createFooterSection(section);
  });
};

export default Footer;
