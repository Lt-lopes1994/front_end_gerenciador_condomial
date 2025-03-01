import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData, options }) {
  return <Pie data={chartData} options={options} />;
}

export default PieChart;
