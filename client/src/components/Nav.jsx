import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <header className="nav">
      <nav>
        <div>
          <Link to="/" className="upperNav">
            Home
          </Link>

          <Link to="/toolspage" className="upperNav about-link">
            All Tools
          </Link>
          
          <Link to="/truckspage" className="upperNav about-link">
            Trucks
          </Link>

          <Link to="/jobspage" className="upperNav about-link">
            Job Page
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
