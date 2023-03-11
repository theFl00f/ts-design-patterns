import { FC } from 'react';
import { ListLoggerRenderer } from '../../util';
import { Provider, Publisher, Subscriber } from './PublishSubscribe';

const PublishSubscribePage: FC = () => {
  const messageCenter = new Provider();

  const youtube = new Publisher(messageCenter);

  const aaron = new Subscriber('Aaron', messageCenter);
  const aamir = new Subscriber('Aamir', messageCenter);
  const school = new Subscriber('Turing', messageCenter);
  const subscribers = [aaron, aamir, school];

  aaron.subscribe('reddit');
  aamir.subscribe('movie');
  school.subscribe('science');

  youtube.publish('reddit');
  youtube.publish('science');
  youtube.publish('ads');
  youtube.publish('movie');
  youtube.publish('reddit');
  youtube.publish('reddit');
  youtube.publish('science');
  youtube.publish('blank');

  messageCenter.update();

  const loggers = subscribers.map((subscriber) => subscriber.logger);
  return <ListLoggerRenderer loggers={loggers} label={'subscriber'} />;
};

export default PublishSubscribePage;
