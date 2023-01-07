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
const labels = [
  "افراد عدد الحجرات 1",
  "افراد عدد الحجرات 2",
  "افراد عدد الحجرات 3",
  "افراد عدد الحجرات 4",
  "افراد عدد الحجرات +5",
];

const TotalSex = ({ result }) => {
  let arr1 = result

    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["1"]), 0);
  let arr2 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["2"]), 0);
  let arr3 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["3"]), 0);
  let arr4 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["4"]), 0);

  let arr5 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["افراد"]), 0);

  let arr11 = result

    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["1"]), 0);
  let arr22 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["2"]), 0);
  let arr33 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["3"]), 0);
  let arr44 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["4"]), 0);

  let arr55 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["افراد"]), 0);

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
      <Bar options={options} data={data} />
    </>
  );
};

export default TotalSex;
