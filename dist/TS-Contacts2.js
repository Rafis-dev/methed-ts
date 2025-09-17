const persons = [
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
const isAdmin = (person) => person.type === 'admin';
const isUser = (person) => person.type === 'user';
const logPerson = (person) => {
    let information = '';
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
export {};
//# sourceMappingURL=TS-Contacts2.js.map