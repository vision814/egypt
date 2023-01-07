import React from "react";
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
import { Line } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["15 - 14", "20 - 16", "15 - 14_1"].reverse();

const TotalSex = ({ result }) => {
  let arr15 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["15 - 14_1"]), 0);
  let arr16 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["20 - 16"]), 0);

  let arr17 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["15 - 14"]), 0);

  let arrF15 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["15 - 14_1"]), 0);
  let arrF16 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["20 - 16"]), 0);

  let arrF17 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["15 - 14"]), 0);

  const arrMale = [arr15, arr16, arr17];
  //console.log(arrMale);

  const arrFemale = [arrF15, arrF16, arrF17];

  const options = {
    responsive: true,

    scales: {
      y: {
        ticks: {
          color: "black",
          font: {
            size: 10,
          },
        },
      },
      x: {
        ticks: {
          color: "black",
          font: {
            size: 10,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: " ذكور",
        data: arrMale?.map((x) => x),
        borderColor: "#0e4c92",
        backgroundColor: "#0e4c92",
      },
      {
        label: " إناث",
        data: arrFemale?.map((x) => x),
        borderColor: "red",
        backgroundColor: "red",
      },
    ],
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default TotalSex;
