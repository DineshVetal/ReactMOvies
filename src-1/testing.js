import React from "react";
import ReactDOM from "react-dom";

const element = <h1>Hello World</h1>;
ReactDOM.render(element, document.getElementById("root"));

class Person {
  constructor(name) {
    //variables in constructor
    this.name = name;
    this.walk();
  }
  walk() {
    console.log(2 + 2);
    console.log(this.name);
  }
}

const person = new Person("dada");
//person.walk();

const person2 = new Person("DINU");
person2.walk = function() {
  console.log(3 + 2);
  console.log(this.name);
};
//person2.walk();

class Teacher extends Person {
  constructor(name, degree) {
    super(name); //inherit previous variables from parent
    this.degree = degree;
  }
  teach() {
    console.log("teaches");
  }
}

const teacher1 = new Teacher("asas", "engg");
//teacher1.teach();
