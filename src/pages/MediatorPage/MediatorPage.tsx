import { FC } from 'react';
import { LogRenderer } from '../../util';
import { ChatRoom, User } from './Mediator';

const MediatorPage: FC = () => {
  const mediator = new ChatRoom();

  const john = new User('John Doe', mediator);
  const jane = new User('Jane Doe', mediator);

  john.send('Hi there!');
  jane.send('Heeeey!!!');

  return <LogRenderer messages={mediator.logger.logs} />;
};

export default MediatorPage;
