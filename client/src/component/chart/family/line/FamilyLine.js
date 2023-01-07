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
const labels = [
  "اسر عدد الحجرات 1",
  "اسر عدد الحجرات 2",
  "اسر عدد الحجرات 3",
  "اسر عدد الحجرات 4",
  "اسر عدد الحجرات +5",
];

const TotalSex = ({ result }) => {
  let arr1 = result

    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["اسر1"]), 0);
  let arr2 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["اسر2"]), 0);
  let arr3 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["اسر3"]), 0);
  let arr4 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["اسر4"]), 0);

  let arr5 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["اسر+5"]), 0);

  let arr11 = result

    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["اسر1"]), 0);
  let arr22 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["اسر2"]), 0);
  let arr33 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["اسر3"]), 0);
  let arr44 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["اسر4"]), 0);

  let arr55 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["اسر+5"]), 0);

  const arrMale = [arr1, arr2, arr3, arr4, arr5];
  //console.log(arrMale);

  const arrFemale = [arr11, arr22, arr33, arr44, arr55];
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
        label: "حضر",
        data: arrMale?.map((x) => x),
        borderColor: "#0e4c92",
        backgroundColor: "#0e4c92",
      },
      {
        label: "ريف",
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
