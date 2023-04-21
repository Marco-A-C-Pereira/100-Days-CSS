import React, { useState } from "react";
import SectionTitle from "../../shared/SectionTitle";

const cardData = [
  { id: 1, price: 5, Users: 5, Storage: 20, Projects: 1 },
  { id: 2, price: 10, Users: 25, Storage: 150, Projects: 25 },
  { id: 3, price: 20, Users: 100, Storage: 200, Projects: 50 },
];

function LineText() {
  return (
    <div className="border border-gray-300 odd:w-4/6 even:w-3/6 rounded" />
  );
}

function PricingCard({ props, handleHover }) {
  const { price } = props;
  return (
    <article
      onMouseEnter={() => handleHover(props)}
      onMouseLeave={() => handleHover(null)}
      className="flex-col flex items-center w-28 text-center rounded-sm overflow-hidden shadow cursor-pointer"
    >
      <h3 className="bg-blue-300 text-white font-bold w-full">Basic</h3>
      <div className="bg-white w-full py-4">
        <div className="leading-none">
          <p className="font-bold text-gray-600 text-3xl leading-none">
            {price}$
          </p>
          <p className=" text-gray-500 text-sm font-thin">per month</p>
        </div>
        <div className="flex flex-col items-center gap-2 mt-4">
          <LineText />
          <LineText />
          <LineText />
          <LineText />
        </div>
      </div>
    </article>
  );
}

function PricingBar() {
  return (
    <div className="flex flex-col w-80 p-4 items-center">
      <div className="justify-between flex w-full text-sm font-thin text-gray-500">
        <p>5 Users</p>
        <p>100 Users</p>
      </div>
      <div className="w-full bg-blue-100 h-4 rounded-full">
        <div className="bg-blue-300 h-4 w-11/12 rounded-full"></div>
      </div>
    </div>
  );
}

function PriceBarList() {
  const METRICS = ["Users", "Storage", `Projects`];
  // Preciso Iterar o dataArr, pegar o valor e as keys do que é
  // correspondente a metrics e passaar o maior valor e o menor valor para o parametro ali

  Object.entries(cardData).forEach(([key, value]) => {
    console.log(key, value.price);
  });

  return (
    <section className="bg-white shadow rounded">
      <PricingBar />
      <PricingBar />
      <PricingBar />
    </section>
  );
}

export default function PriceTable() {
  const [CurrentCard, setCurrentCard] = useState(null);

  return (
    <>
      <SectionTitle> Price Table </SectionTitle>
      <section className="flex flex-col items-center bg-blue-100">
        <div className="py-8 flex gap-4">
          {cardData.map((card) => {
            return (
              <PricingCard
                key={card.id}
                props={card}
                handleHover={setCurrentCard}
              />
            );
          })}
        </div>
        <PriceBarList />
      </section>
    </>
  );
}
