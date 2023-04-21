import React from "react";
import PriceTable from "./components/100Days/Day-62/PriceTable";

function MainTitle() {
  return (
    <div>
      <h1>100 Days CSS Challange</h1>
      <h2>
        Durante 100 dias pretendo pelo menos 1 vez ao dia completar 1 ou 2
        desafios
      </h2>
      <div>
        <h3>
          Caso tenha interesse em participar também estarei seguindo os
          desaafios do:
        </h3>
        <a href="https://100dayscss.com/about/">100dayscss</a>
        <a href="https://www.dailyui.co">Daily UI</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <MainTitle />
      <div>
        <PriceTable />
      </div>
    </main>
  );
}
