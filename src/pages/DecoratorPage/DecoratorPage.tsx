import { FC } from 'react';
import { LogRenderer } from '../../util';
import { Circle, Rectangle, RedShapeDecorator } from './Decorator';

const DecoratorPage: FC = () => {
  const circle = new Circle();
  const redCircle = new RedShapeDecorator(new Circle());
  const redRectangle = new RedShapeDecorator(new Rectangle());
  const shapes = [circle, redCircle, redRectangle];
  shapes.map((shape) => {
    shape.draw();
  });
  return (
    <ul>
      {shapes.map((shape, index) => (
        <li key={`shape-${index + 1}`} style={{ padding: '0.75em 0' }}>
          <LogRenderer messages={shape.logger.logs} />
        </li>
      ))}
    </ul>
  );
};

export default DecoratorPage;
