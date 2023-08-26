// schemas/post.js

export default {
  name: 'post',
  title: 'Publicación',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Contenido',
      type: 'text',
    },
    {
      name: 'publishedAt',
      title: 'Fecha de Publicación',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Imagen Destacada',
      type: 'image',
    },
    {
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: {type: 'user'},
    },
    {
      name: 'references',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {
      name: 'comments',
      title: 'Comentarios',
      type: 'array',
      of: [
        {
          name: 'comment',
          title: 'Comentario',
          type: 'object',
          fields: [
            {
              name: 'content',
              title: 'Contenido',
              type: 'text',
            },
            {
              name: 'author',
              title: 'Autor',
              type: 'reference',
              to: {type: 'user'},
            },
          ],
        },
      ],
    },
  ],
}
