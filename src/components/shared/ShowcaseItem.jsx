import React from "react";
import { Link } from "react-router-dom";

export default function ShowcaseItem({ children, url, isCompleted }) {
  return (
    <Link className="group" to={url}>
      <article
        className={`${
          isCompleted ? "bg-[#6fe7a4]" : "bg-slate-500"
        } shadow-lg p-4 rounded-md group-hover:transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-xl transition duration-200 `}
      >
        <h3 className="group-hover:text-white group-hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]  font-bold">
          {children}
        </h3>
      </article>
    </Link>
  );
}
