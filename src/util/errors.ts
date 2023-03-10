export class AbstractError extends Error {
  constructor() {
    super('Abstract method');
  }
}

export class InterfaceError extends Error {
  constructor() {
    super('Interface error');
  }
}

export class UndefinedError extends Error {
  constructor(entity: string) {
    super(`${entity} is not defined`);
  }
}

export class UnknownError extends Error {
  constructor(type: string) {
    super(`Unknown ${type} provided`);
  }
}
