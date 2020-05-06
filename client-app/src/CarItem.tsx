import React from 'react';
import { ICar } from './demo';

interface IProps {
  car: ICar;
}

export const CarItem: React.FC<IProps> = ({ car }) => {
  return (
    <div>
      <p>{car.color}</p>
      <p>{car.model}</p>
      <p>{car.topSpeed}</p>
      <hr />
    </div>
  );
};
