const desktopQuery = window.matchMedia('(min-width: 1024px)');
const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

function isDesktop() {
  return desktopQuery.matches;
}

function canHover() {
  return isDesktop() && hoverQuery.matches;
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

export function initMegaMenu(header: HTMLElement) {
  const nav = header.querySelector<HTMLElement>('[data-mega-nav]');
  const backdrop = header.querySelector<HTMLElement>('[data-mega-backdrop]');
  const drawerToggle = header.querySelector<HTMLButtonElement>('[data-mega-drawer-toggle]');
  const drawerClose = header.querySelector<HTMLButtonElement>('[data-mega-drawer-close]');
  const items = [...header.querySelectorAll<HTMLElement>('[data-mega-item]')];
  if (!nav || !drawerToggle) return;

  let lastFocus: HTMLElement | null = null;

  function closePanels(except?: HTMLElement) {
    for (const item of items) {
      if (item === except) continue;
      const panel = item.querySelector<HTMLElement>('[data-mega-panel]');
      const button = item.querySelector<HTMLButtonElement>('[data-mega-submenu-toggle]');
      item.classList.remove('is-open');
      if (panel) setHidden(panel, true);
      if (button) {
        button.setAttribute('aria-expanded', 'false');
        const title = button.dataset.menuTitle ?? '';
        button.setAttribute('aria-label', menuCopy(header, 'openSubmenu', title));
      }
    }
  }

  function openPanel(item: HTMLElement) {
    const panel = item.querySelector<HTMLElement>('[data-mega-panel]');
    const button = item.querySelector<HTMLButtonElement>('[data-mega-submenu-toggle]');
    if (!panel || !button) return;
    closePanels(item);
    item.classList.add('is-open');
    setHidden(panel, false);
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-label', menuCopy(header, 'closeNamedSubmenu', button.dataset.menuTitle ?? ''));
  }

  function togglePanel(item: HTMLElement) {
    if (item.classList.contains('is-open')) closePanels();
    else openPanel(item);
  }

  function setDrawer(open: boolean) {
    header.classList.toggle('is-drawer-open', open);
    drawerToggle.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('mega-drawer-lock', open);
    setHidden(backdrop, !open);
    if (open) {
      lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      closePanels();
      (drawerClose ?? nav.querySelector<HTMLElement>('a, button'))?.focus();
    } else {
      closePanels();
      lastFocus?.focus();
    }
  }

  for (const item of items) {
    const panel = item.querySelector<HTMLElement>('[data-mega-panel]');
    const button = item.querySelector<HTMLButtonElement>('[data-mega-submenu-toggle]');
    const back = item.querySelector<HTMLButtonElement>('[data-mega-sub-back]');
    if (panel) setHidden(panel, true);

    button?.addEventListener('click', (event) => {
      event.preventDefault();
      togglePanel(item);
      if (!isDesktop() && item.classList.contains('is-open')) {
        panel?.querySelector<HTMLElement>('a, button')?.focus();
      }
    });

    back?.addEventListener('click', (event) => {
      event.preventDefault();
      closePanels();
      button?.focus();
    });

    item.addEventListener('pointerenter', () => {
      if (canHover() && panel) openPanel(item);
    });
    item.addEventListener('pointerleave', () => {
      if (canHover()) closePanels();
    });
  }

  drawerToggle.addEventListener('click', () => {
    setDrawer(!header.classList.contains('is-drawer-open'));
  });
  drawerClose?.addEventListener('click', () => setDrawer(false));
  backdrop?.addEventListener('click', () => {
    if (isDesktop()) closePanels();
    else setDrawer(false);
  });

  header.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (items.some((item) => item.classList.contains('is-open'))) {
      const openItem = items.find((item) => item.classList.contains('is-open'));
      closePanels();
      openItem?.querySelector<HTMLButtonElement>('[data-mega-submenu-toggle]')?.focus();
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

  const syncLayout = () => {
    if (isDesktop()) {
      header.classList.remove('is-drawer-open');
      document.body.classList.remove('mega-drawer-lock');
      setHidden(backdrop, true);
    }
    closePanels();
  };

  desktopQuery.addEventListener('change', syncLayout);
  setHidden(backdrop, true);
}
