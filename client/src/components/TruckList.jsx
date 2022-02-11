import React, { useEffect, useState } from 'react';
import Truck from './Truck'


export const TruckList = (props) => {
  const { filteredTrucks, onUpdateTruck } = props;
console.log(filteredTrucks)
  return (
    <div>
      <h2>This is component Truck list </h2>
    <div>
      {filteredTrucks.map((t, index) => {
        return <Truck truck={t} key={index} onUpdateTruck={onUpdateTruck} />
      })}  
      </div> 
    </div>
  );
};

export default TruckList;
