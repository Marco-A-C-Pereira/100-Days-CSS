import React from "react";
import { useState } from "react";

export default function FumoForm({ handleInput, label, type }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="relative">
        <input
          type={`${type ? type : "text"}`}
          name={label}
          id="floating_filled"
          className="peer block w-full font-bold appearance-none border-0 border-b-4 border-violet-600 bg-blue-50 px-2.5 pb-2.5 pt-5 text-sm text-gray-900 focus:border-lime-500 focus:outline-none focus:ring-0"
          placeholder=" "
          onChange={(e) => {
            setInputValue(e.currentTarget.value);
            handleInput(e);
          }}
          value={inputValue}
        />
        <label
          htmlFor="floating_filled"
          className="absolute left-2.5 top-4 z-10 origin-[0] -translate-y-4 scale-75 transform text-sm text-violet-600 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-lime-500"
        >
          {label ? label : "Err: No label"}
        </label>
      </div>
    </>
  );
}
