export interface Section {
  title: string;
  hiddenOnHomePage?: boolean;
  links: { text: string; href?: string; isExternal?: boolean; isComingSoon?: boolean }[];
}
