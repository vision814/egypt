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
const labels = ["2017", "2018", "2019"];

const TotalSex = ({ result }) => {
  let arr1 = result

    ?.filter((a) => a.Sex == "ذكور")
    ?.reduce((acc, val) => acc + Number(val["2017"]), 0);
  let arr2 = result

    ?.filter((a) => a.Sex == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["2018"]), 0);
  let arr3 = result

    ?.filter((a) => a.Sex == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["2019"]), 0);
  let arr4 = result

    ?.filter((a) => a.Sex == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["2020"]), 0);

  let arr11 = result

    ?.filter((a) => a.Sex == "اناث")
    ?.reduce((acc, val) => acc + Number(val["2017"]), 0);
  let arr22 = result

    ?.filter((a) => a.Sex == "اناث")

    ?.reduce((acc, val) => acc + Number(val["2018"]), 0);
  let arr33 = result

    ?.filter((a) => a.Sex == "اناث")

    ?.reduce((acc, val) => acc + Number(val["2019"]), 0);
  let arr44 = result

    ?.filter((a) => a.Sex == "اناث")

    ?.reduce((acc, val) => acc + Number(val["2020"]), 0);

  const arrMale = [arr1, arr2, arr3];
  //console.log(arrMale);

  const arrFemale = [arr11, arr22, arr33];
  const options = {
    responsive: true,
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
        label: "عدد السكان ذكور",
        data: arrMale?.map((x) => x),
        borderColor: "#0e4c92",
        backgroundColor: "#0e4c92",
      },
      {
        label: "عدد السكان اناث",
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
