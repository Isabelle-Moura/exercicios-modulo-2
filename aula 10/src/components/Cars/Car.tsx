interface CarProps {
  car: CarSummary;
}

const Car = ({ car }: CarProps) => {
  return (
    <>
      <h2>Marca: {car.brand}</h2>
      <h4>Modelo: {car.model}</h4>
      <h4>Ano: {car.year}</h4>
    </>
  );
};

export default Car;
