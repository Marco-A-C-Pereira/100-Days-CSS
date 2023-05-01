import React from "react";
import Frame from "../../shared/Frame";
import SectionTitle from "../../shared/SectionTitle";
import SrcButton from "../../shared/SrcButton";
import { motion } from "framer-motion";

function Circle({ initialPosition, endPosition }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
      <motion.div
        initial={{ rotateZ: 90 }}
        animate={{ rotateZ: 0 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
      >
        <motion.div
          initial={{ rotateY: 180 }}
          animate={{ rotateY: -180 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
        >
          <div className="h-80 w-80 border border-black rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Sphere() {
  const RINGS = 1;

  const RingSphere = Array.from({ length: RINGS }, (_, index) => {
    const ANGLEINTERVAL = 360 / RINGS;

    console.log(ANGLEINTERVAL);

    const initialPosition = index * ANGLEINTERVAL;
    const endPosition = initialPosition + initialPosition;

    // console.log(initialPosition, endPosition);

    return (
      <Circle
        key={index}
        initialPosition={initialPosition}
        endPosition={endPosition}
      />
    );
  });

  return RingSphere;
}

export default function Rings() {
  return (
    <Frame>
      <SectionTitle> Rings </SectionTitle>
      <article className="h-96 w-96 bg-amber-200 relative">
        <Sphere />
      </article>
      <SrcButton src="https://100dayscss.com/days/72/" />
    </Frame>
  );
}
