"use client";
import React from "react";
import { Roboto } from "next/font/google";
import RepoButton from "./repoButton";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const Navbar = (): JSX.Element => {
  return (
    <nav className="text-white flex pt-5 items-center justify-between container">
      <div>
        <h3 className={roboto.className + " text-3xl"}>
          <span className="bg-clip-text inline-block text-transparent bg-gradient-to-br from-rose-100 to-pink-500">
            UI
          </span>
          -kit
        </h3>
      </div>

      <ul className="flex gap-6 font-semibold items-center">
        <li>
          <a className="cursor-pointer">Components</a>
        </li>
        <li>
          <a className="cursor-pointer">Templates</a>
        </li>

        {/* git respo button */}
        <RepoButton></RepoButton>
      </ul>
    </nav>
  );
};

export default Navbar;
