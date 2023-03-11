import { FC } from 'react';
import Logger from './Logger';
import LogRenderer from './LogRenderer';

interface Props {
  loggers: Logger[];
  label?: string;
}

const ListLoggerRenderer: FC<Props> = ({ loggers, label = 'log-list' }) => {
  return (
    <ul>
      {loggers.map((logger, index) => (
        <li key={`${label}-${index + 1}`} style={{ padding: '0.75em 0' }}>
          <LogRenderer messages={logger.logs} />
        </li>
      ))}
    </ul>
  );
};

export default ListLoggerRenderer;
