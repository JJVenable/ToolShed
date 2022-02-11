// import logo from './logo.svg';
import "./App.css";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// aasdf ffimportt  componentsss  from backend??
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import JobsPage from "./pages/JobsPage";
import ToolsPage from "./pages/ToolsPage";
import TruckDetails from "./pages/TruckDetails";
import TrucksPage from "./pages/TrucksPage";
import Nav from "./components/Nav";
function App() {
  const [tools, setTools] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [jobs, setJobs] = useState([]);

  const getTrucks = async () => {
    const response = await axios.get("http://localhost:8000/trucks/");
    console.log(response);
    setTrucks(response.data);
  };
  const getJobs = async () => {
    const response = await axios.get("http://localhost:8000/jobs/");
    console.log(response);
    setJobs(response.data);
  };
  const getTools = async () => {
    const response = await axios.get("http://localhost:8000/tools/");
    console.log(response);
    // console.table(response)
    setTools(response.data);
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
      <Nav />
      <h3> Hi, You've got this. </h3>

      <main>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/jobspage"
          component={(props) => <JobsPage {...props} jobs={jobs} />}
        />
        <Route
          exact
          path="/toolspage"
          component={(props) => <ToolsPage {...props} tools={tools} />}
        />

        <Route
          exact
          path="/truckdetails"
          component={(props) => <TruckDetails {...props} trucks={trucks} />}
        />

        <Route
          exact
          path="/truckspage"
          component={(props) => <TrucksPage {...props} trucks={trucks} />}
        />
      </main>
    </div>
  );
}

export default App;
