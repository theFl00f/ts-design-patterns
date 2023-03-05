export class Employee {
  subordinates: Employee[];
  name: string;
  department: string;
  salary: Int;
  constructor(name: string, department: string, salary: Int) {
    this.subordinates = [];
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  add(employee: Employee) {
    this.subordinates.push(employee);
  }

  remove(employee: Employee) {
    const index = this.subordinates.indexOf(employee);

    if (index > -1) {
      this.subordinates.splice(index, 1);
    }
  }

  get Subordinates() {
    return this.subordinates;
  }
}
