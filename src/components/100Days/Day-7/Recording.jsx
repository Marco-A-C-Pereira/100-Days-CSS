import React, { useState } from "react";
import Frame from "../../shared/Frame";
import SectionTitle from "../../shared/SectionTitle";
import SrcButton from "../../shared/SrcButton";

import {
  MicrophoneIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

export default function Recording() {
  const [IsRecording, setIsRecording] = useState(false);

  return (
    <Frame>
      <SectionTitle>Recording</SectionTitle>

      <section className="h-96 w-96 bg-teal-400 flex items-center justify-center ">
        <button
          onClick={() => setIsRecording((prevIsRecording) => !prevIsRecording)}
          className="relative h-40 w-40"
        >
          <AnimatePresence mode="wait">
            {IsRecording ? (
              <motion.div
                key={`${IsRecording}`}
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: 100, opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              >
                <EllipsisHorizontalIcon className="h-full text-red-600 " />
              </motion.div>
            ) : (
              <motion.div
                key={`${IsRecording}`}
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: 100, opacity: 1 }}
                exit={{ maxHeight: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              >
                <MicrophoneIcon className="h-full text-red-600 " />
              </motion.div>
            )}
          </AnimatePresence>

          <section className="h-full w-full relative">
            {IsRecording ? (
              <div className=" h-full w-full">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="h-full w-full border-4 border-transparent border-t-red-500 rounded-full"
                />
              </div>
            ) : (
              <div className=" h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="h-full w-full border-4 border-red-500 rounded-full"
                />
              </div>
            )}
          </section>
        </button>
      </section>
      <SrcButton src={"https://100dayscss.com/days/68/"} />
    </Frame>
  );
}
