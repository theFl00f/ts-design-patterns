export interface Strategy {
  doOperation(num1: Int, num2: Int): number;
}

export class Context {
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  executeStrategy(num1: Int, num2: Int) {
    return this.strategy.doOperation(num1, num2);
  }
}

export class OperationAdd implements Strategy {
  doOperation(num1: number, num2: number): number {
    return num1 + num2;
  }
}

export class OperationSubtract implements Strategy {
  doOperation(num1: number, num2: number): number {
    return num1 - num2;
  }
}

export class OperationMultiply implements Strategy {
  doOperation(num1: number, num2: number): number {
    return num1 * num2;
  }
}
