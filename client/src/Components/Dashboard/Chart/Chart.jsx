import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJs.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

function Chart() {
  const [data, setData] = useState({
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31",
    ],
    datasets: [
      {
        label: "First Dataset",
        data: [
          10, 20, 30, 40, 42, 56, 35, 20, 30, 40, 42, 56, 20, 25, 30, 40, 42,
          56, 20, 20, 30, 40, 42, 56, 30, 20, 30, 40, 42, 56, 45,
        ],
        fill: false,
        borderColor: "blue",
        tension: 0.35,
      },
    ],
  });
  return (
    <div
      style={{
        padding: "20px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "20px",
        alignSelf: "stretch",
      }}
    >
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default Chart;
