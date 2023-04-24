import React from "react";
import Frame from "../../shared/Frame";
import SectionTitle from "../../shared/SectionTitle";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import SrcButton from "../../shared/SrcButton";

function Ring() {
  return (
    <motion.div
      initial={{ transformOrigin: "center", translateX: 0, translateY: 0 }}
      animate={{
        scale: [0, 7],
        translateX: [0, -200, 0],
        translateY: [0, -200, 0],
      }}
      transition={{ repeat: Infinity, duration: 5 }}
      className="border-dotted border border-green-700 h-20 w-20 rounded-full absolute top-[50%] left-[50%] "
    ></motion.div>
  );
}

export default function InfiniteCircle() {
  const [rings, setRings] = useState([]);
  const TOTALCIRCLES = 25;
  const RINGCOUNTER = useRef(0);
  const CIRCLEDELAY = 200;

  useEffect(() => {
    if (RINGCOUNTER.current < TOTALCIRCLES) {
      setTimeout(() => {
        setRings((prevRings) => [prevRings, <Ring key={prevRings.length} />]);
        RINGCOUNTER.current = RINGCOUNTER.current + 1;
      }, CIRCLEDELAY);
    }
  }, [rings]);

  return (
    <Frame>
      <SectionTitle>
        <p className="leading-snug font-sans font-bold">(21/4/23 - 22/4/23)</p>
        Infinite Circles:{" "}
      </SectionTitle>
      <article className="h-80 bg-black w-80 relative overflow-hidden">
        {rings}
      </article>
      <SrcButton src={"https://100dayscss.com/days/63/"} />
    </Frame>
  );
}
