import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavItem({ path, children }) {
  const location = useLocation();

  return (
    <li>
      <NavLink
        className="text-white cursor-pointer [&.active]:text-[#6fe7a4] drop-shadow-lg hover:text-gray-300"
        to={path}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-[#6f76e7] p-2 drop-shadow z-10">
      <ul className="flex text-xl font-bold tracking-wide gap-6 uppercase ">
        <NavItem path={"/"}> Home</NavItem>
        <NavItem path={"/100DaysCSS"}> 100DaysCss</NavItem>
        <NavItem path={"/DailyUI"}> DailyUI</NavItem>
        <NavItem path={"/Progress"}> Progresso </NavItem>
      </ul>
    </nav>
  );
}
