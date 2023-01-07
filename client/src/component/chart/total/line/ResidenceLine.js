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
  "أقل من السن",
  "جملة من التحق وتسرب من التعليم (4 سنوات فاكثر)",
  "لم يلتحق",
  "التحق وتسرب",
  "ملتحق حاليا",
  "التحق وانهى",
];

const TotalSex = ({ result }) => {
  let arr1 = result

    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["أقل من السن"]), 0);
  let arr2 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce(
      (acc, val) =>
        acc + Number(val["جملة من التحق وتسرب من التعليم (4 سنوات فاكثر)"]),
      0
    );
  let arr3 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["لم يلتحق"]), 0);
  let arr4 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["التحق وتسرب"]), 0);

  let arr5 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["ملتحق حاليا"]), 0);
  let arr6 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["التحق وانهى"]), 0);
  let arr11 = result

    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["أقل من السن"]), 0);
  let arr22 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce(
      (acc, val) =>
        acc + Number(val["جملة من التحق وتسرب من التعليم (4 سنوات فاكثر)"]),
      0
    );
  let arr33 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["لم يلتحق"]), 0);
  let arr44 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["التحق وتسرب"]), 0);

  let arr55 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["ملتحق حاليا"]), 0);
  let arr66 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["التحق وانهى"]), 0);

  const arrMale = [arr1, arr2, arr3, arr4, arr5, arr6];
  //console.log(arrMale);

  const arrFemale = [arr11, arr22, arr33, arr44, arr55, arr66];
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
        borderColor: "brown",
        backgroundColor: "brown",
      },
      {
        label: "ريف",
        data: arrFemale?.map((x) => x),
        borderColor: "yellow",
        backgroundColor: "yellow",
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
