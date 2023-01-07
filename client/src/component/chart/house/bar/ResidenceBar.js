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
  "غير متصل بالغاز طبيعي ",
  "  بالغاز طبيعي متصل",
  "غير متصل صرف صحي ",
  "متصل صرف صحي",
  "غير متصل بمياه الشرب",
  "متصل بمياه الشرب  ",
  "غير متصل بالكهرباء",
  " متصل بالكهرباء",
];

const ResidenceLine = ({ result }) => {
  let arr1 = result

    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["غير متصل بالغاز طبيعي "]), 0);
  let arr2 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["  بالغاز طبيعي متصل"]), 0);

  let arr12 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val[" متصل بالكهرباء"]), 0);
  let arr13 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["غير متصل بالكهرباء"]), 0);

  let arr14 = result

    ?.filter((a) => a["التبعية"] == "حضر")
    ?.reduce((acc, val) => acc + Number(val["متصل بمياه الشرب  "]), 0);
  let arr15 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["غير متصل بمياه الشرب"]), 0);
  let arr16 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["متصل صرف صحي"]), 0);
  let arr17 = result

    ?.filter((a) => a["التبعية"] == "حضر")

    ?.reduce((acc, val) => acc + Number(val["غير متصل صرف صحي "]), 0);

  let arrF1 = result
    ?.filter((a) => a["غير متصل بالغاز طبيعي "] !== "")

    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["غير متصل بالغاز طبيعي "]), 0);

  let arrF2 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["  بالغاز طبيعي متصل"]), 0);

  let arrF12 = result
    ?.filter((a) => a[" متصل بالكهرباء"] !== "")
    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val[" متصل بالكهرباء"]), 0);
  let arrF13 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["غير متصل بالكهرباء"]), 0);

  let arrF14 = result

    ?.filter((a) => a["التبعية"] == "ريف")
    ?.reduce((acc, val) => acc + Number(val["متصل بمياه الشرب  "]), 0);
  let arrF15 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["غير متصل بمياه الشرب"]), 0);
  let arrF16 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["متصل صرف صحي"]), 0);
  let arrF17 = result

    ?.filter((a) => a["التبعية"] == "ريف")

    ?.reduce((acc, val) => acc + Number(val["غير متصل صرف صحي "]), 0);

  const arrMale = [arr1, arr2, arr17, arr16, arr15, arr14, arr13, arr12];
  //console.log(arrMale);

  const arrFemale = [
    arrF1,
    arrF2,
    arrF17,
    arrF16,
    arrF15,
    arrF14,
    arrF13,
    arrF12,
  ];
  console.log(arrFemale);

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

export default ResidenceLine;
