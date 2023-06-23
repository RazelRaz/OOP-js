class person {
    first_name = "John"
    last_name = "Doe"
    age = 50
    getName = () => {
        return this.first_name + " " + this.last_name;
    }
    city = ['Madrid', 'Dubai', 'Berlin']
}

let p1 = new person();
console.log(p1.age);
console.log(p1.city[2]);