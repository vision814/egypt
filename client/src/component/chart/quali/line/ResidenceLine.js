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
  "دكتوراه",
  "ماجستير",
  "دبلوم عالى",
  "مؤهل جامعى",
  "مؤهل فوق المتوسط",
  "مؤهل متوسط فنى",
  "ثانوية عامة/ أزهري",
  "اعدادية",
  "ابتدائية",
  "تربية فكرية",
  "محو أمية",
  "يقرأ ويكتب بدون مؤهل",
  "أمى",
];

const TotalSex = ({ result }) => {
  let arr1 = result

    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["دكتوراه"]), 0);
  let arr2 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["ماجستير"]), 0);
  let arr3 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["دبلوم عالى"]), 0);
  let arr4 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["مؤهل جامعى"]), 0);

  let arr5 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["مؤهل فوق المتوسط"]), 0);
  let arr6 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["مؤهل متوسط فنى"]), 0);
  let arr7 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["ثانوية عامة/ أزهري"]), 0);
  let arr8 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["اعدادية"]), 0);
  let arr9 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["ابتدائية"]), 0);
  let arr10 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["تربية فكرية"]), 0);
  let arr101 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["محو أمية"]), 0);
  let arr102 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["يقرأ ويكتب بدون مؤهل"]), 0);
  let arr103 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["أمى"]), 0);

  let arr11 = result

    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["دكتوراه"]), 0);
  let arr22 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["ماجستير"]), 0);
  let arr33 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["دبلوم عالى"]), 0);
  let arr44 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["مؤهل جامعى"]), 0);

  let arr55 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["مؤهل فوق المتوسط"]), 0);
  let arr66 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["مؤهل متوسط فنى"]), 0);

  let arr77 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["ثانوية عامة/ أزهري"]), 0);
  let arr88 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["اعدادية"]), 0);
  let arr99 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["ابتدائية"]), 0);
  let arr111 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["تربية فكرية"]), 0);
  let arr222 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["محو أمية"]), 0);
  let arr333 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["يقرأ ويكتب بدون مؤهل"]), 0);
  let arr444 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["أمى"]), 0);

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
    arr101,
    arr102,
    arr103,
  ];
  //console.log(arrMale);

  const arrFemale = [
    arr11,
    arr22,
    arr33,
    arr44,
    arr55,
    arr66,
    arr77,
    arr88,
    arr99,
    arr111,
    arr222,
    arr333,
    arr444,
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
      <Line options={options} data={data} />
    </>
  );
};

export default TotalSex;
