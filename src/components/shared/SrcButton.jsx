import React from "react";

export default function SrcButton({ src }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noreferrer "
      className="bg-[#6f76e7] inline-block rounded px-4 py-2 font-bold text-xl cursor-pointer my-4"
    >
      Source
    </a>
  );
}
