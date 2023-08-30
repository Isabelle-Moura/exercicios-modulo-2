import Car from "./Car";

interface Cars {
  cars: CarSummary[];
}

const CarList = ({ cars }: Cars) => {
  return (
    <div>
      {cars.map((item, index) => (
        <Car car={item} key={index} />
      ))}
    </div>
  );
};

export default CarList;
