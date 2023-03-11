export class Employee {
  subordinates: Employee[];
  name: string;
  private department: string;
  private salary: Int;
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

  toString() {
    return `name: ${this.name}, department: ${this.department}, salary: ${this.salary}`;
  }

  get Subordinates() {
    return this.subordinates;
  }
}
