class AbstractError extends Error {
  constructor() {
    super('Abstract method');
  }
}

class InterfaceError extends Error {
  constructor() {
    super('Interface error');
  }
}

class UndefinedError extends Error {
  constructor(entity: string) {
    super(`${entity} is not defined`);
  }
}

class UnknownError extends Error {
  constructor(type: string) {
    super(`Unknown ${type} provided`);
  }
}
