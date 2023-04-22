import { motion } from "framer-motion";

function MainPageLink({ link, label }) {
  return (
    <a
      className="text-white font-bold uppercase bg-[#9C3B72] w-36 py-2 rounded hover:-translate-y-1 transition duration-100"
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}

export default function Home() {
  return (
    <section className="bg-[#e86fb3] text-center h-screen overflow-hidden flex flex-col justify-center p-8">
      <div className="">
        <div className="font-bold justify-center uppercase text-5xl font-poppins flex items-end gap-4">
          <motion.p
            animate={{
              y: [-200, 0],
              color: [
                "#000",
                "#000",
                "#000",
                "#000",
                "#000",
                "rgba(0, 0, 0, 0)",
              ],
            }}
            transition={{
              duration: 1.5,
            }}
            className="text-6xl animate-text bg-gradient-to-r from-green-400 to-purple-600 bg-clip-text text-transparent"
          >
            100 Days{" "}
          </motion.p>
          <motion.p
            className="animate-text bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent"
            animate={{
              // x: [-500, 0],
              color: ["#000", "#000", "rgba(0, 0, 0, 0)"],
            }}
            transition={{ duration: 3 }}
          >
            CSS Challange
          </motion.p>
        </div>
        <motion.div
          animate={{ opacity: [0, 0, 1] }}
          initial={{ opacity: 0 }}
          transition={{ duration: 4 }}
        >
          <h2 className="text-2xl text-gray-800 mt-8 tracking-tight">
            Site dedicado à acompanhar meu progresso em design e CSS seguindo o
            desafio do 100daysCSS e DailyUI
          </h2>
          <div className="flex gap-4 justify-center mt-4">
            <MainPageLink
              link={"https://100dayscss.com/"}
              label={"100dayscss"}
            />
            <MainPageLink link={"https://www.dailyui.co"} label={"Daily UI"} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
