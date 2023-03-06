import { Logger } from '../../util';

export class Student {
  private rollNumber?: number;
  private name?: string;

  set Number(number: number) {
    this.rollNumber = number;
  }

  get Number() {
    if (!this.rollNumber) {
      throw new UndefinedError('Roll number');
    }
    return this.rollNumber;
  }

  set Name(name: string) {
    this.name = name;
  }

  get Name() {
    if (!this.name) {
      throw new UndefinedError('Name');
    }
    return this.name;
  }
}

export class StudentView {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  printStudentDetails(name: string, number: number) {
    this.logger.log('Student:');
    this.logger.log(`Name: ${name}`);
    this.logger.log(`Roll #: ${number}`);
  }
}

export class StudentController {
  private studentModel: Student;
  private studentView: StudentView;
  constructor(model: Student, view: StudentView) {
    this.studentModel = model;
    this.studentView = view;
  }

  get StudentNumber() {
    return this.studentModel.Number;
  }

  set StudentNumber(number: number) {
    this.studentModel.Number = number;
  }

  get StudentName() {
    return this.studentModel.Name;
  }

  set StudentName(name: string) {
    this.studentModel.Name = name;
  }

  updateView() {
    this.studentView.printStudentDetails(
      this.studentModel.Name,
      this.studentModel.Number
    );
  }
}

export class DBManager {
  retrieveStudentFromDatabase() {
    const student = new Student();
    student.Name = 'Robert';
    student.Number = 10;
    return student;
  }
}
