class Employee {
  static employeeCount: number = 0;
  name: string;
  position: string;
  department: string;
  id: number;
  nickName?: string;

  constructor(
    name: string,
    position: string,
    department: string,
    id: number,
    nickName?: string
  ) {
    Employee.employeeCount++;
    this.name = name;
    this.position = position;
    this.department = department;
    this.id = id;
    this.nickName = nickName;
  }

  getEmployeeInfo() {
    console.log(
      `Name: ${this.name}, Position: ${this.position}, Department: ${
        this.department
      }, ID no: ${this.id}, Nick Name: ${this.nickName ? this.nickName : "N/A"}`
    );
  }
}

const employee1 = new Employee(
  "Arnel Francia",
  "Warehouse Supervisor",
  "Inbound and outbound Deliveries",
  123
);

console.log(Employee.employeeCount);

const employee2 = new Employee(
  "Corazon Francia",
  "Warehouse Assistant",
  "Inbound and outbound Deliveries",
  124
);

employee2.getEmployeeInfo();
console.log(Employee.employeeCount);
