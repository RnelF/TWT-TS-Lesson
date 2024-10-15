class Student {
  constructor(
    username: string,
    age: number,
    section: number | string,
    course: string
  ) {
    this.username = username;
    this.age = age;
    this.section = section;
    this.course = course;
  }

  greet() {
    console.log(
      `Hello! my Name is ${this.username} I am ${this.age} years old, my section is ${this.section} and I am ${this.course} Student`
    );
  }
}

const student = new Student("Arnel", 30, "Baltazar", "IT");

student.greet();
