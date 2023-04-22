import React from "react";
import Frame from "../../shared/Frame";
import SectionTitle from "../../shared/SectionTitle";
import SrcButton from "../../shared/SrcButton";

export default function HoverButon() {
  return (
    <Frame>
      <SectionTitle>
        <p className="leading-snug font-sans font-bold">(22/4/23)</p>
        Hover Button
      </SectionTitle>
      <div className="text-center relative bg-[#c0aee7] h-56 w-56 rounded">
        <article className="cursor-pointer group">
          <div className="px-4 py-2 w-40 h-14 bg-[#f8f2ce] group-hover:bg-blue-500 absolute top-1/2 left-1/2 transition duration-500 transform -translate-x-[45%] -translate-y-[45%] group-hover:-translate-x-[55%] group-hover:-translate-y-[55%] "></div>
          <div className="px-4 py-2 w-40 h-14 flex bg-[#7888ec] text-[#f8f2ce] group-hover:bg-[#f8f2ce] group-hover:text-blue-500 items-center justify-center text-xl uppercase tracking-tight  absolute top-1/2 left-1/2 transition duration-500 transform -translate-x-[55%] -translate-y-[55%] group-hover:-translate-x-[45%] group-hover:-translate-y-[45%] ">
            <p>Hover me</p>
          </div>
        </article>
      </div>
      <SrcButton src={"https://100dayscss.com"} />
    </Frame>
  );
}
