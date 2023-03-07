import { FC } from 'react';
import { LogRenderer } from '../../util';
import { Computer, ComputerPartDisplayVisitor } from './Visitor';

const VisitorPage: FC = () => {
  const computer = new Computer();
  const displayVisitor = new ComputerPartDisplayVisitor();
  computer.accept(displayVisitor);
  return <LogRenderer messages={displayVisitor.logger.logs} />;
};

export default VisitorPage;
