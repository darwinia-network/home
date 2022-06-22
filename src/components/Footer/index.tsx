import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";
import { Footer as IFooter, FooterSection, SocialNetwork } from "../../data/types";
import { NavLink } from "react-router-dom";
import earth from "../../assets/images/earth.svg";
import { ChangeEvent, useState } from "react";
import http from "../../http";

interface Props {
  data: IFooter;
}

interface Subscription {
  email?: string | undefined;
  status?: string | undefined;
  isSubmitting?: boolean;
}

const Footer = ({ data }: Props) => {
  const { t } = useTranslation();
  const [subscription, setSubscription] = useState<Subscription>({});
  const { email, isSubmitting } = subscription;

  const footerSections = createFooterSections(data.referenceLinks);
  const copyRight = data.copyright;
  const socialNetworkLinks = getSocialNetworkLinks(data.socialNetworks);

  const isValidEmail = (email: string) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const updateSubmitStatus = (isSubmitting: boolean) => {
    setSubscription((old) => {
      return {
        ...old,
        isSubmitting,
      };
    });
  };

  const updateMessageStatus = (message: string | undefined) => {
    setSubscription((old) => {
      return {
        ...old,
        status: message,
      };
    });
  };

  const onSubscribe = async () => {
    if (!email || !isValidEmail(email)) {
      updateMessageStatus(t(localeKeys.wrongEmail));
      return;
    }
    try {
      updateSubmitStatus(true);
      const { data } = await http.post({
        path: "",
        data: {
          email,
        },
      });

      console.log(data);
      updateMessageStatus(t(localeKeys.subscriptionSuccessful));
      updateSubmitStatus(false);
      onResetEmailInputField();
    } catch (e) {
      updateSubmitStatus(false);
      // catch error
    }
  };

  const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setSubscription((old) => {
      return {
        ...old,
        email: e.target.value,
        status: undefined,
      };
    });
  };

  const onResetEmailInputField = () => {
    setSubscription((old) => {
      return {
        ...old,
        email: undefined,
      };
    });
  };

  return (
    <div className={"inter-block-space-1"}>
      <div className={"hidden lg:block lg:px-0"}>
        <div className={"divider-50"} />
      </div>
      <div className={"container py-[1.25rem] lg:py-[3.125rem]"}>
        {/* Only visible on PC */}
        <div className={"hidden lg:block"}>
          <div className={"title text-white uppercase"}>Subscribe to Project Updates</div>
          <div className={"text-white my-[1.25rem]"}>Track the latest updates of Darwinia Network.</div>

          {/* Custom Input Field */}
          <div className={"relative"}>
            <div className={"relative inline-block w-full max-w-[21rem]"}>
              <input
                onChange={(e) => {
                  onInputChanged(e);
                }}
                name={"email"}
                className={
                  "w-full placeholder:text-white placeholder:opacity-50 text-white border border-1 border-solid bg-black outline-0 p-[0.625rem] pr-[7.375rem]"
                }
                type="email"
                value={!email ? "" : email}
                placeholder={t(localeKeys.yourEmailHere)}
              />
              <button
                disabled={isSubmitting}
                onClick={() => {
                  onSubscribe();
                }}
                className={
                  "btn capitalize absolute right-0 top-0 bottom-0 flex items-center disabled:text-gray disabled:cursor-default"
                }
              >
                {t(localeKeys.subscribe)}
              </button>
            </div>
            <div className={"absolute capitalize text-white left-0 -bottom-[1.875rem]"}>{subscription.status}</div>
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
            <div className={"flex items-center shrink-0 hover:opacity-70 hover:cursor-pointer"}>
              <img className={"w-[1.5rem] h-[1.5rem] mr-[5px]"} src={earth} alt="image" />
              <div className={"uppercase text-white"}>en</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const getSocialNetworkLinks = (socialNetworks: SocialNetwork[]) => {
  return socialNetworks.map((network, index) => {
    return (
      <a className={"shrink-0 hover:opacity-70"} key={index} href={network.url} target="_blank" rel="noreferrer">
        <img className={"w-[1.5rem] h-[1.5rem] mr-[1.5rem]"} src={network.logo} alt="image" />
      </a>
    );
  });
};

const createFooterSections = (data: FooterSection[]) => {
  return data.map((section, index) => {
    const sectionTitle = <div className={"title text-white"}>{section.title}</div>;
    const links = section.links.map((link, subIndex) => {
      const key = `${index}-${subIndex}`;
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
      <div className={"flex flex-col"} key={index}>
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
  });
};

export default Footer;
