export default class Logger {
  logs: string[];
  constructor() {
    this.logs = [];
  }
  log(message: string) {
    this.logs = [...this.logs, message];
  }
}
