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

type AdaptedMethodType<Object extends Cat | Dog | Human | Car> = (
  args: Adapter<Object>['args']
) => string;

export class Adapter<Object extends Cat | Dog | Human | Car> {
  name: string;
  args: unknown[];
  adaptedMethod: AdaptedMethodType<Object>;

  constructor(obj: Object, adaptedMethod: keyof Object, ...args: unknown[]) {
    this.name = obj.name;
    this.args = args;
    this.adaptedMethod = obj[adaptedMethod] as AdaptedMethodType<Object>;
  }

  makeNoise() {
    return this.adaptedMethod(this.args);
  }
}
