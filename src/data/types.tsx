export type SupportedLanguages = "enUS" | "zhCN";

export type Page = "HOME" | "DEVELOPERS" | "TOKENS" | "COMMUNITY" | "PAPERS" | "DARWINIA_CHAIN";
export type HeroType = 1 | 2;
export type FeatureType = 1 | 2 | 3 | 4;
export type PCGrid = 2 | 3 | 4;

export interface Link {
  title: string;
  url: string;
  isExternal: boolean;
  isFake?: boolean;
  isComingSoon?: boolean;
}

export interface Feature {
  icon: string;
  title?: string;
  text?: string;
  type: FeatureType;
  links?: Link[];
}

export interface FeatureWrapper {
  title: JSX.Element;
  isNumbered?: boolean;
  data: Feature[];
  pcGrid: PCGrid;
  links?: Link[];
}

export interface LightClient {
  title: JSX.Element;
  subTitle: string;
  image: string;
  text: string;
}

export interface DarwiniaPromo {
  title: JSX.Element;
  subTitle: string;
  image: JSX.Element;
  content: {
    text: string;
    list: string[];
  };
  links: Link[];
}

export interface SocialNetwork {
  logo: string;
  iconWidth?: number;
  iconHeight?: number;
  url: string;
}

export interface FooterSection {
  title: string;
  links: Link[];
  categories?: Omit<FooterSection, "categories">[];
}

export interface Footer {
  copyright: JSX.Element;
  socialNetworks: SocialNetwork[];
  referenceLinks: FooterSection[];
}

export interface Code {
  title: string;
  sample: string;
  language: string;
}

export interface CodeSample {
  title: string;
  links: Link[];
  codes: Code[];
  pcSide?: "left" | "right";
}

export interface Hero {
  image: JSX.Element;
  // title?: JSX.Element;
  text?: string;
  links?: Link[];
  socialNetworks?: SocialNetwork[];
  type: HeroType;
}

export interface TechSupport {
  title?: JSX.Element;
  text: string;
  link: Link;
}

export interface StatisticsInfo {
  info?: string;
  figure?: string;
}

export interface StatisticsData {
  image: string;
  title?: string;
  data?: StatisticsInfo[];
}

export interface Statistics {
  title?: JSX.Element;
  text?: string;
  subText?: string;
  links?: Link[];
  data?: StatisticsData[];
  statisticsImages?: string[];
}

export interface Navigation {
  label: string;
  path?: string;
  external?: boolean;
}

export interface Menu {
  title: string;
  navigations: Navigation[];
}

export interface Paper {
  id: number;
  title: string;
  authors: string[];
  tags: string[];
  summary: string;
  mobileSummary?: string;
  titleUrl: string;
  link: Link;
}
