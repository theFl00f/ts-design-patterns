class AbstractError extends Error {
  constructor() {
    super('Abstract method!');
  }
}

class InterfaceError extends Error {
  constructor() {
    super('Interface error');
  }
}
