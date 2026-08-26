const desktopQuery = window.matchMedia('(min-width: 1024px)');

/** Pause before opening so crossing the bar does not snap panels open. */
const OPEN_DELAY_MS = 140;
/** Keep the open panel long enough to reach it, scroll it, or change items. */
const CLOSE_DELAY_MS = 700;
/** Faster swap once another top-level item is already open. */
const SWITCH_DELAY_MS = 80;

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

function hasOpenSibling(item: HTMLElement) {
  const siblings = item.parentElement?.querySelectorAll<HTMLElement>(':scope > .is-open') ?? [];
  return [...siblings].some((sibling) => sibling !== item);
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
  let hoverTimer = 0;

  function clearHoverTimer() {
    window.clearTimeout(hoverTimer);
    hoverTimer = 0;
  }

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
    clearHoverTimer();
    closeGroup(topItems);
  }

  function scheduleOpen(item: HTMLElement, delay: number) {
    clearHoverTimer();
    if (item.classList.contains('is-open')) return;
    const wait = hasOpenSibling(item) ? SWITCH_DELAY_MS : delay;
    hoverTimer = window.setTimeout(() => {
      hoverTimer = 0;
      openItem(item);
    }, wait);
  }

  function scheduleCloseAll() {
    clearHoverTimer();
    hoverTimer = window.setTimeout(() => {
      hoverTimer = 0;
      const openItemEl = topItems.find((item) => item.classList.contains('is-open'));
      if (openItemEl?.contains(document.activeElement)) return;
      closeAllMenus();
    }, CLOSE_DELAY_MS);
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

  function bindItem(item: HTMLElement, hoverOpens: boolean, openDelay: number) {
    const panel = itemPanel(item);
    const button = itemToggle(item);
    const back = item.querySelector<HTMLButtonElement>(':scope > [data-mega-panel] > .mega-panel-inner > .mega-subhead [data-mega-sub-back], :scope > [data-mega-panel] [data-mega-sub-back]');
    if (panel) setHidden(panel, true);

    button?.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      clearHoverTimer();
      toggleItem(item);
      if (!isDesktop() && item.classList.contains('is-open')) {
        panel?.querySelector<HTMLElement>('a, button')?.focus();
      }
    });

    back?.addEventListener('click', (event) => {
      event.preventDefault();
      clearHoverTimer();
      closeGroup([item]);
      button?.focus();
    });

    if (hoverOpens) {
      item.addEventListener('pointerenter', () => {
        if (isDesktop() && panel) scheduleOpen(item, openDelay);
      });
    }
  }

  for (const item of topItems) bindItem(item, true, OPEN_DELAY_MS);
  // Nested branches stay collapsed until the chevron is clicked, so the
  // list does not jump while you move or scroll to another option.
  for (const branch of branches) bindItem(branch, false, OPEN_DELAY_MS);

  header.addEventListener('pointerenter', () => {
    if (isDesktop()) clearHoverTimer();
  });
  header.addEventListener('pointerleave', () => {
    if (isDesktop()) scheduleCloseAll();
  });

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
      clearHoverTimer();
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
