import React, { useEffect, useState } from 'react';
import TruckList from '../components/TruckList'
import axios from 'axios'

function TrucksPage(props) {
  const { trucks } = props
  //place logic for truck filtering right here (all trucks currently)
  //add api call for update Trucks
  //add api call for delete Trucks
  //add api call for put/update Trucks
  const updateTruck = (id) => {
    console.log(`truck ${id} updated!`)
    // const put whatever whatever
  }
return (
  <div className="trucks-page">
    <h3>This is TrucksPage</h3>
    <h4><TruckList filteredTrucks={trucks} onUpdateTruck={updateTruck} /></h4>
    
  </div>
)
}
export default TrucksPage