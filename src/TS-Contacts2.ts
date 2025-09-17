interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    type: 'user',
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    type: 'user',
    name: 'Анна Смирнова',
    age: 32,
    group: 'Семья',
  },
  {
    type: 'user',
    name: 'Дмитрий Иванов',
    age: 25,
    group: 'Друзья',
  },
  {
    type: 'user',
    name: 'Ольга Кузнецова',
    age: 29,
    group: 'Коллеги',
  },
  {
    type: 'admin',
    name: 'Олег Попов',
    age: 32,
    role: 'администратор',
  },
];

const isAdmin = (person: Person): person is Admin => person.type === 'admin';

const isUser = (person: Person): person is User => person.type === 'user';

const logPerson = (person: Person) => {
  let information: string = '';
  if (isAdmin(person)) {
    information = person.role;
  }
  if (isUser(person)) {
    information = person.group;
  }
  console.log(` - ${person.name}, ${person.age}, ${information}`);
};

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
