import React, { useEffect, useState } from "react";
import Truck from "./Truck";

export const TruckList = (props) => {
  const { filteredTrucks, onUpdateTruck } = props;
  console.log(filteredTrucks);
  return (
    <div className = 'truck-list'>
      {/* <h2>This is component Truck list </h2> */}
      <div>
        {filteredTrucks.map((tr) => {
          return <Truck truck={tr} key={tr.id} onUpdateTruck={onUpdateTruck} />;
        })}
      </div>
    </div>
  );
};

export default TruckList;
