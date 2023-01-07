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
  "محافظة القاهرة",
  "محافظة الجيزة",
  "محافظة الاسكندرية",
  "محافظة الدقهلية",
  "محافظة البحر الاحمر",
  "محافظة البحيرة",
  "محافظة الفيوم",
  "محافظة الغربية",
  "محافظة الاسماعيلية",
  "محافظة المنوفية",
  "محافظة المنيا",
  "محافظة القليوبية",
  "محافظة الوادى الجديد",
  "محافظة السويس",
  "محافظة اسوان",
  "محافظة اسيوط",
  "محافظة بنى سويف",
  "محافظة بورسعيد",
  "محافظة دمياط",
  "محافظة الشرقية",
  "محافظة جنوب سيناء",
  "محافظة كفر الشيخ",
  "محافظة مطروح",
  "محافظة الاقصر",
  "محافظة قنا",
  "محافظة شمال سيناء",
  "محافظة سوهاج",
];

const TotalSex = ({ result }) => {
  let arr1 = result
    ?.filter((a) => a.city == "محافظة القاهرة")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr2 = result
    ?.filter((a) => a.city == "محافظة الجيزة")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr3 = result
    ?.filter((a) => a.city == "محافظة الاسكندرية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr4 = result
    ?.filter((a) => a.city == "محافظة الدقهلية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr5 = result
    ?.filter((a) => a.city == "محافظة البحر الاحمر")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr6 = result
    ?.filter((a) => a.city == "محافظة البحيرة")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr7 = result
    ?.filter((a) => a.city == "محافظة الفيوم")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr8 = result
    ?.filter((a) => a.city == "محافظة الغربية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr9 = result
    ?.filter((a) => a.city == "محافظة الاسماعيلية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr10 = result
    ?.filter((a) => a.city == "محافظة المنوفية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr11 = result
    ?.filter((a) => a.city == "محافظة المنيا")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr12 = result
    ?.filter((a) => a.city == "محافظة القليوبية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr13 = result
    ?.filter((a) => a.city == "محافظة السويس")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr14 = result
    ?.filter((a) => a.city == "محافظة اسوان")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr15 = result
    ?.filter((a) => a.city == "محافظة اسيوط")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr16 = result
    ?.filter((a) => a.city == "محافظة الوادى الجديد")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr17 = result
    ?.filter((a) => a.city == "محافظة دمياط")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);

  let arr18 = result
    ?.filter((a) => a.city == "محافظة جنوب سيناء")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);

  let arr19 = result
    ?.filter((a) => a.city == "محافظة شمال سيناء")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr20 = result
    ?.filter((a) => a.city == "محافظة مطروح")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr21 = result
    ?.filter((a) => a.city == "محافظة الشرقية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr22 = result
    ?.filter((a) => a.city == "محافظة بني سويف")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr23 = result
    ?.filter((a) => a.city == "محافظة قنا")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr24 = result
    ?.filter((a) => a.city == "محافظة سوهاج")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr25 = result
    ?.filter((a) => a.city == "محافظة كفر الشيخ")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr26 = result
    ?.filter((a) => a.city == "محافظة بورسعيد")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  let arr27 = result
    ?.filter((a) => a.city == "محافظة الاقصر")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان ذكور"]), 0);
  const arrMale = [
    arr1,
    arr2,
    arr3,
    arr4,
    arr5,
    arr6,
    arr7,
    arr8,
    arr9,
    arr10,
    arr11,
    arr12,
    arr16,
    arr13,
    arr14,
    arr15,
    arr22,
    arr26,
    arr17,
    arr21,
    arr18,
    arr25,
    arr20,
    arr27,
    arr23,
    arr19,
    arr24,
  ];
  let arr111 = result
    ?.filter((a) => a.city == "محافظة القاهرة")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr211 = result
    ?.filter((a) => a.city == "محافظة الجيزة")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr311 = result
    ?.filter((a) => a.city == "محافظة الاسكندرية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr411 = result
    ?.filter((a) => a.city == "محافظة الدقهلية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr511 = result
    ?.filter((a) => a.city == "محافظة البحر الاحمر")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr611 = result
    ?.filter((a) => a.city == "محافظة البحيرة")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr711 = result
    ?.filter((a) => a.city == "محافظة الفيوم")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr811 = result
    ?.filter((a) => a.city == "محافظة الغربية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr911 = result
    ?.filter((a) => a.city == "محافظة الاسماعيلية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr1011 = result
    ?.filter((a) => a.city == "محافظة المنوفية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr1111 = result
    ?.filter((a) => a.city == "محافظة المنيا")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr1211 = result
    ?.filter((a) => a.city == "محافظة القليوبية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr1311 = result
    ?.filter((a) => a.city == "محافظة السويس")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr1411 = result
    ?.filter((a) => a.city == "محافظة اسوان")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr1511 = result
    ?.filter((a) => a.city == "محافظة اسيوط")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr1611 = result
    ?.filter((a) => a.city == "محافظة الوادى الجديد")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr1711 = result
    ?.filter((a) => a.city == "محافظة دمياط")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);

  let arr1811 = result
    ?.filter((a) => a.city == "محافظة جنوب سيناء")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);

  let arr1911 = result
    ?.filter((a) => a.city == "محافظة شمال سيناء")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr2011 = result
    ?.filter((a) => a.city == "محافظة مطروح")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr2111 = result
    ?.filter((a) => a.city == "محافظة الشرقية")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr2211 = result
    ?.filter((a) => a.city == "محافظة بني سويف")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr2311 = result
    ?.filter((a) => a.city == "محافظة قنا")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr2411 = result
    ?.filter((a) => a.city == "محافظة سوهاج")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr2511 = result
    ?.filter((a) => a.city == "محافظة كفر الشيخ")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr2611 = result
    ?.filter((a) => a.city == "محافظة بورسعيد")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  let arr2711 = result
    ?.filter((a) => a.city == "محافظة الاقصر")
    ?.reduce((acc, val) => acc + Number(val["عدد السكان اناث"]), 0);
  const arrFemale = [
    arr111,
    arr211,
    arr311,
    arr411,
    arr511,
    arr611,
    arr711,
    arr811,
    arr911,
    arr1011,
    arr1111,
    arr1211,
    arr1611,
    arr1311,
    arr1411,
    arr1511,
    arr2211,
    arr2611,
    arr1711,
    arr2111,
    arr1811,
    arr2511,
    arr2011,
    arr2711,
    arr2311,
    arr1911,
    arr2411,
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
