import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./component/features/Header";
import Footer from "./component/features/Footer";
import Population from "./pages/population/Population";
import Age from "./pages/ages/Age";
import PopulationMiddleYear from "./pages/population/PopulationMiddleYear";
import Quali from "./pages/quali/Quali";
import Housing from "./pages/housing/Housing";
import Status from "./pages/status-marrid/Status";
import Family from "./pages/family/Family";
import Total from "./pages/edu/Total";
import Grade from "./pages/grade/Grade";
import ReasonDrop from "./pages/edu/ReasonDrop";
import EduAge from "./pages/edu/Edu";
import Primary from "./component/edu/Primary";
import Secondary from "./component/edu/Secondary";
import High from "./component/edu/High";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/population" element={<Population />} />
        <Route path="/ages" element={<Age />} />
        <Route path="/pop-middle-year" element={<PopulationMiddleYear />} />
        <Route path="/qualifications" element={<Quali />} />
        <Route path="/house" element={<Housing />} />
        <Route path="/status" element={<Status />} />
        <Route path="/family" element={<Family />} />
        <Route path="/total" element={<Total />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/edu/dropout-cases" element={<ReasonDrop />} />
        <Route path="/edu/dropout" element={<EduAge />} />
        <Route path="/primary" element={<Primary />} />
        <Route path="/secondary" element={<Secondary />} />
        <Route path="/high" element={<High />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
