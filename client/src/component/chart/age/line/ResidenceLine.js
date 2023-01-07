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
  "+90",
  "-85",
  "-80",
  "-75",
  "-70",
  "-65",
  "-60",
  "-55",
  "-50",
  "-45",
  "-40",
  "-35",
  "-30",
  "-25",
  "-20",
  "-15",
  "-10",
  "-5",
  "اقل من سنة",
].reverse();

const ResidenceLine = ({ result }) => {
  let arr1 = result

    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["أقل من سنة"]), 0);
  let arr2 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-5"]), 0);
  let arr3 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-10"]), 0);
  let arr4 = result
    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["-15"]), 0);

  let arr5 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-20"]), 0);
  let arr6 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-25"]), 0);
  let arr7 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-30"]), 0);
  let arr8 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-35"]), 0);
  let arr9 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-40"]), 0);
  let arr10 = result
    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["-45"]), 0);

  let arr11 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-50"]), 0);
  let arr12 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-55"]), 0);
  let arr13 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-60"]), 0);

  let arr14 = result

    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["-65"]), 0);
  let arr15 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-70"]), 0);
  let arr16 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-75"]), 0);
  let arr17 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-80"]), 0);

  let arr18 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["-85"]), 0);
  let arr19 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["+90"]), 0);

  let arrF1 = result

    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["أقل من سنة"]), 0);

  let arrF2 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-5"]), 0);
  let arrF3 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-10"]), 0);
  let arrF4 = result
    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["-15"]), 0);

  let arrF5 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-20"]), 0);
  let arrF6 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-25"]), 0);
  let arrF7 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-30"]), 0);
  let arrF8 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-35"]), 0);
  let arrF9 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-40"]), 0);
  let arrF10 = result
    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["-45"]), 0);

  let arrF11 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-50"]), 0);
  let arrF12 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-55"]), 0);
  let arrF13 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-60"]), 0);

  let arrF14 = result

    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["-65"]), 0);
  let arrF15 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-70"]), 0);
  let arrF16 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-75"]), 0);
  let arrF17 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-80"]), 0);

  let arrF18 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["-85"]), 0);
  let arrF19 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["+90"]), 0);
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
    arrF1,
    arrF2,
    arrF3,
    arrF4,
    arrF5,
    arrF6,
    arrF7,
    arrF8,
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
        label: " فئات السن حضر",
        data: arrMale?.map((x) => x),
        borderColor: "brown",
        backgroundColor: "brown",
      },
      {
        label: " فئات السن ريف",
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

export default ResidenceLine;
