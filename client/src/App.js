// import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
// aasdf ffimportt  componentsss  from backend??
import {Route} from 'react-router-dom'

import Home from './pages/Home'
import JobsPage from './pages/JobsPage'
import ToolsPage from './pages/ToolsPage'
import TruckDetails from './pages/TruckDetails'
import TrucksPage from './pages/TrucksPage'

function App() {
const [tools, setTools] = useState([])
const [trucks, setTrucks] = useState([])
const [jobs, setJobs] = useState([])

// useEffect(() => {
//   const getData = async () => {
//     const trucksResponse = await axios.get('http://localhost:8000/trucks/')
//     setTrucks(trucksResponse.data[0])
  
//     const toolsResponse = await axios.get('http://localhost:8000/tools/')
//     setTools(toolsResponse.data[0])

//     const jobsResponse = await axios.get('http://localhost:8000/jobs/')
//     setJobs(jobsResponse.data[0])
//   }
//   getData()
// }, [])

  const getTrucks = async () => {
    const response = await axios.get('http://localhost:8000/trucks/');
    console.log(response)
    setTrucks(response.data[0]);
  };
  const getJobs = async () => {
      const response = await axios.get('http://localhost:8000/jobs/');
      console.log(response)
      setJobs(response.data[0]);
    };
  const getTools = async () => {
      const response = await axios.get('http://localhost:8000/tools/');
      console.log(response)
      // console.table(response)
      setTools(response.data[0]);
    };
// ================
useEffect(() => {
  getTrucks();
  getJobs();
  getTools();
}, []);
// =================

  return (
    <div className="App">
      {/* <Nav /> */}
      <h3> Hi Casey</h3>

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path='/jobspage' component= {JobsPage} />
        <Route exact path='/toolspage' component= {ToolsPage} />
        <Route exact path='/truckdetails' component= {TruckDetails} />
        <Route exact path='/truckspage' component= {TrucksPage} />
      
      </main>
    </div>
  )
}

export default App;
