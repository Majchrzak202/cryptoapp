import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import dayjs from "dayjs";
import { useParams } from "react-router";
import { Box } from "@material-ui/core";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Chart = () => {
  const [chartData, setChartData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchChartData = async () => {
      const response = await fetch(
        `https://api.coinstats.app/public/v1/charts?period=1m&coinId=${id}`
      );
      const data = await response.json();
      setChartData(
        data.chart.map((value) => ({ x: value[0], y: value[1].toFixed(2) }))
      );
    };
    fetchChartData();
  }, [id]);

  if (chartData.length === 0) {
    return null;
  }

  const options = {
    responsive: true,
    elements: {
      point: {
        borderWidth: 0.5,
        radius: 0.5,
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data = {
    labels: chartData.map((value) => dayjs.unix(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: `${id} price USD`,
        data: chartData.map((val) => val.y),
        borderColor: "rgba(180, 206, 241, 255)",
        backgroundColor: "rgba(180, 206, 241, 0.2)",
        borderWidth: 2.5,
      },
    ],
  };

  return (
    <Box>
      <Line options={options} data={data} />
    </Box>
  );
};

export default Chart;
