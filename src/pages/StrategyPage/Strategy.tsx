export class Strategy {
  doOperation(num1: Int, num2: Int): number {
    throw new AbstractError();
  }
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

export class OperationAdd extends Strategy {
  doOperation(num1: number, num2: number): number {
    return num1 + num2;
  }
}

export class OperationSubtract extends Strategy {
  doOperation(num1: number, num2: number): number {
    return num1 - num2;
  }
}

export class OperationMultiply extends Strategy {
  doOperation(num1: number, num2: number): number {
    return num1 * num2;
  }
}
