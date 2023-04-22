import React from "react";
import NavButtons from "./NavButtons";

export default function Frame({ children }) {
  return (
    <article className="mx-auto mt-20 w-9/12 bg-white relative border-4 border-[#6f76e7] flex-col flex items-center">
      <NavButtons />
      {children}
    </article>
  );
}
