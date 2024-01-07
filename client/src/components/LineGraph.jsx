import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import "chartjs-plugin-zoom";
import { Line } from "react-chartjs-2";

import { useData } from "../context/data.context";
import { extractValuesToArrays, filterFields } from "../utils/lineGraph.utils";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export const LineChart = ({ user }) => {
  const { state } = useData();
  const filteredData = filterFields(state.filteredData, user);
  const extractedData = extractValuesToArrays(filteredData);

  const input = {
    labels: extractedData.days,
    datasets: [
      {
        label: "Date vs Expenditure",
        data: extractedData.fieldValues,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: true,
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "xy",
        },
      },
    },
  };

  return (
    <div className="line__chart">
      <div className="graph">
        <Line data={input} options={options}></Line>
      </div>
      <h3>Details of User {user}</h3>
    </div>
  );
};
