export type ContactLocale = 'es' | 'en';

export const CONTACT_PATH = '/contacto/';
export const CONTACT_PATH_EN = '/contact/';
export const CONTACT_TURNSTILE_SITE_KEY = '0x4AAAAAADvt7AgpnTMnMZh6';
export const WEB3FORMS_ACCESS_KEY = 'ca9bc7d8-b852-43ba-829b-db452413852d';

export const CONTACT_IMAGE = '/uploads/doblones-coloniales-oro.png';

export const contactCopy = {
  es: {
    nav: 'Contacto',
    home: 'Inicio',
    breadcrumb: 'Migas de pan',
    metaTitle: 'Contacto · Notofilia',
    metaDescription:
      'Escríbenos a Notofilia sobre el catálogo, el glosario o cualquier consulta sobre numismática y notafilia. Respondemos por correo.',
    title: 'Contacto',
    intro: '¿Preguntas sobre el catálogo, el glosario o alguna pieza? Escríbenos y te responderemos por correo.',
    name: 'Nombre',
    email: 'Correo electrónico',
    country: 'País de donde me escribes',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    subject: 'Nuevo mensaje de contacto — Notofilia.com',
    imageAlt: 'Doblones de oro coloniales españoles, moneda macuquina de 8 y 4 escudos',
    required: 'obligatorio',
    sending: 'Enviando…',
    success: '¡Gracias! Tu mensaje fue enviado correctamente.',
    error: 'Hubo un error al enviar el formulario. Inténtalo de nuevo.',
    turnstile: 'Por favor completa la verificación de seguridad.',
    reportLead: 'Quiero reportar un error o aportar información.',
    recordLabel: 'Ficha: ',
    describePrompt: 'Describa el error o la información adicional:',
  },
  en: {
    nav: 'Contact',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    metaTitle: 'Contact · Notofilia',
    metaDescription:
      'Write to Notofilia about the catalogue, the glossary, or any question about numismatics and notaphily. We reply by email.',
    title: 'Contact',
    intro: 'Questions about the catalogue, the glossary, or a piece? Write to us and we will reply by email.',
    name: 'Name',
    email: 'Email',
    country: 'Country you are writing from',
    message: 'Message',
    submit: 'Send message',
    subject: 'New contact message — Notofilia.com',
    imageAlt: 'Spanish colonial gold doubloons, cob coins of 8 and 4 escudos',
    required: 'required',
    sending: 'Sending…',
    success: 'Thank you! Your message was sent.',
    error: 'There was an error sending the form. Please try again.',
    turnstile: 'Please complete the security check.',
    reportLead: 'I want to report an error or add information.',
    recordLabel: 'Record: ',
    describePrompt: 'Describe the error or the additional information:',
  },
} as const;

export function contactPath(locale: ContactLocale): string {
  return locale === 'en' ? `/en${CONTACT_PATH_EN}` : CONTACT_PATH;
}

export const contactDedicatedSlugs = [
  CONTACT_PATH.replace(/^\/|\/$/g, ''),
  CONTACT_PATH_EN.replace(/^\/|\/$/g, ''),
] as const;
