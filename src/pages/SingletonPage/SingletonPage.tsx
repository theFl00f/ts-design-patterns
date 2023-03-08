import { FC } from 'react';
import { Logger, LogRenderer } from '../../util';
import { President } from './Singleton';

const SingletonPage: FC = () => {
  const logger = new Logger();

  const president1 = President.Instance;
  const president2 = President.Instance;

  const successMessage = 'The two instances are exactly equal, hooray!';
  const failureMessage =
    "The two instances don't match, something went wrong...";

  logger.log(president1 === president2 ? successMessage : failureMessage);
  return <LogRenderer messages={logger.logs} />;
};

export default SingletonPage;
