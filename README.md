# JavaScript Object Oriented Programming Complete Note

This repository contains a complete guide to JavaScript Object-Oriented Programming (OOP) concepts. It covers the following topics:

## 1. JavaScript Object

An Object is a unique entity that contains properties such as variable type properties, method properties, object properties, array properties, and more.

```javascript
let person = {
    // Properties
    first_name: 'John',
    last_name: 'Dee',
    
    // Method
    getName: () => {
        return `The name of the person is ${person.first_name} ${person.last_name}`;
    }
}

console.log(person.getName());
