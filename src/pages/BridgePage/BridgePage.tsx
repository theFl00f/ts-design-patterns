import { FC } from 'react';
import { ListLoggerRenderer } from '../../util';
import { CircleShape, DrawingAPI1, DrawingAPI2 } from './Bridge';

const BridgePage: FC = () => {
  const shapes = [
    new CircleShape(1, 2, 3, new DrawingAPI1()),
    new CircleShape(5, 7, 11, new DrawingAPI2()),
  ];
  shapes.map((shape) => {
    shape.scale(2.5);
    shape.draw();
  });

  const loggers = shapes.map((shape) => shape.drawingApi.logger);
  return <ListLoggerRenderer loggers={loggers} label={'drawing-api'} />;
};

export default BridgePage;
