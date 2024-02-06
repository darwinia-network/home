export interface Section {
  title: string;
  links: { text: string; href?: string; isExternal?: boolean; isComingSoon?: boolean }[];
}
