import React from 'react';
import './StatisticsCard.css';

const StatisticsCard = ({ title, amount, comparison, lastWeek, percentage, icon, iconColor }) => {
  return (
    <div className="statistics-card">
      <div className="card-header">
        <span>{title}</span>
        <span><div className='today'>Today</div></span>
      </div>
      <div className="card-body">
        <h2 style={{ color: 'black' }}>{amount}</h2>
        <div className="comparison">
          <span style={{ color: iconColor }}>{icon}</span>
          <span style={{ color: iconColor }}>{percentage}</span>
        </div>
        <p>Compared to {comparison} yesterday</p>
        <p>Last week {title.toLowerCase()}</p>
        <h3>{lastWeek}</h3>
      </div>
    </div>
  );
};

export default StatisticsCard;
