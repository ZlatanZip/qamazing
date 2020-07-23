import React from "react";
import {Link} from "react-router-dom";
import "../styles/style.css";

const Dashboard = () => {
  return (
    <div className='dashboard_wrapper'>
      <h1>Dashboard</h1>
      <div className='dashboard_icons_wrapper'>
        <Link className='dashboard_icons' to='/app/users'>
          <h1>Moppies</h1>
        </Link>
      </div>
      <div className='dashboard_icons_wrapper'>
        <Link className='dashboard_icons' to='/app/projects'>
          <h1>Projects</h1>
        </Link>
        <Link className='dashboard_icons' to='/app/resources'>
          <h1>Resources</h1>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
