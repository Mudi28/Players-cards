import Barchart from "./barchart";
import Linechart from "./linechart";
import { people } from "../../data/data";
import { useLocation } from "react-router-dom";
import Pradar from "./radar";
import Doug from "./doughnut";
// eslint-disable-next-line no-unused-vars
import { Chart as Chartjs } from "chart.js/auto";

const All = () => {
  const { selectedOption, selectedPeople = [] } = useLocation().state || {};
  const filteredPeople = people.filter((person) =>
    selectedPeople.includes(person.name)
  );

  const People = {
    labels: filteredPeople.map((person) => person.name),
    datasets: [
      {
        label: selectedOption,
        data: filteredPeople.map((person) => person[selectedOption]),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(255, 99, 132)",
        pointBackgroundColor: "rgb(255, 99, 132)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return (
    <div className="container3">
      <div className="card3">
        <Barchart chartData={People} />
      </div>

      <div className="card3">
        <Doug chartData={People} />
      </div>

      <div className="card3">
        <Linechart chartData={People} />
      </div>

      <div className="card3">
        <Pradar chartData={People} />
      </div>
    </div>
  );
};

export { All };
