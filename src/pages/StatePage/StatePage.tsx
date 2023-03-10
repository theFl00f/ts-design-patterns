import { FC } from 'react';
import { LogRenderer } from '../../util';
import {
  DefaultText,
  LowerCase,
  TextEditor,
  UpperCase,
  WritingStateName,
} from './State';

const StatePage: FC = () => {
  const states = {
    [WritingStateName.DefaultText]: new DefaultText(),
    [WritingStateName.LowerCase]: new LowerCase(),
    [WritingStateName.UpperCase]: new UpperCase(),
  };

  const editor = new TextEditor(states[WritingStateName.DefaultText]);

  editor.type('First line');

  editor.setState(states[WritingStateName.UpperCase]);

  editor.type('Second line');
  editor.type('Third line');

  editor.setState(states[WritingStateName.LowerCase]);

  editor.type('Fourth line');
  editor.type('Fifth line');

  editor.setState(states[WritingStateName.DefaultText]);

  editor.type('Meow');
  return <LogRenderer messages={editor.logger.logs} />;
};

export default StatePage;
