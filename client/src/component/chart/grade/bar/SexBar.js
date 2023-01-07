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
  "انشطة غير كاملة التوصيف",
  "المنظمات والهيئات الدولية و الاقليمية",
  "خدمات افراد الخدمة المنزلية للاسر الخاصة",
  "الخدمات الاخرى",
  "الفنون والابداع والتسلية",
  "الصحة والعمل الاجتمعى",
  "التعليم",
  "الادارة العامة والدفاع والضمان الاجتماعى",
  "الانشطة الادارية وخدمات الدعم",
  "الانسطة العلمية والتقنيه المتخصصة",
  "انشطة العقارات و التاجير",
  "التامين والوساطة المالية",
  "المعلومات و الاتصالات",
];

const TotalSex = ({ result }) => {
  let arr1 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )
    ?.reduce((acc, val) => acc + Number(val["انشطة غير كاملة التوصيف"]), 0);
  let arr2 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce(
      (acc, val) => acc + Number(val["المنظمات والهيئات الدولية و الاقليمية"]),
      0
    );
  let arr3 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce(
      (acc, val) =>
        acc + Number(val["خدمات افراد الخدمة المنزلية للاسر الخاصة"]),
      0
    );
  let arr4 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce((acc, val) => acc + Number(val["الخدمات الاخرى"]), 0);

  let arr5 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce((acc, val) => acc + Number(val["الفنون والابداع والتسلية"]), 0);
  let arr6 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce((acc, val) => acc + Number(val["الصحة والعمل الاجتمعى"]), 0);
  let arr7 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce((acc, val) => acc + Number(val["التعليم"]), 0);
  let arr8 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce(
      (acc, val) =>
        acc + Number(val["الادارة العامة والدفاع والضمان الاجتماعى"]),
      0
    );
  let arr9 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce(
      (acc, val) => acc + Number(val["الانشطة الادارية وخدمات الدعم"]),
      0
    );
  let arr10 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce(
      (acc, val) => acc + Number(val["الانسطة العلمية والتقنيه المتخصصة"]),
      0
    );
  let arr101 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce((acc, val) => acc + Number(val["انشطة العقارات و التاجير"]), 0);
  let arr102 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce((acc, val) => acc + Number(val["التامين والوساطة المالية"]), 0);
  let arr103 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "ذكور"
    )

    ?.reduce((acc, val) => acc + Number(val["المعلومات و الاتصالات"]), 0);

  let arr11 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )
    ?.reduce((acc, val) => acc + Number(val["انشطة غير كاملة التوصيف"]), 0);
  let arr22 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce(
      (acc, val) => acc + Number(val["المنظمات والهيئات الدولية و الاقليمية"]),
      0
    );
  let arr33 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce(
      (acc, val) =>
        acc + Number(val["خدمات افراد الخدمة المنزلية للاسر الخاصة"]),
      0
    );
  let arr44 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce((acc, val) => acc + Number(val["الخدمات الاخرى"]), 0);

  let arr55 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce((acc, val) => acc + Number(val["الفنون والابداع والتسلية"]), 0);
  let arr66 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce((acc, val) => acc + Number(val["الصحة والعمل الاجتمعى"]), 0);

  let arr77 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce((acc, val) => acc + Number(val["التعليم"]), 0);
  let arr88 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce(
      (acc, val) =>
        acc + Number(val["الادارة العامة والدفاع والضمان الاجتماعى"]),
      0
    );
  let arr99 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce(
      (acc, val) => acc + Number(val["الانشطة الادارية وخدمات الدعم"]),
      0
    );
  let arr111 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce(
      (acc, val) => acc + Number(val["الانسطة العلمية والتقنيه المتخصصة"]),
      0
    );
  let arr222 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce((acc, val) => acc + Number(val["انشطة العقارات و التاجير"]), 0);
  let arr333 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce((acc, val) => acc + Number(val["التامين والوساطة المالية"]), 0);
  let arr444 = result

    ?.filter(
      (a) =>
        a["تقديرات المشتغلين 15 سنة فأكثر للنوع و النشاط االقتصادى"] == "إناث"
    )

    ?.reduce((acc, val) => acc + Number(val["المعلومات و الاتصالات"]), 0);

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
