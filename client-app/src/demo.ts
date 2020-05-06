export interface ICar {
  color: string;
  model: string;
  topSpeed?: number;
}

const car1: ICar = {
  color: 'pink',
  model: 'Q5',
  topSpeed: 220,
};

const car2: ICar = {
  color: 'BLUE',
  model: 'CAMRY',
  topSpeed: 120,
};

export const cars = [car1, car2];
