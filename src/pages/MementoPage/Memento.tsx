export class Memento {
  mementoState: string;
  constructor(state: string) {
    this.mementoState = state;
  }

  get MementoState() {
    return this.mementoState;
  }
}

export class Originator {
  private state: string;
  constructor() {
    this.state = '';
  }

  set State(state: string) {
    this.state = state;
  }

  get State() {
    return this.state;
  }

  set stateFromMemento(memento: Memento) {
    this.state = memento.MementoState;
  }

  get stateToBeSavedMemento() {
    return new Memento(this.state);
  }
}

export class Caretaker {
  mementoList: Memento[];
  constructor() {
    this.mementoList = [];
  }

  addStateToMementoList(state: Memento) {
    this.mementoList.push(state);
  }

  getStateFromMementoList(index: Int) {
    return this.mementoList[index];
  }
}
