import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const labels = ["20 - 19", "18 - 16"].reverse();

const TotalSex = ({ result }) => {
  let arr18 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["18 - 16"]), 0);
  let arr19 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["20 - 19"]), 0);

  let arrF18 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["18 - 16"]), 0);
  let arrF19 = result

    ?.filter((a) => a["التبعية"] == "ريف")

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
        label: " حضر",
        data: arrMale?.map((x) => x),
        borderColor: "brown",
        backgroundColor: "brown",
      },
      {
        label: " ريف",
        data: arrFemale?.map((x) => x),
        borderColor: "yellow",
        backgroundColor: "yellow",
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default TotalSex;
