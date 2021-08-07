const Person = () => {
    var namePerson = "Name";

    return {
        getName: () => {
            return namePerson;
        },
        setName: (name) => {
            namePerson = name;
        }
    }
}

const person = Person();
console.log(person.getName());
person.setName('Axel');
console.log(person.getName());
