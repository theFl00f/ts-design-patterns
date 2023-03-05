import { FC } from 'react';
import { LogRenderer } from '../../util';
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
  return (
    <div>
      {shapes.map((shape, index) => (
        <LogRenderer messages={shape.drawingApi.logger.logs} key={index} />
      ))}
    </div>
  );
};

export default BridgePage;
