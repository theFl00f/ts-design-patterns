import { FC } from 'react';
import { Logger, LogRenderer, UnknownError } from '../../util';
import { Aggregate, ConcreteIterator, IteratorActions } from './Iterator';

const iteratorLog = (
  logger: Logger,
  iterator: ConcreteIterator<string>,
  iteratorAction: IteratorActions<string>
) => {
  switch (iteratorAction) {
    case 'currentObject':
      return logger.log(`Current object: ${iterator.currentObject()}`);
    case 'firstObject':
      return logger.log(`First object: ${iterator.firstObject()}`);
    case 'nextObject':
      return logger.log(`Next object: ${iterator.nextObject()}`);
    case 'isDone':
      return logger.log(iterator.isDone() ? 'Iterator is done!' : 'Not yet!');
    default:
      throw new UnknownError('iteratorAction');
  }
};

const IteratorPage: FC = () => {
  const logger = new Logger();
  const aggregate = new Aggregate<string>();
  aggregate.items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const iterator = new ConcreteIterator<string>(aggregate);

  iteratorLog(logger, iterator, 'nextObject');
  iteratorLog(logger, iterator, 'currentObject');
  iteratorLog(logger, iterator, 'nextObject');
  iteratorLog(logger, iterator, 'firstObject');
  iteratorLog(logger, iterator, 'nextObject');
  iteratorLog(logger, iterator, 'isDone');
  iteratorLog(logger, iterator, 'nextObject');

  return <LogRenderer messages={logger.logs} />;
};

export default IteratorPage;
