export type FooterLink = {
  href: string;
  es: string;
  en: string;
};

type NavLike = {
  href?: string;
  es: string;
  en: string;
  children?: NavLike[];
};

/** Flatten a mega-nav branch into footer links, including nested submenu items. */
export function footerLinksFromNav(nodes: NavLike[] | undefined): FooterLink[] {
  if (!nodes?.length) return [];
  const links: FooterLink[] = [];
  for (const node of nodes) {
    if (node.href) {
      links.push({ href: node.href, es: node.es, en: node.en });
    }
    if (node.children?.length) {
      links.push(...footerLinksFromNav(node.children));
    }
  }
  return links;
}
