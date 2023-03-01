import { FC } from 'react';

interface Props {
  messages: string[];
}

const LogRenderer: FC<Props> = ({ messages }) => {
  console.log({ messages });
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={`logger=${index + 1}`}>{message}</li>
      ))}
    </ul>
  );
};

export default LogRenderer;
