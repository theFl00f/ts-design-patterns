import { FC } from 'react';
import { LogRenderer } from '../../util';
import { Provider, Publisher, Subscriber } from './PublishSubscribe';

const PublishSubscribePage: FC = () => {
  const messageCenter = new Provider();

  const youtuber = new Publisher(messageCenter);

  const aaron = new Subscriber('Aaron', messageCenter);
  const aamir = new Subscriber('Aamir', messageCenter);
  const school = new Subscriber('Turing', messageCenter);
  const subscribers = [aaron, aamir, school];

  aaron.subscribe('reddit');
  aamir.subscribe('movie');
  school.subscribe('science');

  youtuber.publish('reddit');
  youtuber.publish('science');
  youtuber.publish('ads');
  youtuber.publish('movie');
  youtuber.publish('reddit');
  youtuber.publish('reddit');
  youtuber.publish('science');
  youtuber.publish('blank');

  messageCenter.update();
  return (
    <ul>
      {subscribers.map((subscriber, index) => (
        <li key={`subscriber-${index + 1}`}>
          <LogRenderer messages={subscriber.logger.logs} />
        </li>
      ))}
    </ul>
  );
};

export default PublishSubscribePage;
