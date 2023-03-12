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
