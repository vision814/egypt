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
  "اخرى",
  "الاعاقة",
  "الزواج",
  "العمل",
  "تكرار الرسوب",
  "انفصال الوالدين",
  "وفاة  احد الوالدين",
  "ظروف مادية",
  "عدم  رغبة الاسرة",
  "عدم رغبة الفرد",
  "صعوبة الوصول للمدرسة",
].reverse();

const TotalSex = ({ result }) => {
  let arr9 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["صعوبة الوصول للمدرسة"]), 0);
  let arr10 = result
    ?.filter((a) => a["النوع"] == "ذكور")
    ?.reduce((acc, val) => acc + Number(val["عدم رغبة الفرد"]), 0);

  let arr11 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["عدم  رغبة الاسرة"]), 0);
  let arr12 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["ظروف مادية"]), 0);
  let arr13 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["وفاة  احد الوالدين"]), 0);

  let arr14 = result

    ?.filter((a) => a["النوع"] == "ذكور")
    ?.reduce((acc, val) => acc + Number(val["انفصال الوالدين"]), 0);
  let arr15 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["تكرار الرسوب"]), 0);
  let arr16 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["العمل"]), 0);
  let arr17 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["الزواج"]), 0);

  let arr18 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["الاعاقة"]), 0);
  let arr19 = result

    ?.filter((a) => a["النوع"] == "ذكور")

    ?.reduce((acc, val) => acc + Number(val["اخرى"]), 0);

  let arrF9 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["صعوبة الوصول للمدرسة"]), 0);
  let arrF10 = result
    ?.filter((a) => a["النوع"] == "إناث")
    ?.reduce((acc, val) => acc + Number(val["عدم رغبة الفرد"]), 0);

  let arrF11 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["عدم  رغبة الاسرة"]), 0);
  let arrF12 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["ظروف مادية"]), 0);
  let arrF13 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["وفاة  احد الوالدين"]), 0);

  let arrF14 = result

    ?.filter((a) => a["النوع"] == "إناث")
    ?.reduce((acc, val) => acc + Number(val["انفصال الوالدين"]), 0);
  let arrF15 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["تكرار الرسوب"]), 0);
  let arrF16 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["العمل"]), 0);
  let arrF17 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["الزواج"]), 0);

  let arrF18 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["الاعاقة"]), 0);
  let arrF19 = result

    ?.filter((a) => a["النوع"] == "إناث")

    ?.reduce((acc, val) => acc + Number(val["اخرى"]), 0);
  const arrMale = [
    arr9,
    arr10,
    arr11,
    arr12,
    arr13,
    arr14,
    arr15,
    arr16,
    arr17,
    arr18,
    arr19,
  ];
  //console.log(arrMale);

  const arrFemale = [
    arrF9,
    arrF10,
    arrF11,
    arrF12,
    arrF13,
    arrF14,
    arrF15,
    arrF16,
    arrF17,
    arrF18,
    arrF19,
  ];

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
      <Bar options={options} data={data} />
    </>
  );
};

export default TotalSex;
