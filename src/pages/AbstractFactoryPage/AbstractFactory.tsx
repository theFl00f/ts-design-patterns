import { AbstractError, Logger } from '../../util';

// Stuff our factory makes
export class Animal {
  speak(): string {
    throw new AbstractError();
  }
  toString(): string {
    throw new AbstractError();
  }
}

export class Dog extends Animal {
  speak(): string {
    return 'woof';
  }
  toString(): string {
    return 'Dog';
  }
}

export class Cat extends Animal {
  speak(): string {
    return 'meow';
  }
  toString(): string {
    return 'Cat';
  }
}

// Factory classes
export class AbstractFactory {
  getPet(): Animal {
    throw new AbstractError();
  }
  getFood(): string {
    throw new AbstractError();
  }
}

export class DogFactory extends AbstractFactory {
  getPet(): Animal {
    return new Dog();
  }
  getFood(): string {
    return 'dog food';
  }
}

export class CatFactory extends AbstractFactory {
  getPet(): Animal {
    return new Cat();
  }
  getFood(): string {
    return 'cat food';
  }
}

export class Petshop {
  petFactory: AbstractFactory;
  logger: Logger;
  constructor(petFactory: AbstractFactory) {
    this.petFactory = petFactory;
    this.logger = new Logger();
  }
  showPet(): void {
    const pet = this.petFactory.getPet();
    this.logger.log(`We have a lovely ${pet.toString()}`);
    this.logger.log(`It says ${pet.speak()}`);
    this.logger.log(`We also have ${this.petFactory.getFood()}`);
  }
}
