/** Comments chrome, including strings used by the client script. */

export const commentsCopy = {
  es: {
    heading: 'Comentarios',
    intro: 'Comparte tu opinión. Los comentarios se publican después de ser revisados.',
    loading: 'Cargando comentarios…',
    name: 'Nombre',
    comment: 'Comentario',
    submit: 'Enviar comentario',
    unavailable: 'Los comentarios estarán disponibles próximamente.',
    empty: 'Aún no hay comentarios publicados.',
    loadFail: 'No se pudieron cargar los comentarios.',
    sending: 'Enviando…',
    sendFail: 'No se pudo enviar el comentario.',
  },
  en: {
    heading: 'Comments',
    intro: 'Share your view. Comments appear after they are reviewed.',
    loading: 'Loading comments…',
    name: 'Name',
    comment: 'Comment',
    submit: 'Send comment',
    unavailable: 'Comments will be available soon.',
    empty: 'No comments have been published yet.',
    loadFail: 'Comments could not be loaded.',
    sending: 'Sending…',
    sendFail: 'The comment could not be sent.',
  },
} as const;

export const commentsClientCopy = {
  es: {
    empty: 'Aún no hay comentarios publicados.',
    loadFail: 'No se pudieron cargar los comentarios.',
    sending: 'Enviando…',
    sendFail: 'No se pudo enviar el comentario.',
  },
  en: {
    empty: 'No comments have been published yet.',
    loadFail: 'Comments could not be loaded.',
    sending: 'Sending…',
    sendFail: 'The comment could not be sent.',
  },
} as const;
