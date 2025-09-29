import React from 'react';
import { Pie } from "react-chartjs-2";


function PieChart(props) {
    const labels = props.data.map(item => item.title);
    const data = props.data.map(item => item.budget);

    const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: [
          "#ff6384",
          "#36a2eb",
          "#fd6b19"
        ]
      }
    ]
  }
  return (
     <Pie data={chartData} />
  );
}

export default PieChart;
