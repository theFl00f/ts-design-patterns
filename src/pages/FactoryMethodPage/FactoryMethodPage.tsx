import { FC } from 'react';
import { LogRenderer } from '../../util';
import { ShapeFactory, ShapeType } from './FactoryMethod';

const FactoryMethodPage: FC = () => {
  const shapeFactory = new ShapeFactory();
  // create a circle shape and call its draw method
  const circleShape = shapeFactory.getShape(ShapeType.Circle);
  // call draw method of circle
  circleShape.draw();

  // create a rectangle shape and call its draw method
  const rectangleShape = shapeFactory.getShape(ShapeType.Rectangle);
  // call draw method of rectangle
  rectangleShape.draw();

  // create a square shape and call its draw method
  const squareShape = shapeFactory.getShape(ShapeType.Square);
  // call draw method of square
  squareShape.draw();

  const shapes = [circleShape, rectangleShape, squareShape];

  return (
    <ul>
      {shapes.map((shape, index) => (
        <li key={`shape=${index + 1}`}>
          <LogRenderer messages={shape.logger.logs} />
        </li>
      ))}
    </ul>
  );
};

export default FactoryMethodPage;
