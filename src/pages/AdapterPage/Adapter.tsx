// Generic adapter class

export class Dog {
  name;
  constructor() {
    this.name = 'Dog';
  }

  bark(): string {
    return 'woof!';
  }
}

export class Cat {
  name: string;
  constructor() {
    this.name = 'Cat';
  }

  meow() {
    return 'meow!';
  }
}

export class Human {
  name: string;
  constructor() {
    this.name = 'Human';
  }

  speak() {
    return 'hello!';
  }
}

export class Car {
  name: string;
  constructor() {
    this.name = 'Car';
  }

  makeNoise(octaneLevel: number): string {
    return `vrooooom ${octaneLevel}`;
  }
}

export class Adapter<Object> {
  name: string;
  args: unknown[];
  adaptedMethod: (args: unknown[]) => string;

  constructor(
    obj: Object,
    adaptedMethod: 'bark' | 'meow' | 'speak' | 'makeNoise',
    ...args: unknown[]
  ) {
    if (
      !(
        obj instanceof Dog ||
        obj instanceof Cat ||
        obj instanceof Human ||
        obj instanceof Car
      )
    ) {
      throw new Error('Adapter failed: Unsupported object');
    }
    this.name = obj.name;
    this.args = args;
    // @ts-ignore
    this.adaptedMethod = obj[adaptedMethod];
  }

  makeNoise() {
    return this.adaptedMethod(this.args);
  }
}
