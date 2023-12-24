import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ Text, className, onclick, type }) => {
  return (
    <button
      className={twMerge(
        "whitespace-nowrap rounded-full bg-orange_primary px-6 py-3 font-mont text-xs font-medium text-white md:text-lg",
        className,
      )}
      onClick={onclick}
      type={type}
    >
      {Text}
    </button>
  );
};

export default Button;
