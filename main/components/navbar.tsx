"use client";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const Navbar = (): JSX.Element => {
  return (
    <nav className="text-white flex py-4 justify-between container">
      <div>
        <h3 className={roboto.className + " text-3xl"}>
          <span className="bg-clip-text inline-block text-transparent bg-gradient-to-br from-rose-100 to-pink-500">
            UI
          </span>
          -kit
        </h3>
      </div>

      <ul className="flex gap-5">
        <li>
          <a>Components</a>
        </li>
        <li>
          <a>Templates</a>
        </li>
        <li>
          <a>Repository</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
