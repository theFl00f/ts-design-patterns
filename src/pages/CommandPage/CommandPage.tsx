import { FC } from 'react';
import { LogRenderer } from '../../util';
import {
  ConcreteCommand1,
  ConcreteCommand2,
  Invoker,
  Receiver,
} from './Command';

const CommandPage: FC = () => {
  const receiver = new Receiver();
  const command1 = new ConcreteCommand1(receiver);
  const command2 = new ConcreteCommand2(receiver);
  const invoker = new Invoker();

  invoker.storeAndExecute(command1);
  invoker.storeAndExecute(command2);
  return <LogRenderer messages={receiver.logger.logs} />;
};

export default CommandPage;
