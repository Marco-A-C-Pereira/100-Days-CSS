import React from "react";
import logo from "./assets/logo.png";
import mainProduct from "./assets/MainProduct.png";

// Maincolor #EA0954

function Navbar() {
  return (
    <section className="text-[#EA0954] flex gap-8">
      <div className="flex flex-col font-bold text-2xl uppercase tracking-wide items-center">
        <img src={logo} className="h-12" />
        <p>Simple Products</p>
      </div>
      <ul className="text-2xl w-3/5 flex gap-6 items-end justify-around border-b-[#EA0954] border-b">
        <li className="mb-1">Home</li>
        <li className="mb-1">Catalog</li>
        <li className="mb-1">About us</li>
      </ul>
    </section>
  );
}

function Hero() {
  return (
    <section className="w-full flex px-4">
      <div className="w-4/5 flex flex-col justify-center">
        <h1 className="text-5xl uppercase tracking-tight">
          The Only Shoe You Will Ever Need
        </h1>
        <h2 className="text-xl text-neutral-800 tracking-tighter leading-none text-justify mt-2">
          This single shoe is changing a whole lot of peoples lives by giving
          Then the power of confidence and allowing them to live practically a
          new way of life.
        </h2>

        <div className="flex mt-6 gap-2 ">
          <button className="bg-[#EA0954] rounded-full w-20 h-12 text-lg font-Space uppercase">
            Buy
          </button>
          <h3 className="w-4/5 text-neutral-800">
            A single shoe and join other{" "}
            <span className="text-[#EA0954] font-bold">444</span> indiviuals on
            their life improving experience{" "}
          </h3>
        </div>
      </div>

      <div className="w-full">
        <div className="border p-16">
          <img className="w-full" src={mainProduct} />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section
      className="bg-black font-Contrail-One mt-8 p-10 text-white 
  [&>div]:w-2/5 [&>div>p]:ml-2 [&>div>h3]:tracking-wider [&>div>h3]:text-[#EA0954] [&>*:nth-child(odd)]:ml-auto"
    >
      <div>
        <h3 className="text-4xl">State of the art confort</h3>
        <p className="text-xl mt-2">
          We designed this experience with the uttermost comfort in mind so you
          don&apos;t have to worry about your other feet, it&apos;s magic ! Well
          ... it is literally a magic shoe, so yes it&apos;s magic !.
        </p>
      </div>

      <div>
        <h3 className="text-4xl">Eco Friendly</h3>
        <p className="text-xl mt-2">
          100% of the materials are sourced from ethical sources and are made to
          be renewable and recyclable so you can use the best shoe without a
          hint of guilt, you are helping the environment by getting one.
        </p>
      </div>

      <div>
        <h3 className="text-4xl">Confidence</h3>
        <p className="text-xl mt-2">
          People will know instantly that you have astronomical levels of
          confidence just by using our product in public, since nobody will even
          think to question why are you using just one shoe of a pair, think of
          the gains that you can make from that perceived confidence.
        </p>
      </div>

      <div>
        <h3 className="text-4xl">It exists</h3>
        <p className="text-xl mt-2">
          Yep, that&apos;s the point this product exists and just that fact is
          noteworthy, it&apos;s not easy to convince a board of white collars to
          fund a magical red shoe trust me we have been trying for years just so
          you have your own.
        </p>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="bg-white w-full font-Space-Grotesk pt-8">
      <Navbar />
      <Hero />
      <Features />
    </main>
  );
}
