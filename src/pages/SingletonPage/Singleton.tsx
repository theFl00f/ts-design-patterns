function final(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@final
export class President {
  private static instance: President;
  private constructor() {
    // Hide the constructor
  }

  static get Instance() {
    if (!this.instance) {
      this.instance = new President();
    }
    return this.instance;
  }
}
