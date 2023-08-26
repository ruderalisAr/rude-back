export default {
  name: 'user',
  title: 'Usuario',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
    {
      name: 'username',
      title: 'Nombre de usuario',
      type: 'string',
    },
    {
      name: 'password',
      title: 'Contraseña',
      type: 'string',
    },
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'lastname',
      title: 'Apellido',
      type: 'string',
    },
    {
      name: 'dni',
      title: 'DNI',
      type: 'string',
    },
    {
      name: 'reprocann',
      title: 'Receta cannabis',
      type: 'boolean',
    },
    {
      name: 'role',
      title: 'Rol',
      type: 'reference',
      to: {type: 'role'},
    },
  ],
}
