import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { Caretaker, Originator } from './Memento';

const MementoPage: FC = () => {
  const originator = new Originator();
  const caretaker = new Caretaker();
  const logger = new Logger();
  originator.State = 'State 1'; // not saved

  originator.State = 'State 2';
  caretaker.addStateToMementoList(originator.stateToBeSavedMemento);

  originator.State = 'State 3';
  caretaker.addStateToMementoList(originator.stateToBeSavedMemento);

  originator.State = 'State 4';
  logger.log(`Current state is: ${originator.State}`);

  originator.stateFromMemento = caretaker.getStateFromMementoList(0);
  logger.log(`First saved log is: ${originator.State}`);

  originator.stateFromMemento = caretaker.getStateFromMementoList(1);
  logger.log(`Second saved log is: ${originator.State}`);
  return <LogRenderer messages={logger.logs} />;
};

export default MementoPage;
