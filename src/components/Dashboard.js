import React, { useState, useEffect } from "react";
import StatisticsCard from "./StatisticsCard";

import "./Dashboard.css";
import DonutChart from "./DonutChart";


const Dashboard = () => {
const [currentDateTime, setCurrentDateTime]  = useState(new Date());

useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
}, []);
const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    return date.toLocaleDateString(undefined, options);
  };



  return (
    <div className="dashboard">
      <h1>Today's Statistics</h1>
      <div className="date-time-display">
      <p>{formatDate(currentDateTime)}</p>
    </div>
      
      <StatisticsCard
        title="Income"
        amount="$9460.00"
        comparison="$9940"
        lastWeek="$25658.00"
        percentage="↓ 1.5%"
        iconColor="red"
      />
      <StatisticsCard
        title="Expenses"
        amount="$5660.00"
        comparison="$5240"
        lastWeek="$22658.00"
        percentage="↑ 2.5%"
        iconColor="green"
      />
      <div className="chart-card">
        <div className="card-header">
          <span>Hire vs Cancel</span>
          <span><div className="toda">Today</div></span>
        </div>
        <div className="chart-body">
          {/* <div className="chart">
            <div className="chart-item" style={{ backgroundColor: 'blue', width: '54%' }}></div>
            <div className="chart-item" style={{ backgroundColor: 'green', width: '20%' }}></div>
            <div className="chart-item" style={{ backgroundColor: 'red', width: '26%' }}></div>
          </div>
        

          <ul className="chart-legend">
            <li>
              <span className="dot blue"></span>Total Hired 54%{" "}
              <span className="icon green">▲</span>
            </li>
            <li>
              <span className="dot green"></span>Total Canceled 20%{" "}
              <span className="icon green" />▲
            </li>
            <li>
              <span className="dot red"></span>Total Pending 26%{" "}
              <span className="icon red">▼</span>
            </li>
          </ul> */}
         <DonutChart />
         <ul className="chart-legend">
            <li>
              <span className="dot blue"></span>Total Hired 54%{" "}
              <span className="icon green">▲</span>
            </li>
            <li>
              <span className="dot green"></span>Total Canceled 20%{" "}
              <span className="icon green" />▲
            </li>
            <li>
              <span className="dot red"></span>Total Pending 26%{" "}
              <span className="icon red">▼</span>
            </li>
          </ul> 
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
