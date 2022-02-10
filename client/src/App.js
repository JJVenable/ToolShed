import logo from './logo.svg';
import './App.css';
import React from 'react'
import axios from 'axios'
import {useEffect, useState } from 'react'
// aasdf ffimportt  componentsss  from backend??

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
    setTrucks(response.data[0]);
  };
    const getJobs = async () => {
      const response = await axios.get('http://localhost:8000/jobs/');
      setjobs(response.data[0]);
    };
    const getTools = async () => {
      const response = await axios.get('http://localhost:8000/tools/');
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
      <header className="App-header"></header>
      <componentForTrucks onGetTrucks={getTrucks}/>
    </div>
  
}

export default App;
