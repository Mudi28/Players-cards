import React from "react";
import { Line } from "react-chartjs-2";

function Linechart({ chartData }) {
  return (
    <Line
      data={chartData}
      options={{
        scales: {
          y: { stacked: true },
        },
        maintainAspectRatio: false,
        canvas: {
          width: 1000,
          height: 1000,
        },
      }}
    />
  );
}

export default Linechart;
