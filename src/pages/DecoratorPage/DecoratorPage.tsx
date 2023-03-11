import { FC } from 'react';
import { ListLoggerRenderer } from '../../util';
import { Circle, Rectangle, RedShapeDecorator } from './Decorator';

const DecoratorPage: FC = () => {
  const circle = new Circle();
  const redCircle = new RedShapeDecorator(new Circle());
  const redRectangle = new RedShapeDecorator(new Rectangle());
  const shapes = [circle, redCircle, redRectangle];
  shapes.map((shape) => shape.draw());
  const loggers = shapes.map((shape) => shape.logger);
  return <ListLoggerRenderer loggers={loggers} label={'shapes'} />;
};

export default DecoratorPage;
