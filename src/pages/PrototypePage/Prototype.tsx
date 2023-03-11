export interface Prototype {
  doClone(): Prototype;
  toString(): string;
}

export class Person implements Prototype {
  protected surname: string;
  constructor(surname: string) {
    this.surname = surname;
  }

  doClone(): Prototype {
    return new Person(this.surname);
  }

  toString() {
    return `This person's last name is ${this.surname}`;
  }
}

export class Dog implements Prototype {
  protected sound: string;
  constructor(sound: string) {
    this.sound = sound;
  }

  doClone(): Prototype {
    return new Dog(this.sound);
  }

  toString() {
    return `This dog says ${this.sound}`;
  }
}
