import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PriceTable from "./components/100Days/Day-1/PriceTable";
import Navbar from "./components/shared/Navbar";
import Hdayscss from "./pages/Hdayscss";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="100DaysCSS">
          <Route index element={<Hdayscss />} />
          <Route path="1" element={<PriceTable />} />
        </Route>
        <Route path="/DailyUI"></Route>
        <Route path="/Progress" />
      </Routes>
    </>
  );
}
