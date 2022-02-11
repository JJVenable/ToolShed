import React, { useEffect, useState } from 'react';
import Truck from './Truck'


export const TruckList = (props) => {
  const { filteredTrucks } = props;
console.log(filteredTrucks)
  return (
    <div>
      <h2>This is component Truck list </h2>
    <div>
      {filteredTrucks.map((t, index) => {
        return <Truck trucks={t} key={index} />
      })}  
      </div> 
    </div>
  );
};

export default TruckList;
