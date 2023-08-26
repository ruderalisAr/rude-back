// schemas/profile.js

export default {
  name: 'profile',
  title: 'Perfil',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Biografía',
      type: 'text',
    },
    {
      name: 'location',
      title: 'Ubicación',
      type: 'string',
    },
    {
      name: 'website',
      title: 'Sitio Web',
      type: 'url',
    },
    {
      name: 'social',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
      ],
    },
    {
      name: 'profileImage',
      title: 'Foto de Perfil',
      type: 'image',
    },
    {
      name: 'coverImage',
      title: 'Portada',
      type: 'image',
    },
    {
      name: 'user',
      title: 'Usuario',
      type: 'reference',
      to: {type: 'user'},
    },
  ],
}
