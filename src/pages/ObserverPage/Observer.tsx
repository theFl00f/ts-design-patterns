import { AbstractError, Logger, UndefinedError } from '../../util';

export class Observer {
  logger: Logger;
  constructor() {
    this.logger = new Logger();
  }

  notify() {
    throw new AbstractError();
  }

  toString(): string {
    throw new AbstractError();
  }
}

export class Subject {
  observers: Observer[];
  logger: Logger;
  constructor() {
    this.observers = [];
    this.logger = new Logger();
  }

  register(observer: Observer) {
    this.logger.log(`${observer.toString()} has been pushed.`);
  }

  unregister(observer: Observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
    this.logger.log(`${observer.toString()} has been removed.`);
  }

  notify() {
    this.logger.log('Notifying all observers');
    this.observers.map((observer) => observer.notify());
  }
}

export class ConcreteSubject extends Subject {
  private subjectState?: number;

  get SubjectState() {
    if (!this.subjectState) {
      throw new UndefinedError('SubjectState');
    }
    return this.subjectState;
  }

  set SubjectState(subjectState: number) {
    this.subjectState = subjectState;
  }
}

export class ConcreteObserver extends Observer {
  subject: ConcreteSubject;
  name: string;
  state?: number;
  constructor(subject: ConcreteSubject, name: string) {
    super();
    this.logger = subject.logger;
    this.logger.log(`ConcreteObserver ${name} has been created`);
    this.subject = subject;
    this.name = name;
  }

  notify(): void {
    this.logger.log("ConcreteObserver's notify method");
    this.state = this.subject.SubjectState;
    this.logger.log(`${this.name}, ${this.state}`);
  }

  get Subject() {
    return this.subject;
  }

  set Subject(subject: ConcreteSubject) {
    this.subject = subject;
  }

  toString(): string {
    return this.name;
  }
}
