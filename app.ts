interface Person {
  name: string;
  age: number;
  height?: number;
}

interface Employee extends Person {
  employeeId: number;
}

const worker: Employee = {
  name: "Arnel",
  age: 30,
  height: 162,
  employeeId: 1234,
};

console.log(worker);
