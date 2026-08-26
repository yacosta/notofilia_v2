const desktopQuery = window.matchMedia('(min-width: 1024px)');

function isDesktop() {
  return desktopQuery.matches;
}

function menuCopy(header: HTMLElement, key: string, title = '') {
  const template = header.dataset[key] ?? '';
  return template.replace('{menuTitle}', title);
}

function setHidden(el: HTMLElement | null, hidden: boolean) {
  if (!el) return;
  el.toggleAttribute('hidden', hidden);
  el.toggleAttribute('inert', hidden);
  el.setAttribute('aria-hidden', hidden ? 'true' : 'false');
}

function itemPanel(item: HTMLElement) {
  return item.querySelector<HTMLElement>(':scope > [data-mega-panel]');
}

function itemToggle(item: HTMLElement) {
  return item.querySelector<HTMLButtonElement>(':scope > .mega-item-chrome [data-mega-submenu-toggle], :scope > .mega-tree-row [data-mega-submenu-toggle]');
}

export function initMegaMenu(header: HTMLElement) {
  const nav = header.querySelector<HTMLElement>('[data-mega-nav]');
  const backdrop = header.querySelector<HTMLElement>('[data-mega-backdrop]');
  const drawerToggle = header.querySelector<HTMLButtonElement>('[data-mega-drawer-toggle]');
  const drawerClose = header.querySelector<HTMLButtonElement>('[data-mega-drawer-close]');
  const topItems = [...header.querySelectorAll<HTMLElement>('[data-mega-nav] .mega-list > [data-mega-item]')];
  const branches = [...header.querySelectorAll<HTMLElement>('[data-mega-branch]')];
  if (!nav || !drawerToggle) return;

  let lastFocus: HTMLElement | null = null;

  function setExpanded(item: HTMLElement, open: boolean) {
    const panel = itemPanel(item);
    const button = itemToggle(item);
    item.classList.toggle('is-open', open);
    if (panel) setHidden(panel, !open);
    if (button) {
      button.setAttribute('aria-expanded', String(open));
      const title = button.dataset.menuTitle ?? '';
      button.setAttribute('aria-label', menuCopy(header, open ? 'closeNamedSubmenu' : 'openSubmenu', title));
    }
  }

  function closeGroup(items: HTMLElement[], except?: HTMLElement) {
    for (const item of items) {
      if (item === except) continue;
      setExpanded(item, false);
      for (const nested of item.querySelectorAll<HTMLElement>('[data-mega-branch].is-open')) {
        setExpanded(nested, false);
      }
    }
  }

  function openItem(item: HTMLElement) {
    const siblings = [...(item.parentElement?.querySelectorAll<HTMLElement>(':scope > [data-mega-item], :scope > [data-mega-branch]') ?? [])];
    closeGroup(siblings, item);
    setExpanded(item, true);
  }

  function toggleItem(item: HTMLElement) {
    if (item.classList.contains('is-open')) closeGroup([item]);
    else openItem(item);
  }

  function closeAllMenus() {
    closeGroup(topItems);
  }

  function setDrawer(open: boolean) {
    header.classList.toggle('is-drawer-open', open);
    drawerToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('mega-drawer-lock', open);
    setHidden(backdrop, !open);
    if (open) {
      lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      closeAllMenus();
      (drawerClose ?? nav.querySelector<HTMLElement>('a, button'))?.focus();
    } else {
      closeAllMenus();
      lastFocus?.focus();
    }
  }

  function bindItem(item: HTMLElement, hoverOpens: boolean) {
    const panel = itemPanel(item);
    const button = itemToggle(item);
    const back = item.querySelector<HTMLButtonElement>(':scope > [data-mega-panel] > .mega-panel-inner > .mega-subhead [data-mega-sub-back], :scope > [data-mega-panel] [data-mega-sub-back]');
    if (panel) setHidden(panel, true);

    button?.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleItem(item);
      if (!isDesktop() && item.classList.contains('is-open')) {
        panel?.querySelector<HTMLElement>('a, button')?.focus();
      }
    });

    back?.addEventListener('click', (event) => {
      event.preventDefault();
      closeGroup([item]);
      button?.focus();
    });

    if (hoverOpens) {
      item.addEventListener('pointerenter', () => {
        if (isDesktop() && panel) openItem(item);
      });
      item.addEventListener('mouseenter', () => {
        if (isDesktop() && panel) openItem(item);
      });
      item.addEventListener('pointerleave', () => {
        if (isDesktop()) closeGroup([item]);
      });
      item.addEventListener('mouseleave', () => {
        if (isDesktop()) closeGroup([item]);
      });
    }
  }

  for (const item of topItems) bindItem(item, true);
  for (const branch of branches) bindItem(branch, true);

  drawerToggle.addEventListener('click', () => {
    setDrawer(!header.classList.contains('is-drawer-open'));
  });
  drawerClose?.addEventListener('click', () => setDrawer(false));
  backdrop?.addEventListener('click', () => {
    if (isDesktop()) closeAllMenus();
    else setDrawer(false);
  });

  header.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const openNested = branches.find((item) => item.classList.contains('is-open'));
    if (openNested) {
      closeGroup([openNested]);
      itemToggle(openNested)?.focus();
      event.preventDefault();
      return;
    }
    const openTop = topItems.find((item) => item.classList.contains('is-open'));
    if (openTop) {
      closeAllMenus();
      itemToggle(openTop)?.focus();
      event.preventDefault();
      return;
    }
    if (header.classList.contains('is-drawer-open')) {
      setDrawer(false);
      event.preventDefault();
    }
  });

  nav.addEventListener('keydown', (event) => {
    if (!header.classList.contains('is-drawer-open') || event.key !== 'Tab') return;
    const focusable = [...nav.querySelectorAll<HTMLElement>('a[href], button:not([hidden])')].filter(
      (el) => !el.hasAttribute('hidden') && !el.closest('[hidden]'),
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  });

  desktopQuery.addEventListener('change', () => {
    if (isDesktop()) {
      header.classList.remove('is-drawer-open');
      document.body.classList.remove('mega-drawer-lock');
      setHidden(backdrop, true);
    }
    closeAllMenus();
  });
  setHidden(backdrop, true);
}
