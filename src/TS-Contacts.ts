interface User {
  name: string;
  age: number;
  group: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    name: 'Анна Смирнова',
    age: 32,
    group: 'Семья',
  },
  {
    name: 'Дмитрий Иванов',
    age: 25,
    group: 'Друзья',
  },
  {
    name: 'Ольга Кузнецова',
    age: 29,
    group: 'Коллеги',
  },
  {
    name: 'Олег Попов',
    age: 32,
    role: 'администратор',
  },
];

const logPerson = (person: Person): void => {
  let information: string;
  if ('role' in person) {
    information = person.role;
  } else {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
};

console.log('Users:');
persons.forEach(logPerson);
