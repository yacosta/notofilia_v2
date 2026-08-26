import { SERIES_PATH, victoryNotes } from '../data/philippines-victory-66';

export type MegaImage = {
  src: string;
  width: number;
  height: number;
  alt: { es: string; en: string };
};

export type MegaLink = {
  href: string;
  es: string;
  en: string;
};

export type MegaCard = {
  href: string;
  size: 'medium' | 'small';
  image?: MegaImage;
  title: { es: string; en: string };
  links?: MegaLink[];
};

export type MegaBanner = {
  href: string;
  image: MegaImage;
  title: { es: string; en: string };
  cta: { es: string; en: string };
};

export type MegaIconId = 'collection' | 'guides' | 'news' | 'resources' | 'contact';

export type MegaItem = {
  id: string;
  href: string;
  es: string;
  en: string;
  icon: MegaIconId;
  panel?: {
    cards: MegaCard[];
    banner?: MegaBanner;
  };
};

const filipinasImage: MegaImage = {
  src: '/images/catalog/philippines/hero-filipinas.jpg',
  width: 1712,
  height: 1152,
  alt: {
    es: 'Mapa en relieve del archipiélago filipino sobre pergamino',
    en: 'Relief map of the Philippine archipelago on parchment',
  },
};

const engravingImage: MegaImage = {
  src: '/images/hero-engraving-01.jpg',
  width: 900,
  height: 675,
  alt: {
    es: 'Detalle de un grabado de billete histórico',
    en: 'Detail of a historical banknote engraving',
  },
};

const heroSlideImage: MegaImage = {
  src: '/images/hero-slide.jpg',
  width: 768,
  height: 284,
  alt: {
    es: 'Primer plano del ave quetzal en un billete de Guatemala',
    en: 'Close-up of the quetzal bird on a Guatemala banknote',
  },
};

const victoryBanner: MegaBanner = {
  href: SERIES_PATH,
  image: filipinasImage,
  title: {
    es: 'Serie Victory n.º 66',
    en: 'Victory Series No. 66',
  },
  cta: {
    es: 'Ver el catálogo de Filipinas',
    en: 'See the Philippines catalog',
  },
};

export const megaNav: MegaItem[] = [
  {
    id: 'coleccion',
    href: SERIES_PATH,
    es: 'Colección',
    en: 'Collection',
    icon: 'collection',
    panel: {
      cards: [
        {
          href: SERIES_PATH,
          size: 'medium',
          image: {
            src: '/images/catalog/philippines/1-peso-front.jpg',
            width: 1800,
            height: 600,
            alt: {
              es: 'Anverso del 1 peso Victory, retrato de Mabini',
              en: 'Face of the Victory 1-peso note, Mabini portrait',
            },
          },
          title: { es: 'Filipinas', en: 'Philippines' },
          links: victoryNotes.map((note) => ({
            href: note.path,
            es: note.title.es,
            en: note.title.en,
          })),
        },
        {
          href: '/coleccion/numismatica/',
          size: 'medium',
          image: engravingImage,
          title: { es: 'Numismática', en: 'Numismatics' },
          links: [
            { href: '/coleccion/espana/', es: 'España', en: 'Spain' },
            { href: '/coleccion/polimero-mundial/', es: 'Billetes de polímero', en: 'Polymer banknotes' },
          ],
        },
        {
          href: '/coleccion/colombia/',
          size: 'medium',
          image: heroSlideImage,
          title: { es: 'Américas', en: 'Americas' },
          links: [
            { href: '/coleccion/colombia/', es: 'Colombia', en: 'Colombia' },
            { href: '/coleccion/estados-unidos/', es: 'Estados Unidos', en: 'United States' },
            { href: '/coleccion/puerto-rico/', es: 'Puerto Rico', en: 'Puerto Rico' },
            { href: '/coleccion/ecuador/', es: 'Ecuador', en: 'Ecuador' },
          ],
        },
      ],
      banner: victoryBanner,
    },
  },
  {
    id: 'guias',
    href: '/blog/',
    es: 'Guías',
    en: 'Guides',
    icon: 'guides',
    panel: {
      cards: [
        {
          href: '/blog/',
          size: 'medium',
          image: engravingImage,
          title: { es: 'Guías para coleccionistas', en: 'Guides for collectors' },
        },
        {
          href: '/glosario/',
          size: 'medium',
          image: {
            src: '/images/catalog/philippines/5-pesos-front.jpg',
            width: 1800,
            height: 600,
            alt: {
              es: 'Anverso del 5 pesos Victory',
              en: 'Face of the Victory 5-peso note',
            },
          },
          title: { es: 'Glosario', en: 'Glossary' },
        },
        {
          href: '/editorial/',
          size: 'medium',
          image: {
            src: '/images/catalog/philippines/2-pesos-front.jpg',
            width: 1800,
            height: 600,
            alt: {
              es: 'Anverso del 2 pesos Victory',
              en: 'Face of the Victory 2-peso note',
            },
          },
          title: { es: 'Política editorial', en: 'Editorial policy' },
        },
      ],
      banner: {
        href: SERIES_PATH,
        image: filipinasImage,
        title: {
          es: 'Empiece por Filipinas',
          en: 'Start with the Philippines',
        },
        cta: {
          es: 'Abrir la primera vitrina',
          en: 'Open the first catalog case',
        },
      },
    },
  },
  {
    id: 'noticias',
    href: '/noticias/',
    es: 'Noticias',
    en: 'News',
    icon: 'news',
    panel: {
      cards: [
        {
          href: '/noticias/',
          size: 'medium',
          image: heroSlideImage,
          title: { es: 'Noticias numismáticas', en: 'Numismatic news' },
        },
        {
          href: '/blog/',
          size: 'medium',
          image: engravingImage,
          title: { es: 'Artículos originales', en: 'Original articles' },
        },
        {
          href: '/contacto/?motivo=error',
          size: 'medium',
          image: {
            src: '/images/catalog/philippines/20-pesos-front.jpg',
            width: 1800,
            height: 600,
            alt: {
              es: 'Anverso del 20 pesos Victory',
              en: 'Face of the Victory 20-peso note',
            },
          },
          title: { es: 'Reportar un error', en: 'Report an error' },
        },
      ],
      banner: {
        href: '/noticias/',
        image: filipinasImage,
        title: {
          es: 'Selección mensual',
          en: 'Monthly selection',
        },
        cta: {
          es: 'Ver todas las noticias',
          en: 'See all news',
        },
      },
    },
  },
  {
    id: 'recursos',
    href: '/glosario/',
    es: 'Recursos',
    en: 'Resources',
    icon: 'resources',
    panel: {
      cards: [
        {
          href: '/glosario/',
          size: 'medium',
          image: {
            src: '/images/catalog/philippines/5-pesos-front.jpg',
            width: 1800,
            height: 600,
            alt: {
              es: 'Anverso del 5 pesos Victory',
              en: 'Face of the Victory 5-peso note',
            },
          },
          title: { es: 'Glosario', en: 'Glossary' },
        },
        {
          href: '/editorial/',
          size: 'medium',
          image: engravingImage,
          title: { es: 'Política editorial y valoración', en: 'Editorial policy' },
        },
        {
          href: '/nosotros/',
          size: 'medium',
          image: filipinasImage,
          title: { es: 'Sobre Notofilia', en: 'About Notofilia' },
        },
      ],
      banner: {
        href: '/contacto/',
        image: heroSlideImage,
        title: {
          es: '¿Una ficha incompleta?',
          en: 'An incomplete catalog card?',
        },
        cta: {
          es: 'Escribir a Notofilia',
          en: 'Write to Notofilia',
        },
      },
    },
  },
  {
    id: 'contacto',
    href: '/contacto/',
    es: 'Contacto',
    en: 'Contact',
    icon: 'contact',
    panel: {
      cards: [
        {
          href: '/contacto/',
          size: 'medium',
          image: engravingImage,
          title: { es: 'Escribirnos', en: 'Write to us' },
        },
        {
          href: '/contacto/?motivo=error',
          size: 'medium',
          image: {
            src: '/images/catalog/philippines/1-peso-front.jpg',
            width: 1800,
            height: 600,
            alt: {
              es: 'Anverso del 1 peso Victory',
              en: 'Face of the Victory 1-peso note',
            },
          },
          title: { es: 'Reportar un error', en: 'Report an error' },
        },
        {
          href: '/#boletin',
          size: 'medium',
          image: heroSlideImage,
          title: { es: 'Boletín', en: 'Newsletter' },
        },
      ],
      banner: {
        href: '/nosotros/',
        image: filipinasImage,
        title: {
          es: 'Sobre Notofilia',
          en: 'About Notofilia',
        },
        cta: {
          es: 'Leer la colección virtual',
          en: 'Read about the virtual collection',
        },
      },
    },
  },
];

export const primaryNav = megaNav.map(({ href, es, en }) => ({ href, es, en }));
