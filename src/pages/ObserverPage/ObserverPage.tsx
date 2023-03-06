import { FC } from 'react';
import { LogRenderer } from '../../util';
import { ConcreteObserver, ConcreteSubject } from './Observer';

const ObserverPage: FC = () => {
  const subject = new ConcreteSubject();
  subject.register(new ConcreteObserver(subject, 'Aaron'));
  subject.register(new ConcreteObserver(subject, 'Swartz'));
  subject.register(new ConcreteObserver(subject, 'Reddit'));

  subject.SubjectState = 123;
  subject.notify();

  return <LogRenderer messages={subject.logger.logs} />;
};

export default ObserverPage;
