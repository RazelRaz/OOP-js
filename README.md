

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
```javascript

## 2. Class & Object

Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are instances of the class. 

Using `let` or `var` to declare variables inside a class is unnecessary because class properties are automatically scoped to the class instance and don't require explicit variable declarations.

```javascript
class Person {
    // Properties
    first_name = 'John';
    last_name = 'Doe';
    
    // Method
    getName() {
        return `The name of the person is ${this.first_name} ${this.last_name}`;
    }
}

const person1 = new Person();
console.log(person1.getName());


## 3. Constructor

The class constructor is a magic method that executes automatically when an object is created. It can take parameters but cannot return any result.

```javascript
class Person {
    constructor() {
        console.log('I am a constructor');
    }
}

const person1 = new Person();

// With parameters

class Person {
    constructor(msg) {
        console.log(msg);
    }
}

const person1 = new Person('I am a constructor');


## 4. Static Keyword

The static keyword is used to define a static method or property of a class. A static method or property belongs to the class itself rather than its instances. 

To call a static method, we do not need to create an instance or object of the class. Static methods are accessed directly on the class.

We can also create static variables in JavaScript to prevent replication and achieve fixed configuration, which can be useful for caches and other purposes.

```javascript
class Person {
    // Properties
    static first_name = 'John';
    static last_name = 'Doe';
    
    // Method
    static getName() {
        return `The name of the person is ${this.first_name} ${this.last_name}`;
    }
}

console.log(Person.getName());


## 5. Inheritance

Inheritance in JavaScript is achieved using the `extends` keyword. It allows you to create an inheritance relationship between classes. The child class can inherit and use properties and methods from the parent class.

```javascript
class Father {
    // Properties
     first_name = 'John';
     last_name = 'Doe';
    
    // Method
     getName() {
        return `The name of the person is ${this.first_name} ${this.last_name}`;
    }
}

class Son extends Father {

}

const SonObj = new Son();
console.log(SonObj.getName());


## 6. Overriding

Overriding occurs in an inheritance relationship when the child class changes the properties or methods of the parent class. It allows the child class to provide its own implementation of a method inherited from the parent class.

```javascript
class Father {
    // Properties
     first_name = 'John';
     last_name = 'Dee';

    // Method
     getName() {
        return `The name of the person is ${this.first_name} ${this.last_name}`;
    }
}

class Son extends Father{
    // Overriding Occurs
    first_name = 'John Junior';
}

const SonObj = new Son();
console.log(SonObj.getName());



## 7. Method Overloading

Method overloading allows you to define multiple methods with the same name but different parameter lists. However, JavaScript does not natively support method overloading.

## 8. Polymorphism

Polymorphism is a core concept of the object-oriented paradigm. It provides a way to perform a single action in different forms. In JavaScript, we can achieve polymorphism through concepts like inheritance, overriding, and overloading.

## 9. Abstraction

Abstraction is a concept that allows you to create abstract classes and methods. In JavaScript, we don't have built-in support for abstract classes, but we can simulate abstraction using other techniques. An abstract class cannot be instantiated, and it always needs its inherited child class to provide implementation.

Thank you!
