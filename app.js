"use strict";
class Student {
    constructor(username, age, section, course) {
        this.username = username;
        this.age = age;
        this.section = section;
        this.course = course;
    }
    greet() {
        console.log(`Hello! my Name is ${this.username}`);
    }
}
