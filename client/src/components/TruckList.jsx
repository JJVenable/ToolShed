import React, { useEffect, useState } from 'react';
import Truck from './Truck'


export const TruckList = (props) => {
  const { filteredTrucks } = props;

  return (
    <div>
      <h2>This is component Truck list </h2>
      {filteredTrucks.map((t, index) => {
        return <Truck trucks={t} key={index} />;
      })} 
    </div>
  );
};

export default TruckList;
