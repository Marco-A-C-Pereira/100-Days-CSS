import React from "react";
import visaLogo from "./assets/visaLogo.png";
import cardChip from "./assets/cardChip.png";
import cardTexture from "./assets/cardTexture.jpg";
import abstractPattern from "./assets/abstractPattern.png";

// maincolor #9FE053

function Navbar() {
  const activeStep = "border-b-2 border-b-[#9FE053]";
  const inactiveStep = "border-b-2 border-b-[#CFE0BA]";

  return (
    <section className="flex gap-12 bg-neutral-100 z-10">
      <h2 className="text-3xl text-[#9FE053] font-bold">Fumopay</h2>
      <ul className="flex items-end justify-around w-2/3">
        <li className={`leading-none  p-1 text-lg ${inactiveStep} `}>Cart</li>
        <li className={`leading-none  p-1 text-lg ${inactiveStep} `}>
          Shipping Info
        </li>
        <li className={`leading-none p-1  text-lg ${activeStep}`}>
          Payment Details
        </li>
      </ul>
    </section>
  );
}

function CreditCard() {
  return (
    <div className="bg-[#9FE053] h-44 w-72 rounded-2xl drop-shadow-md p-4 scale-125 relative">
      <img
        src={cardTexture}
        className="opacity-10 h-full w-full absolute top-0 left-0"
      />
      <img src={visaLogo} className="h-8 ml-auto" />
      <img src={cardChip} className="h-10" />
      <p className="font-Contrail-One text-2xl tracking-widest">
        4024 0071 6052 9318
      </p>
      <div className="flex gap-4">
        <div className="flex flex-col font-Contrail-One">
          <p className="text-xs tracking-tighter">CARD HOLDER</p>
          <p className="text-xl">JHON DOE</p>
        </div>
        <div className="flex flex-col font-Contrail-One">
          <p className="text-xs tracking-tighter">EXPIRES</p>
          <p className="text-xl">12/03</p>
        </div>
        <div className="flex flex-col font-Contrail-One">
          <p className="text-xs tracking-tighter">CVC</p>
          <p className="text-xl">235</p>
        </div>
      </div>
    </div>
  );
}

function Field({ label }) {
  return (
    <>
      <label className="border-b-2 border-b-[#9FE053]">
        <p className="uppercase text-sm font-thin"> {label} </p>
        <input className="w-full h-8 ml-4 font-bold" type="text" />
      </label>
    </>
  );
}

export default function CreditCardCheckout() {
  return (
    <article className="bg-neutral-100 font-Roboto-Condensed p-8 m-16 rounded-lg overflow-hidden ">
      <Navbar />

      <section className="flex mt-12 justify-around items-center ">
        <CreditCard />
        <div className="z-10">
          <h2 className="text-center text-2xl mb-8">Payment Details</h2>
          <form className="flex flex-col gap-4">
            <Field label={"cardholder name"} />
            <Field label={"card number"} />
            <div className="flex gap-2">
              <Field label={"Expire Date"} />
              <Field label={"CVC"} />
            </div>
          </form>
          <div className="mt-8 flex flex-col items-center font-bold">
            <h3 className="text-center text-2xl">
              Payment total: <span className="text-[#9FE053]">$9 999</span>
            </h3>
            <button className="px-4 mt-4 py-2 bg-[#9FE053] rounded-full w-2/3">
              Pay
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
