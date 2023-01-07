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
const labels = ["0-10", "10-20", "20-30", "30-40", "40-50", "60-70", "70+"];

const ChartPyramid = ({ ind, setInd, city, date, setDate }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        if (city == "Egypt") {
          const res = await axios.get("/api/total/ages");
          console.log(res);
          setArr(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [city, date]);

  const arrFemales = arr?.filter((p) => p._id.sex == "اناث");

  const arrMales = arr?.filter((p) => p._id.sex == "ذكور");
  const totalFemale1 = arrFemales
    ?.filter((p) => p._id.age == "أقل من سنة")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalMale1 = arrMales
    ?.filter((p) => p._id.age == "أقل من سنة")
    .reduce((acc, val) => acc + val.pre, 0);
  // const totalMale1 = (1.3622 * Number(ind)) / 100;

  const totalFemale2 = arrFemales
    ?.filter((p) => p._id.age == "1")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale2 = arrMales
    ?.filter((p) => p._id.age == "1")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale3 = arrFemales
    ?.filter((p) => p._id.age == "2")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale3 = arrMales
    ?.filter((p) => p._id.age == "2")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale4 = arrFemales
    ?.filter((p) => p._id.age == "3")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale4 = arrMales
    ?.filter((p) => p._id.age == "3")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale5 = arrFemales
    ?.filter((p) => p._id.age == "4")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale5 = arrMales
    ?.filter((p) => p._id.age == "4")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale6 = arrFemales
    ?.filter((p) => p._id.age == "5")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale6 = arrMales
    ?.filter((p) => p._id.age == "5")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale7 = arrFemales
    ?.filter((p) => p._id.age == "6")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale7 = arrMales
    ?.filter((p) => p._id.age == "6")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale8 = arrFemales
    ?.filter((p) => p._id.age == "7")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale8 = arrMales
    ?.filter((p) => p._id.age == "7")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale9 = arrFemales
    ?.filter((p) => p._id.age == "8")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale9 = arrMales
    ?.filter((p) => p._id.age == "8")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale10 = arrFemales
    ?.filter((p) => p._id.age == "9")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale10 = arrMales
    ?.filter((p) => p._id.age == "9")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale11 = arrFemales
    ?.filter((p) => p._id.age == "10")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale11 = arrMales
    ?.filter((p) => p._id.age == "10")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale12 = arrFemales
    ?.filter((p) => p._id.age == "11")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale12 = arrMales
    ?.filter((p) => p._id.age == "11")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale13 = arrFemales
    ?.filter((p) => p._id.age == "12")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale13 = arrMales
    ?.filter((p) => p._id.age == "12")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale14 = arrFemales
    ?.filter((p) => p._id.age == "13")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale14 = arrMales
    ?.filter((p) => p._id.age == "13")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale15 = arrFemales
    ?.filter((p) => p._id.age == "14")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale15 = arrMales
    ?.filter((p) => p._id.age == "14")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale16 = arrFemales
    ?.filter((p) => p._id.age == "15")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale16 = arrMales
    ?.filter((p) => p._id.age == "15")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale17 = arrFemales
    ?.filter((p) => p._id.age == "16")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale17 = arrMales
    ?.filter((p) => p._id.age == "16")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale18 = arrFemales
    ?.filter((p) => p._id.age == "17")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale18 = arrMales
    ?.filter((p) => p._id.age == "17")
    .reduce((acc, val) => acc + val.pre, 0);
  //new
  const totalFemale19 = arrFemales
    ?.filter((p) => p._id.age == "18")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale19 = arrMales
    ?.filter((p) => p._id.age == "18")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale20 = arrFemales
    ?.filter((p) => p._id.age == "19")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale20 = arrMales
    ?.filter((p) => p._id.age == "19")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale21 = arrFemales
    ?.filter((p) => p._id.age == "20")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale21 = arrMales
    ?.filter((p) => p._id.age == "20")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale22 = arrFemales
    ?.filter((p) => p._id.age == "21")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale22 = arrMales
    ?.filter((p) => p._id.age == "21")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale23 = arrFemales
    ?.filter((p) => p._id.age == "22")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale23 = arrMales
    ?.filter((p) => p._id.age == "22")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale24 = arrFemales
    ?.filter((p) => p._id.age == "23")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale24 = arrMales
    ?.filter((p) => p._id.age == "23")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale25 = arrFemales
    ?.filter((p) => p._id.age == "24")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale25 = arrMales
    ?.filter((p) => p._id.age == "24")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale26 = arrFemales
    ?.filter((p) => p._id.age == "25")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale26 = arrMales
    ?.filter((p) => p._id.age == "25")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale27 = arrFemales
    ?.filter((p) => p._id.age == "26")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale27 = arrMales
    ?.filter((p) => p._id.age == "26")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale28 = arrFemales
    ?.filter((p) => p._id.age == "27")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale28 = arrMales
    ?.filter((p) => p._id.age == "27")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale29 = arrFemales
    ?.filter((p) => p._id.age == "28")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale29 = arrMales
    ?.filter((p) => p._id.age == "28")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale30 = arrFemales
    ?.filter((p) => p._id.age == "29")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale30 = arrMales
    ?.filter((p) => p._id.age == "29")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale31 = arrFemales
    ?.filter((p) => p._id.age == "30")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale31 = arrMales
    ?.filter((p) => p._id.age == "30")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale32 = arrFemales
    ?.filter((p) => p._id.age == "31")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale32 = arrMales
    ?.filter((p) => p._id.age == "31")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale33 = arrFemales
    ?.filter((p) => p._id.age == "32")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale33 = arrMales
    ?.filter((p) => p._id.age == "32")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale34 = arrFemales
    ?.filter((p) => p._id.age == "33")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale34 = arrMales
    ?.filter((p) => p._id.age == "33")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale35 = arrFemales
    ?.filter((p) => p._id.age == "34")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale35 = arrMales
    ?.filter((p) => p._id.age == "34")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale36 = arrFemales
    ?.filter((p) => p._id.age == "35")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale36 = arrMales
    ?.filter((p) => p._id.age == "35")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale37 = arrFemales
    ?.filter((p) => p._id.age == "36")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale37 = arrMales
    ?.filter((p) => p._id.age == "36")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale38 = arrFemales
    ?.filter((p) => p._id.age == "37")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale38 = arrMales
    ?.filter((p) => p._id.age == "37")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale39 = arrFemales
    ?.filter((p) => p._id.age == "38")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale39 = arrMales
    ?.filter((p) => p._id.age == "38")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale40 = arrFemales
    ?.filter((p) => p._id.age == "39")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale40 = arrMales
    ?.filter((p) => p._id.age == "39")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale41 = arrFemales
    ?.filter((p) => p._id.age == "40")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale41 = arrMales
    ?.filter((p) => p._id.age == "40")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale42 = arrFemales
    ?.filter((p) => p._id.age == "41")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale42 = arrMales
    ?.filter((p) => p._id.age == "41")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale43 = arrFemales
    ?.filter((p) => p._id.age == "42")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale43 = arrMales
    ?.filter((p) => p._id.age == "42")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale44 = arrFemales
    ?.filter((p) => p._id.age == "43")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale44 = arrMales
    ?.filter((p) => p._id.age == "43")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale45 = arrFemales
    ?.filter((p) => p._id.age == "44")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale45 = arrMales
    ?.filter((p) => p._id.age == "44")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale46 = arrFemales
    ?.filter((p) => p._id.age == "45")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale46 = arrMales
    ?.filter((p) => p._id.age == "45")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale47 = arrFemales
    ?.filter((p) => p._id.age == "46")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale47 = arrMales
    ?.filter((p) => p._id.age == "46")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale48 = arrFemales
    ?.filter((p) => p._id.age == "47")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale48 = arrMales
    ?.filter((p) => p._id.age == "47")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale49 = arrFemales
    ?.filter((p) => p._id.age == "48")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale49 = arrMales
    ?.filter((p) => p._id.age == "48")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale50 = arrFemales
    ?.filter((p) => p._id.age == "49")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale50 = arrMales
    ?.filter((p) => p._id.age == "49")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale51 = arrFemales
    ?.filter((p) => p._id.age == "50")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale51 = arrMales
    ?.filter((p) => p._id.age == "50")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale52 = arrFemales
    ?.filter((p) => p._id.age == "51")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale52 = arrMales
    ?.filter((p) => p._id.age == "51")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale53 = arrFemales
    ?.filter((p) => p._id.age == "52")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale53 = arrMales
    ?.filter((p) => p._id.age == "52")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale54 = arrFemales
    ?.filter((p) => p._id.age == "53")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale54 = arrMales
    ?.filter((p) => p._id.age == "53")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale55 = arrFemales
    ?.filter((p) => p._id.age == "54")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale55 = arrMales
    ?.filter((p) => p._id.age == "54")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale56 = arrFemales
    ?.filter((p) => p._id.age == "55")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale56 = arrMales
    ?.filter((p) => p._id.age == "55")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale57 = arrFemales
    ?.filter((p) => p._id.age == "56")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale57 = arrMales
    ?.filter((p) => p._id.age == "56")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale58 = arrFemales
    ?.filter((p) => p._id.age == "57")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale58 = arrMales
    ?.filter((p) => p._id.age == "57")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale59 = arrFemales
    ?.filter((p) => p._id.age == "58")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale59 = arrMales
    ?.filter((p) => p._id.age == "58")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale60 = arrFemales
    ?.filter((p) => p._id.age == "59")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale60 = arrMales
    ?.filter((p) => p._id.age == "59")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale61 = arrFemales
    ?.filter((p) => p._id.age == "60")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale61 = arrMales
    ?.filter((p) => p._id.age == "60")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale62 = arrFemales
    ?.filter((p) => p._id.age == "61")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale62 = arrMales
    ?.filter((p) => p._id.age == "61")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale63 = arrFemales
    ?.filter((p) => p._id.age == "62")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale63 = arrMales
    ?.filter((p) => p._id.age == "62")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale64 = arrFemales
    ?.filter((p) => p._id.age == "63")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale64 = arrMales
    ?.filter((p) => p._id.age == "63")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale65 = arrFemales
    ?.filter((p) => p._id.age == "64")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale65 = arrMales
    ?.filter((p) => p._id.age == "64")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale66 = arrFemales
    ?.filter((p) => p._id.age == "65")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale66 = arrMales
    ?.filter((p) => p._id.age == "65")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale67 = arrFemales
    ?.filter((p) => p._id.age == "66")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale67 = arrMales
    ?.filter((p) => p._id.age == "66")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale68 = arrFemales
    ?.filter((p) => p._id.age == "67")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale68 = arrMales
    ?.filter((p) => p._id.age == "67")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale69 = arrFemales
    ?.filter((p) => p._id.age == "68")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale69 = arrMales
    ?.filter((p) => p._id.age == "68")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale70 = arrFemales
    ?.filter((p) => p._id.age == "69")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale70 = arrMales
    ?.filter((p) => p._id.age == "69")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale71 = arrFemales
    ?.filter((p) => p._id.age == "70")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale71 = arrMales
    ?.filter((p) => p._id.age == "70")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale72 = arrFemales
    ?.filter((p) => p._id.age == "71")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale72 = arrMales
    ?.filter((p) => p._id.age == "71")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale73 = arrFemales
    ?.filter((p) => p._id.age == "72")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale73 = arrMales
    ?.filter((p) => p._id.age == "72")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale74 = arrFemales
    ?.filter((p) => p._id.age == "73")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale74 = arrMales
    ?.filter((p) => p._id.age == "73")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale75 = arrFemales
    ?.filter((p) => p._id.age == "74")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale75 = arrMales
    ?.filter((p) => p._id.age == "74")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale76 = arrFemales
    ?.filter((p) => p._id.age == "+75")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale76 = arrMales
    ?.filter((p) => p._id.age == "+75")
    .reduce((acc, val) => acc + val.pre, 0);
  let arr1 = [
    (totalMale1 +
      totalMale2 +
      totalMale3 +
      totalMale4 +
      totalMale5 +
      totalMale6 +
      totalMale7 +
      totalMale8 +
      totalMale9 +
      totalMale10) *
      ind,
    (totalMale11 +
      totalMale12 +
      totalMale13 +
      totalMale14 +
      totalMale15 +
      totalMale16 +
      totalMale17 +
      totalMale18 +
      totalMale19 +
      totalMale20) *
      ind,
    (totalMale21 +
      totalMale22 +
      totalMale23 +
      totalMale24 +
      totalMale25 +
      totalMale26 +
      totalMale27 +
      totalMale28 +
      totalMale29 +
      totalMale30) *
      ind,
    (totalMale31 +
      totalMale32 +
      totalMale33 +
      totalMale34 +
      totalMale35 +
      totalMale36 +
      totalMale37 +
      totalMale38 +
      totalMale39 +
      totalMale40) *
      ind,
    (totalMale41 +
      totalMale42 +
      totalMale43 +
      totalMale44 +
      totalMale45 +
      totalMale46 +
      totalMale47 +
      totalMale48 +
      totalMale49) *
      ind,
    (totalMale51 +
      totalMale52 +
      totalMale53 +
      totalMale54 +
      totalMale55 +
      totalMale56 +
      totalMale57 +
      totalMale58 +
      totalMale59 +
      totalMale60) *
      ind,
    (totalMale61 +
      totalMale62 +
      totalMale63 +
      totalMale64 +
      totalMale65 +
      totalMale66 +
      totalMale67 +
      totalMale68 +
      totalMale69 +
      totalMale70) *
      ind,
    (totalMale71 +
      totalMale72 +
      totalMale73 +
      totalMale74 +
      totalMale75 +
      totalMale76) *
      ind,
  ];
  let arr2 = [
    (totalFemale1 +
      totalFemale2 +
      totalFemale3 +
      totalFemale4 +
      totalFemale5 +
      totalFemale6 +
      totalFemale7 +
      totalFemale8 +
      totalFemale9 +
      totalFemale10) *
      ind,
    (totalFemale11 +
      totalFemale12 +
      totalFemale13 +
      totalFemale14 +
      totalFemale15 +
      totalFemale16 +
      totalFemale17 +
      totalFemale18 +
      totalFemale19 +
      totalFemale20) *
      ind,
    (totalFemale21 +
      totalFemale22 +
      totalFemale23 +
      totalFemale24 +
      totalFemale25 +
      totalFemale26 +
      totalFemale27 +
      totalFemale28 +
      totalFemale29 +
      totalFemale30) *
      ind,
    (totalFemale31 +
      totalFemale32 +
      totalFemale33 +
      totalFemale34 +
      totalFemale35 +
      totalFemale36 +
      totalFemale37 +
      totalFemale38 +
      totalFemale39 +
      totalFemale40) *
      ind,
    (totalFemale41 +
      totalFemale42 +
      totalFemale43 +
      totalFemale44 +
      totalFemale45 +
      totalFemale46 +
      totalFemale47 +
      totalFemale48 +
      totalFemale49) *
      ind,
    (totalFemale51 +
      totalFemale52 +
      totalFemale53 +
      totalFemale54 +
      totalFemale55 +
      totalFemale56 +
      totalFemale57 +
      totalFemale58 +
      totalFemale59 +
      totalFemale60) *
      ind,
    (totalFemale61 +
      totalFemale62 +
      totalFemale63 +
      totalFemale64 +
      totalFemale65 +
      totalFemale66 +
      totalFemale67 +
      totalFemale68 +
      totalFemale69 +
      totalFemale70) *
      ind,
    (totalFemale71 +
      totalFemale72 +
      totalFemale73 +
      totalFemale74 +
      totalFemale75 +
      totalFemale76) *
      ind,
  ];
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
        text: "Total Populations",
      },
    },
    responsive: true,
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
