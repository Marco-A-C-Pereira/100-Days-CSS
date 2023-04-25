import React, { Children } from "react";
import Cirno from "./assets/Cirno.png";
import FumoForm from "./components/FumoForm";

function NavItem({ children }) {
  return (
    <p className="text-cyan-400 hover:text-cyan-200 cursor-pointer text-xl font-bold">
      {children}
    </p>
  );
}

function FumoNav() {
  return (
    <div className="bg-blue-800 p-2 flex drop-shadow">
      <img
        className="h-20"
        src="\src\components\DailyUI\Day -1\assets\cirno.png"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-white text-4xl font-Space-Grotesk tracking-wide ">
          FumoShop<span className="text-yellow-400">$</span>
        </h2>
        <div className="flex gap-4 items-center">
          <NavItem>Home</NavItem>
          <NavItem>Offers</NavItem>
          <NavItem>Forum</NavItem>
          <NavItem>Profile</NavItem>
        </div>
      </div>
    </div>
  );
}

function FormSection({ children }) {
  return (
    <h4 className="text-blue-100 text-xl font-poppins self-center">
      {children}
    </h4>
  );
}

export default function SignUp() {
  return (
    <article className=" w-[90%] m-auto mt-10 rounded-xl overflow-hidden">
      <FumoNav> Here is the nav </FumoNav>
      <div className="bg-sky-400 p-4 flex flex-col items-center">
        <h2 className="text-2xl text-violet-800 font-semibold font-poppins uppercase">
          Sign up for a free fumo you could earn one of These:
        </h2>
        <div className="flex text-center">
          <div>
            <form className=" p-8">
              <div className="flex flex-col items-stretch gap-4">
                <FormSection> Account Details </FormSection>
                <FumoForm label={"* Username"} />
                <FumoForm type={"password"} label={"* Password"} />
                <FumoForm type={"password"} label={"* Reconfirm Password"} />
                <FumoForm label={"* E-mail"} />
              </div>
              <div className="flex flex-col items-stretch gap-4 mt-4">
                <FormSection> Card Information </FormSection>
                <FumoForm label={"* Info"} />
                <div className="flex gap-4">
                  <FumoForm label={"* CVC"} />
                  <FumoForm label={"* MM / YY"} />
                </div>
              </div>
            </form>
          </div>
          <img
            className="h-80 m-auto"
            src="\src\components\DailyUI\Day -1\assets\miku.png"
          />
        </div>
        <button className="px-4 py-2 font-bold text-white w-44 bg-violet-700 rounded-full">
          {" "}
          Submit{" "}
        </button>
      </div>
    </article>
  );
}
