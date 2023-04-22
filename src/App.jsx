import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PriceTable from "./components/100Days/Day-1/PriceTable";
import Navbar from "./components/shared/Navbar";
import Hdayscss from "./pages/Hdayscss";
import InfiniteCircle from "./components/100Days/Day-2/InfiniteCircle";
import HoverButon from "./components/100Days/Day-3/HoverButon";

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
        </Route>
        <Route path="/DailyUI"></Route>
        <Route path="/Progress" />
      </Routes>
    </>
  );
}
