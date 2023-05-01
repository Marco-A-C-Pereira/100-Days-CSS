import React from "react";
// import pfp from "./assets/Lainpfp.jpg";
// import * as images from "./assets/";
import { BellIcon, PencilIcon } from "@heroicons/react/24/outline";

const langauges = [
  "Lisp",
  "Brainfuck",
  "PHP",
  "Haskell",
  "Rust",
  "Peal",
  "Whitespace",
];

function Navbar() {
  return (
    <section className="bg-[#E8FA3B] uppercase flex items-center p-4 drop-shadow">
      <h1 className="text-2xl tracking-wide font-bold cursor-pointer">
        Coderate
      </h1>
      <ul className="flex font-semibold items-center gap-4 ml-8 cursor-pointer">
        <li>home</li>
        <li>Companies</li>
        <li>discover repos</li>
      </ul>
      <div className="flex ml-auto gap-8">
        <div className="relative">
          <p className="absolute bg-red-600 rounded-full text-xs h-4 w-4 font-bold right-0">
            10+
          </p>
          <BellIcon className=" h-8 w-8" />
        </div>
        <img className="h-8 w-8 rounded-full cursor-pointer" />
      </div>
    </section>
  );
}

function MainBanner() {
  function ProfileStat({ statLabel, statValue }) {
    return (
      <p className="text-3xl font-Roboto-Condensed tracking-widest">
        {statLabel}: <span className="text-3xl font-semibold">{statValue}</span>
      </p>
    );
  }

  return (
    <div className="flex rounded-xl shadow p-4">
      <div className="flex flex-col items-center gap-2 relative">
        <span className="border rounded-full border-black">
          <img
            src="../public/assets/lainpfp.jpg"
            className="rounded-full border-4 border-[#E8FA3B] "
          />
        </span>
        <h2 className="text-3xl font-bold tracking-wide">Lain Iwakura🖥</h2>
        <button className="bg-[#4d3afa] p-4 rounded-full text-white absolute bottom-10 right-5">
          <PencilIcon className="h-8 w-8" />
        </button>
      </div>

      <div className="flex flex-col gap-4 justify-center mx-8">
        <ProfileStat statLabel="Code Quality" statValue="S+" />
        <ProfileStat statLabel="Lines of code written" statValue="100k+" />
        <ProfileStat statLabel="First Post" statValue="Jan/1983" />
      </div>

      <div className="ml-auto"></div>
    </div>
  );
}

function LanguagesShowcase() {
  function Bullet({ children }) {
    return (
      <span className="px-4 py-2 self-stretch bg-[#4d3afa] text-white rounded-full ">
        {children}
      </span>
    );
  }

  return (
    <div className="w-1/5 py-2 px-8 max-w-xs">
      <h4 className="text-2xl text-center mb-4">Languages:</h4>
      <div className="flex flex-wrap gap-2 font-bold text-sm justify-between">
        {langauges.map((lang) => {
          return <Bullet key={lang}>{lang}</Bullet>;
        })}
      </div>
    </div>
  );
}

function ProjectsShowcase() {
  function ProjectCard({ imgSrc }) {
    return (
      <article className="bg-[#E8FA3B] rounded-xl overflow-hidden text-center px-2 max-w-sm shadow-lg flex items-center cursor-pointer">
        <div className="rounded-xl max-h-60 overflow-clip">
          <img src={imgSrc} className="object-cover" />
        </div>

        <div className="w-3/5 px-2">
          <p className="font-bold text-lg tracking-tight font-Flow-Circular">
            Card Name
          </p>
          <p className="text-sm font-Flow-Circular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            praesentium, officia voluptate ex nemo, harum atque, eos fuga natus
          </p>
        </div>
      </article>
    );
  }

  const CardList = Array.from({ length: 6 }, (_, index) => {
    return (
      <ProjectCard
        key={index}
        imgSrc={`../public/assets/GenericProject${index + 1}.png`}
      />
    );
  });

  return (
    <div className="w-4/5 border-4 border-[#4d3afa]  rounded-xl py-4">
      <h2 className="text-4xl text-center font-bold mb-4 uppercase">
        Projects:
      </h2>
      <div className="flex flex-wrap justify-around gap-8">{CardList}</div>
    </div>
  );
}

export default function UserProfile() {
  return (
    <main>
      <Navbar />
      <section className="bg-slate-50">
        <MainBanner />

        <div className="flex mt-6">
          <LanguagesShowcase />
          <ProjectsShowcase />
        </div>
      </section>
    </main>
  );
}
