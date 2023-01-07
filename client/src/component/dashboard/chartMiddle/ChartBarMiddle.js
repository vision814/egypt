import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography } from "@mui/material";
import axios from "axios";
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

const labels = ["Total Populations"];

const ChartPyramid = ({ ind, setInd, city, date, setDate }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get(`/api/total/ages/${city}`);
        console.log(res);
        setArr(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [city, date]);

  const arrFemales = arr?.filter((p) => p.sex == "اناث");

  const arrMales = arr?.filter((p) => p.sex == "ذكور");
  const totalFemale1 = arrFemales?.reduce((acc, val) => acc + val.pre, 0);
  console.log(totalFemale1);

  const totalMale1 = arrMales?.reduce((acc, val) => acc + val.pre, 0);
  // const totalMale1 = (1.3622 * Number(ind)) / 100;

  let arr1 = [totalMale1 * ind];
  let arr2 = [totalFemale1 * ind];
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          color: "black",
          font: {
            size: 8,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 0,
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
        text: "Total Populations",
      },
    },
  };

  const data1 = {
    labels,
    datasets: [
      {
        label: "Males",
        data: arr1?.map((x) => Math.round(x)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arr2?.map((x) => Math.round(x)),
        backgroundColor: "brown",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data1} />
    </div>
  );
};
export default ChartPyramid;
