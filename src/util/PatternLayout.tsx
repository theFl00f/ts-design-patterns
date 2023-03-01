import { FC } from 'react';
import Logger from './Logger';
import LogRenderer from './LogRenderer';

interface Props {
  pattern: {
    logger: Logger;
  };
}

const PatternLayout: FC<Props> = ({ pattern }) => {
  return (
    <div>
      <LogRenderer messages={pattern.logger.logs} />
    </div>
  );
};

export default PatternLayout;
