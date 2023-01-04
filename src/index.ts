/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:
*/
// 1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
type TPerson = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: 'Admin' | 'Normal'
}

// 2. Type Aliases de conta, com as propriedades account e permission:
//   a. AdminAccount
//   b. NormalAccount

type TAdminAccount = {
  account: string | number,
  permission: boolean
}

type TNormalAccount = {
  account: string | number,
  permission: boolean
}


/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:
*/

// 1. Enum com valores ADMIN e NORMAL;

enum ROLE {
  ADMIN = 'Admin',
  NORMAL = 'Normal'
}

type TPersonEnum = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: ROLE
}

// 2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);

type AdminUser = TPerson & TAdminAccount
type NormalUser = TPerson & TNormalAccount


// 3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
// 4. Crie duas pessoas, uma com permissão normal e a outra admin;
// 5. Guarde essas pessoas no array de usuários.

const users: AdminUser[] | NormalUser[] = [
  {
    id: '741852',
    name: 'Aline',
    email: 'aline@email.com',
    password: '123456',
    role: ROLE.ADMIN,
    account: 'admin1',
    permission: true
  },
  {
    id: '963258',
    name: 'Jorge',
    email: 'jorge@email.com',
    password: '654123',
    role: ROLE.ADMIN,
    account: 'admin2',
    permission: true
  },
  {
    id: '741852',
    name: 'Adriana',
    email: 'adriana@email.com',
    password: '123456',
    role: ROLE.NORMAL,
    account: 'normal1',
    permission: true
  },
  {
    id: '963258',
    name: 'Vanessa',
    email: 'vanessa@email.com',
    password: '654123',
    role: ROLE.NORMAL,
    account: 'normal2',
    permission: true
  }

]
console.log(users)
