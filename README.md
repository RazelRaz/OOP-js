

# JavaScript Object Oriented Programming Complete Note

This repository contains comprehensive notes on JavaScript Object-Oriented Programming (OOP) concepts. The following sections cover various topics related to OOP in JavaScript.

## 1. JavaScript Object

An Object is a unique entity that contains properties like variable type properties, method properties, object properties, array properties, and more.

```javascript
let person = {
    // Properties
    first_name: 'Jhon',
    last_name: 'Dee',
    
    // Method
    getName:()=> {
        return (`The name of the person is ${person.first_name} ${person.last_name}`)
    }
}
console.log(person.getName());


