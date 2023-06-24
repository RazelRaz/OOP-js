class person {
    first_name = 'Razel'
    last_name = 'Ahmed'
    age = 30;
    getName = () => {
        return this.first_name + ' ' + this.last_name;
    }
    static city = ['Madrid', 'Dubai', 'Berlin']
}

console.log(person.city);