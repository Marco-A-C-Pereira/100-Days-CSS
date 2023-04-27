import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PriceTable from "./components/100Days/Day-1/PriceTable";
import Navbar from "./components/shared/Navbar";
import Hdayscss from "./pages/Hdayscss";
import InfiniteCircle from "./components/100Days/Day-2/InfiniteCircle";
import HoverButon from "./components/100Days/Day-3/HoverButon";
import SpinningElipses from "./components/100Days/Day-4/SpinningElipses";
import SignUp from "./components/DailyUI/Day-1/SignUp";
import SparkleCheckbox from "./components/100Days/Day-5/SparkleCheckbox";
import CreditCardCheckout from "./components/DailyUI/Day-2/CreditCardCheckout";
import RotatingParasol from "./components/100Days/Day-6/RotatingParasol";
import LandingPage from "./components/DailyUI/Day-3/LandingPage";
import Recording from "./components/100Days/Day-7/Recording";
import Calculator from "./components/DailyUI/Day-4/Calculator";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="100DaysCSS">
          <Route index element={<Hdayscss />} />
          <Route path="1" element={<PriceTable />} />
          <Route path="2" element={<InfiniteCircle />} />
          <Route path="3" element={<HoverButon />} />
          <Route path="4" element={<SpinningElipses />} />
          <Route path="5" element={<SparkleCheckbox />} />
          <Route path="6" element={<RotatingParasol />} />
          <Route path="7" element={<Recording />} />
        </Route>
        <Route path="/DailyUI">
          <Route path="1" element={<SignUp />} />
          <Route path="2" element={<CreditCardCheckout />} />
          <Route path="3" element={<LandingPage />} />
          <Route path="4" element={<Calculator />} />
        </Route>
        <Route path="/Progress" />
      </Routes>
    </>
  );
}
