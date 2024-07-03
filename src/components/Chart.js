


import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = () => {
  const data = {
    labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Last 6 months',
        data: [100, 200, 220, 50, 200, 250],
        fill: false,
        borderColor: 'blue',
        tension: 0.1,
      },
      {
        label: 'Same period last year',
        data: [180, 320, 50, 350, 200, 300],
        fill: false,
        borderColor: 'gray',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: false,
    maintainAspectRatio: false, 
  };

  return <Line data={data} options={options} width={750} height={220} />;
};

export default Chart;

