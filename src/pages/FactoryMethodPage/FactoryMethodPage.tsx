import { FC } from 'react';
import { ListLoggerRenderer } from '../../util';
import { ShapeFactory, ShapeType } from './FactoryMethod';

const FactoryMethodPage: FC = () => {
  const shapeFactory = new ShapeFactory();
  // create a circle shape and call its draw method
  const circleShape = shapeFactory.getShape(ShapeType.Circle);
  circleShape.draw();

  // create a rectangle shape and call its draw method
  const rectangleShape = shapeFactory.getShape(ShapeType.Rectangle);
  rectangleShape.draw();

  // create a square shape and call its draw method
  const squareShape = shapeFactory.getShape(ShapeType.Square);
  squareShape.draw();

  const shapes = [circleShape, rectangleShape, squareShape];

  const loggers = shapes.map((shape) => shape.logger);

  return <ListLoggerRenderer loggers={loggers} label={'shapes'} />;
};

export default FactoryMethodPage;
