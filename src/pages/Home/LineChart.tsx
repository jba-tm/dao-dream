// src/components/PieChart.js
import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "orange",
      borderColor: "#f95acc",
      borderRadius: 50,
    },
  ],
};

function LineChart() {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Line
        data={data}
        options={{
          plugins: {},
          fill: true,
        }}
      />
    </div>
  );
}
export default LineChart;
