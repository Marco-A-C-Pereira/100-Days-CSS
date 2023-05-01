import React from "react";
import Coffe from "./assets/coffe.png";

export default function Calculator() {
  return (
    <main className="overflow-hidden p-2">
      <section className="relative flex flex-col items-center font-Prompt text-[#FCE1CF] h-screen">
        <h1 className="text-3xl font-bold uppercase tracking-wide pt-4">
          Caffeine Calculator
        </h1>
        <img className="w-3/5 mt-6" src={Coffe} />

        <div className="my-10 flex flex-col gap-4">
          <h2 className="text-2xl tracking-tight">
            Caffeine contents:{" "}
            <span className="text-orange-400 ml-auto">360 Mg</span>
          </h2>
          <h2 className="text-2xl tracking-tight">
            Max caffeine/day: <span className="text-orange-400">160 Mg</span>
          </h2>
          <h2 className="text-2xl tracking-tight">
            Max unit/day: <span className="text-orange-400">2,25 U</span>
          </h2>
        </div>

        <form className="flex flex-col items-center w-4/6 gap-4 my-auto">
          <input
            className=" border-2 px-2 py-4 text-black rounded-md font-medium bg-[#FCE7DA] h-8 border-[#B5A194] "
            placeholder="Search a drink"
            type="text"
          />
          <input
            className=" border-2 px-2 py-4 text-black rounded-md font-medium bg-[#FCE7DA] h-8 border-[#B5A194] "
            placeholder="Your weight (Kg)"
            type="number"
          />

          <button className="p-3 uppercase bg-orange-400 rounded w-4/5">
            Calculate
          </button>
        </form>

        {/* not the best pratice */}
        <div className="absolute h-screen w-full bg-[#38322e] rounded-xl scale-125 rotate-[-2deg] -z-50"></div>
        <div className="absolute h-screen w-full bg-stone-900 rounded-xl rotate-[2deg] -z-50"></div>
        {/* not the best pratice */}
      </section>
    </main>
  );
}

// src https://www.teafolly.com/caffeine-calculator/#safezone
