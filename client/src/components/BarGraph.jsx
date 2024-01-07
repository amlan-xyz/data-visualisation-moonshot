import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/data.context";
import {
  removeDayAgeGender,
  separateKeysAndValues,
  sumValuesByKey,
} from "../utils/barGraph.utils";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const BarChart = () => {
  const { state } = useData();
  const navigate = useNavigate();

  const cleanedData = removeDayAgeGender(state.filteredData);

  const summedValues = sumValuesByKey(cleanedData);

  const { keys, values } = separateKeysAndValues(summedValues);

  const input = {
    labels: keys,
    datasets: [
      {
        label: "User vs Expenditure",
        data: values,
        backgroundColor: values.map(() => "rgba(255, 99, 132, 0.2)"), // Define colors here
        borderColor: values.map(() => "rgba(255, 99, 132, 1)"),
        borderWidth: 1,
      },
    ],
  };
  const options = {
    indexAxis: "y",
    onClick: (event, elements) => {
      if (elements && elements.length) {
        const clickedElement = elements[0];
        const label = input.labels[clickedElement.index];
        navigate(`/details/${label}`);
      }
    },
  };

  return (
    <div className="bar__chart">
      <div className="graph">
        <Bar data={input} options={options}></Bar>
      </div>
    </div>
  );
};
