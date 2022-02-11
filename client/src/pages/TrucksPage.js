import React, { useEffect, useState } from 'react';
import TruckList from '../components/TruckList'
// import AddBooks from '../components/AddBooks';

function TrucksPage(props) {
  const { trucks } = props;
  //place logic for truck filtering around line 7 (all trucks currently)
return (
  <div className="trucks-page">
    <h3>This is TrucksPage</h3>
    <h4><TruckList filteredTrucks={trucks} /></h4>
    
  </div>
)
}
export default TrucksPage