export class Aggregate<Type> {
  items: Type[];
  constructor() {
    this.items = [];
  }

  get Count() {
    return this.items.length;
  }
}

// Abstract class
export abstract class Iterator<Type> {
  abstract firstObject(): Type;
  abstract nextObject(): Type | null;
  abstract currentObject(): Type;
  abstract isDone(): boolean;
}

export type IteratorActions<Type> = keyof Iterator<Type>;

// Concrete iterator class
export class ConcreteIterator<Type> extends Iterator<Type> {
  private aggregate: Aggregate<Type>;
  private items: Type[];
  private index: number;
  constructor(aggregate: Aggregate<Type>) {
    super();
    this.aggregate = aggregate;
    this.items = this.aggregate.items;
    this.index = 0;
  }

  firstObject(): Type {
    return this.items[0];
  }

  nextObject(): Type | null {
    if (this.index < this.aggregate.Count - 1) {
      return this.items[++this.index];
    } else {
      return null;
    }
  }

  currentObject(): Type {
    return this.items[this.index];
  }

  isDone(): boolean {
    return this.index >= this.aggregate.Count - 1;
  }
}
