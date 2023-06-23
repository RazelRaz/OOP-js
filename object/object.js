// object Literal
let person = {
    first_name: 'john',
    last_name: 'doe',
    age: 50,
    getName: () => {
        return person.first_name + ' ' + person.last_name;
    },
    city: ['Madrid', 'Dubai', 'Berlin'],
}
console.log(person.getName());
console.log(person.city[1]);