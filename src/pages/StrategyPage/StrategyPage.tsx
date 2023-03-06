import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import {
  Context,
  OperationAdd,
  OperationMultiply,
  OperationSubtract,
} from './Strategy';

const StrategyPage: FC = () => {
  const logger = new Logger();
  const contextAdd = new Context(new OperationAdd());
  const contextSubtract = new Context(new OperationSubtract());
  const contextMultiply = new Context(new OperationMultiply());

  logger.log(`Add operation output: ${contextAdd.executeStrategy(1, 10)}`);
  logger.log(
    `Subtract operation output: ${contextSubtract.executeStrategy(12, 5)}`
  );
  logger.log(
    `Multiply operation output: ${contextMultiply.executeStrategy(5, 10)}`
  );
  return <LogRenderer messages={logger.logs} />;
};

export default StrategyPage;
