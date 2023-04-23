import React from "react";
import NavButtons from "./NavButtons";

export default function Frame({ children }) {
  return (
    <div className="flex justify-center items-stretch mt-20">
      <NavButtons>
        <section className="  w-9/12 bg-white relative border-4 border-[#6f76e7] flex-col flex items-center">
          {children}
        </section>
      </NavButtons>
    </div>
  );
}
