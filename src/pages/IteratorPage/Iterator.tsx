import { AbstractError } from '../../util';

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
export class Iterator<Type> {
  firstObject(): Type {
    throw new AbstractError();
  }
  nextObject(): Type | null {
    throw new AbstractError();
  }
  currentObject(): Type {
    throw new AbstractError();
  }
  isDone(): boolean {
    throw new AbstractError();
  }
}

export type IteratorActions<Type> = keyof Iterator<Type>;

// Concrete iterator class
export class ConcreteIterator<Type> extends Iterator<Type> {
  private aggregate: Aggregate<Type>;
  private items: Type[];
  index: number;
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
