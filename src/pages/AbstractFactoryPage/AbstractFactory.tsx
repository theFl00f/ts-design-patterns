import { Logger } from '../../util';

// Stuff our factory makes
export abstract class Animal {
  abstract speak(): string;
  abstract toString(): string;
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
export abstract class AbstractFactory {
  abstract getPet(): Animal;
  abstract getFood(): string;
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
  protected petFactory: AbstractFactory;
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
