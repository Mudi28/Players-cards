import React from "react";
import { Bar } from "react-chartjs-2";

function Barchart({ chartData }) {
  return (
    <Bar
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

export default Barchart;
