import { Logger } from '../../util';

export enum WritingStateName {
  UpperCase = 'UpperCase',
  LowerCase = 'LowerCase',
  DefaultText = 'DefaultText',
}

interface WritingState {
  name: WritingStateName;
  write: (words: string) => string;
}

export class UpperCase implements WritingState {
  name: WritingStateName;
  constructor() {
    this.name = WritingStateName.UpperCase;
  }
  write(words: string) {
    return words.toUpperCase();
  }
}

export class LowerCase implements WritingState {
  name: WritingStateName;
  constructor() {
    this.name = WritingStateName.LowerCase;
  }
  write(words: string) {
    return words.toLowerCase();
  }
}

export class DefaultText implements WritingState {
  name: WritingStateName;
  constructor() {
    this.name = WritingStateName.DefaultText;
  }
  write(words: string) {
    return words;
  }
}

export class TextEditor {
  protected state: WritingState;
  logger: Logger;
  constructor(state: WritingState) {
    this.state = state;
    this.logger = new Logger();
  }

  setState(state: WritingState) {
    this.logger.log(`New state: ${state.name}`);
    this.state = state;
  }

  type(words: string) {
    this.logger.log(this.state.write(words));
  }
}
