import React from "react";

export default function SectionTitle({ children, className }) {
  return (
    <h2
      className={`text-center text-white text-2xl uppercase mb-4 ${className}`}
    >
      {children}
    </h2>
  );
}
