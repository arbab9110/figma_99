import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ['Total Hired', 'Total Canceled', 'Total Pending'],
    datasets: [
      {
        data: [54, 20, 26],
        backgroundColor: ['#007bff', '#28a745', '#dc3545'],
        hoverBackgroundColor: ['#007bff', '#28a745', '#dc3545'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ width: '150px', height: '150px', marginTop: '-20px' }}>
      <Doughnut data={data} options={options} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#007bff', marginRight: '5px' }}></div>
          {/* Total Hired - 54% <span style={{ color: 'green', marginLeft: '5px' }}>↑</span> */}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#28a745', marginRight: '5px' }}></div>
          {/* Total Canceled - 20% <span style={{ color: 'green', marginLeft: '5px' }}>↑</span> */}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', backgroundColor: '#dc3545', marginRight: '5px' }}></div>
          {/* Total Pending - 26% <span style={{ color: 'red', marginLeft: '5px' }}>↓</span> */}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
