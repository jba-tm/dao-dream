// src/components/PieChart.js
import React from "react";
import { Line } from "react-chartjs-2";

function getGradient(ctx, chartArea) {
  let width, height, gradient;

  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    // Create the gradient because this is either the first render
    // or the size of the chart has changed
    width = chartWidth;
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(1, "rgba(0, 143, 255, 1)");
    // gradient.addColorStop(0.5, Utils.CHART_COLORS.yellow);
    gradient.addColorStop(0, "rgba(0, 143, 255, 0)");
  }

  return gradient;
}

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: function (context) {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return;
        }
        return getGradient(ctx, chartArea);
      },
      borderColor: "#713DFF",
      borderJoinStyle: "round",
      tension: 0.25,
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
