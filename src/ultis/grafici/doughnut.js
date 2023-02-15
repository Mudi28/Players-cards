import React from "react";
import { Doughnut } from "react-chartjs-2";

function Doug({ chartData }) {
  return (
    <Doughnut
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

export default Doug;
