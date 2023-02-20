import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ralph Emmason',
    email: 'raemmason@gmail.com.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kat Contreras',
    email: 'kat@creativecloudworks.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
