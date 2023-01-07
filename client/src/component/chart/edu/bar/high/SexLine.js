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
const labels = ["20 - 19", "18 - 16"].reverse();

const TotalSex = ({ result }) => {
  let arr18 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["18 - 16"]), 0);
  let arr19 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["20 - 19"]), 0);

  let arrF18 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["18 - 16"]), 0);
  let arrF19 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["20 - 19"]), 0);
  const arrMale = [arr18, arr19];
  //console.log(arrMale);

  const arrFemale = [arrF18, arrF19];

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
        label: " اناث",
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
