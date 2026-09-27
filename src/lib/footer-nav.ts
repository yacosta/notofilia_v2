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

/** Direct children that have an href, in menu order. Nested pieces stay in the mega menu. */
export function footerTopLevelLinks(nodes: NavLike[] | undefined): FooterLink[] {
  if (!nodes?.length) return [];
  const links: FooterLink[] = [];
  const seen = new Set<string>();
  for (const node of nodes) {
    if (!node.href || seen.has(node.href)) continue;
    seen.add(node.href);
    links.push({ href: node.href, es: node.es, en: node.en });
  }
  return links;
}

/** Flatten a mega-nav branch into footer links, including nested submenu items. */
export function footerLinksFromNav(nodes: NavLike[] | undefined): FooterLink[] {
  if (!nodes?.length) return [];
  const links: FooterLink[] = [];
  const seen = new Set<string>();
  for (const node of nodes) {
    if (node.href && !seen.has(node.href)) {
      seen.add(node.href);
      links.push({ href: node.href, es: node.es, en: node.en });
    }
    if (node.children?.length) {
      for (const child of footerLinksFromNav(node.children)) {
        if (seen.has(child.href)) continue;
        seen.add(child.href);
        links.push(child);
      }
    }
  }
  return links;
}
