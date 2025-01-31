import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeightChart({ workouts }) {
  // Extract data for the chart
  const data = {
    labels: workouts.map((workout) => workout.date),
    datasets: [
      {
        label: "Total Weight Lifted (kg)",
        data: workouts.map((workout) =>
          workout.sets.reduce((total, set) => total + Number(set.weight), 0)
        ),
        borderColor: "#8b0000",
        backgroundColor: "rgba(139, 0, 0, 0.2)",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#8b0000",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weight Progression",
        font: {
          size: 16,
          family: "Press Start 2P, cursive",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          font: {
            size: 14,
            family: "Press Start 2P, cursive",
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Weight (kg)",
          font: {
            size: 14,
            family: "Press Start 2P, cursive",
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default WeightChart;