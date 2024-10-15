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
    console.log(`Hello! my Name is ${this.username}`);
  }
}
