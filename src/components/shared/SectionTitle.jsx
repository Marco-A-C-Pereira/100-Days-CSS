import React from "react";

export default function SectionTitle({ children, className }) {
  return (
    <h2
      className={`text-center font-bold font-poppins text-2xl uppercase py-4 ${className}`}
    >
      {children}
    </h2>
  );
}
