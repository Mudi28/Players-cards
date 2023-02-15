import React from "react";
import { PolarArea } from "react-chartjs-2";

function pradar({ chartData }) {

  
    return (
        < PolarArea
            data={chartData}
            options={{
                scales: {
                    y: { stacked: true }
                },
                maintainAspectRatio: false,
                canvas: {
                    width: 1000,
                    height: 1000
                }
            }}
        />
    );
}

export default pradar;
