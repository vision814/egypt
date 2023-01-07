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
const labels = ["اقل من 18", "ارمل", "مطلق", "متزوج", "عقد قران", "لم يتزوج"];

const TotalSex = ({ result }) => {
  let arr1 = result

    ?.filter((a) => a["النوع"] == "ذكور")
    ?.reduce((acc, val) => acc + Number(val["اقل من 18 سنه"]), 0);
  let arr2 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["ارمل"]), 0);
  let arr3 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["مطلق"]), 0);
  let arr4 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["متزوج"]), 0);

  let arr5 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["عقد قران"]), 0);
  let arr6 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["لم يتزوج"]), 0);
  let arr11 = result

    ?.filter((a) => a["النوع"] == "إناث")
    ?.reduce((acc, val) => acc + Number(val["اقل من 18 سنه"]), 0);
  let arr22 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["ارمل"]), 0);
  let arr33 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["مطلق"]), 0);
  let arr44 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["متزوج"]), 0);

  let arr55 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["عقد قران"]), 0);
  let arr66 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["لم يتزوج"]), 0);

  const arrMale = [arr1, arr2, arr3, arr4, arr5, arr6];
  //console.log(arrMale);

  const arrFemale = [arr11, arr22, arr33, arr44, arr55, arr66];
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
      <Bar options={options} data={data} />
    </>
  );
};

export default TotalSex;
