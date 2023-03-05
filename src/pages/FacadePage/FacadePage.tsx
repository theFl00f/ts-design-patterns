import { FC } from 'react';
import { LogRenderer } from '../../util';
import { ComputerFacade } from './Facade';

const FacadePage: FC = () => {
  const computerFacade = new ComputerFacade();
  computerFacade.buildComputer();

  return <LogRenderer messages={computerFacade.logger.logs} />;
};

export default FacadePage;
