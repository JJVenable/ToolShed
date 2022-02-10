const state = {
  filteredTrucks: [
    //this stuff comes in from the API
  ],
};

export const TruckList = (props) => {
  const { filteredTrucks, onUpdateTruck } = props;
  return (
    <div>
      {filteredTrucks.map((t) => {
        return <Truck trucks={t} />;
      })}
    </div>
  );
};

export default TruckList;
