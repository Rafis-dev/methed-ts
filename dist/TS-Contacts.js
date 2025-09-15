const persons = [
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
];
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
console.log('Users:');
persons.forEach(logPerson);
export {};
//# sourceMappingURL=TS-Contacts.js.map