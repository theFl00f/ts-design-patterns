export class Prototype {
  constructor() {}
  doClone(): Prototype {
    throw new AbstractError();
  }
}

export class Person extends Prototype {
  surname: string;
  constructor(surname: string) {
    super();
    this.surname = surname;
  }

  doClone(): Prototype {
    return new Person(this.surname);
  }

  toString() {
    return `This person's last name is ${this.surname}`;
  }
}

export class Dog extends Prototype {
  sound: string;
  constructor(sound: string) {
    super();
    this.sound = sound;
  }

  doClone(): Prototype {
    return new Dog(this.sound);
  }

  toString() {
    return `This dog says ${this.sound}`;
  }
}
