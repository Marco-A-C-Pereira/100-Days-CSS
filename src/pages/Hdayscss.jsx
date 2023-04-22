import React from "react";
import ShowcaseItem from "../components/shared/ShowcaseItem";

export default function Hdayscss() {
  return (
    <main className="inline-flex flex-col items-center text-center w-full mt-16">
      <h1 className="text-7xl font-bold font-poppins">100 Days CSS</h1>
      <section className="w-11/12">
        <p className="text-5xl mt-8 font-bold font-poppins mb-4">
          Lista de desafios:
        </p>
        <div className="border-4 border-[#6f76e7] p-4 bg-white flex flex-wrap gap-4 justify-around">
          <ShowcaseItem url="1" isCompleted={true}>
            Dia 1: Pricetable
          </ShowcaseItem>
        </div>
      </section>
    </main>
  );
}
