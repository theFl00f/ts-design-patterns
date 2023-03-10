import { isEmpty, isNil, toPairs } from 'lodash';
import { Logger, UndefinedError, UnknownError } from '../../util';

export class Tea {
  name: string;
  constructor() {
    this.name = 'Tea';
  }
}

export class OolongTea extends Tea {
  constructor() {
    super();
    this.name = 'Oolong Tea';
  }
}

export class BlackTea extends Tea {
  constructor() {
    super();
    this.name = 'Black Tea';
  }
}

export class MateTea extends Tea {
  constructor() {
    super();
    this.name = 'Mate Tea';
  }
}

export class GreenTea extends Tea {
  constructor() {
    super();
    this.name = 'Green Tea';
  }
}

export enum TeaType {
  Oolong = 'oolong',
  Black = 'black',
  Mate = 'mate',
  Green = 'green',
}

export class TeaMaker {
  protected availableTea: Partial<Record<TeaType, Tea>>;

  constructor() {
    this.availableTea = {};
  }

  make(preference: TeaType): Tea {
    if (isEmpty(this.availableTea[preference])) {
      console.log(preference);
      switch (preference) {
        case TeaType.Oolong:
          this.availableTea[preference] = new OolongTea();
          break;
        case TeaType.Black:
          this.availableTea[preference] = new BlackTea();
          break;
        case TeaType.Mate:
          this.availableTea[preference] = new MateTea();
          break;
        case TeaType.Green:
          this.availableTea[preference] = new GreenTea();
          break;
        default:
          throw new UnknownError('TeaType');
      }
    }
    const teaPreference = this.availableTea[preference];
    if (!teaPreference) {
      throw new UndefinedError('this.availableTea[preference]');
    }
    return teaPreference;
  }
}

export class TeaShop {
  logger: Logger;
  protected orders: Record<number, Tea>;
  protected teaMaker: TeaMaker;
  constructor(teaMaker: TeaMaker) {
    this.logger = new Logger();
    this.teaMaker = teaMaker;
    this.orders = [];
  }

  takeOrder(teaType: TeaType, table: number) {
    this.orders[table] = this.teaMaker.make(teaType);
  }

  serve() {
    toPairs(this.orders)
      .filter(([, tea]) => !isNil(tea))
      .map(([number, tea]) =>
        this.logger.log(`Serving ${tea.name} to table #${number}`)
      );
    this.orders = [];
  }
}
