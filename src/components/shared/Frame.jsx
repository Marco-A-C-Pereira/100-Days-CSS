import React from "react";

export default function Frame({ children }) {
  return (
    <article className="mx-auto mt-20 w-9/12 bg-white  border-4 border-[#6f76e7] ">
      {children}
    </article>
  );
}
