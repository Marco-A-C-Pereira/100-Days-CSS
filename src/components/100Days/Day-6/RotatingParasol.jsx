import React from "react";
import Frame from "../../shared/Frame";
import SectionTitle from "../../shared/SectionTitle";
import SrcButton from "../../shared/SrcButton";
import { motion } from "framer-motion";

export default function RotatingParasol() {
  return (
    <Frame>
      <SectionTitle>Rotatin Parasol</SectionTitle>
      <article className="h-52 w-52 bg-slate-500 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotateZ: -10 }}
              className="rounded-full w-1 h-32 border-4 "
            ></motion.div>
          </motion.div>

          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotateX: 80, rotateY: -10 }}
              className="rounded-full w-40 h-40 border-8 border-red-500 bg-yellow-200 "
            >
              <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{}}
                  className="bg-red-500 h-20 w-20"
                ></motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </article>
      <SrcButton src={"https://100dayscss.com/days/67/"}></SrcButton>
    </Frame>
  );
}
