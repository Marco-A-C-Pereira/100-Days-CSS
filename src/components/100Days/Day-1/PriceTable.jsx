import React, { useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Frame from "../../shared/Frame";

const cardData = [
  { id: 1, plan: "Basic", price: 5, Users: 5, GB: 20, Projects: 1 },
  { id: 2, plan: "Pro", price: 10, Users: 25, GB: 150, Projects: 25 },
  { id: 3, plan: "Premium", price: 20, Users: 100, GB: 200, Projects: 50 },
];

function LineText() {
  return (
    <div className="border border-gray-300 odd:w-4/6 even:w-3/6 rounded" />
  );
}

function PricingCard({ props, handleHover }) {
  const { price, plan } = props;
  return (
    <article
      onMouseEnter={() => handleHover(props)}
      onMouseLeave={() => handleHover(null)}
      className="group flex-col flex items-center w-28 text-center rounded-sm overflow-hidden shadow cursor-pointer trasitionn ease-in-out duration-200 hover:transform hover:scale-125"
    >
      <h3 className="bg-blue-300 group-hover:bg-blue-500 trasition duration-300 text-white font-bold w-full">
        {plan}
      </h3>
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

function PricingBar({ fieldName, currentValue, maxValue, minValue }) {
  const [barPercentage, setbarPercentage] = useState(
    (100 * currentValue) / maxValue
  );

  useEffect(() => {
    setbarPercentage((100 * currentValue) / maxValue);
  }, [currentValue, maxValue]);

  return (
    <div className="flex flex-col w-80 p-4 mx-auto items-center">
      <div className="justify-between flex w-full text-sm font-thin text-gray-500">
        <p>
          {minValue} {/* Gambiarra */}
          {fieldName === "Projects" && minValue === 1 ? "Project" : fieldName}
        </p>
        <p>
          {maxValue} {fieldName}
        </p>
      </div>
      <div className="w-full bg-blue-100 h-4 rounded-full overflow-hidden">
        <motion.div
          animate={{
            width: `${barPercentage}%`,
            minWidth: `${currentValue !== 0 ? "10%" : "0%"}`,
          }}
          className="bg-blue-300 w-1/12 h-4 "
        ></motion.div>
      </div>
    </div>
  );
}

function PriceBarList({ CurrentCard }) {
  const METRICS = ["Users", "GB", `Projects`];
  const fieldInfo = METRICS.map((field) => {
    return { [field]: cardData.map((singleData) => singleData[field]) };
  });

  return (
    <section className="bg-white shadow w-full rounded">
      {fieldInfo.map((field) => {
        const [name, values] = Object.entries(field).flat();

        return (
          <PricingBar
            key={name}
            currentValue={CurrentCard ? CurrentCard[name] : 0}
            fieldName={name}
            maxValue={Math.max(...values)}
            minValue={Math.min(...values)}
          />
        );
      })}
    </section>
  );
}

export default function PriceTable() {
  const [CurrentCard, setCurrentCard] = useState(null);

  return (
    <Frame>
      <SectionTitle> Price Table </SectionTitle>
      <section className="flex flex-col items-center w-fit p-16 mx-auto bg-blue-100">
        <div className="pb-8 flex gap-4">
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
        <PriceBarList CurrentCard={CurrentCard} />
      </section>
      <SectionTitle> 20/4 - 21/4 </SectionTitle>
    </Frame>
  );
}
