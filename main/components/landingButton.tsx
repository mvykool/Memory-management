import React from "react";

export default function LandingButton(): JSX.Element {
  return (
    <>
      <div className="flex gap-3">
        <button className="w-28 h-12 text-white font-semibold bg-teal-500 rounded-lg shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:cursor-pointer">
          Click me!
        </button>
        <button className="bg-violet-500 hover:bg-violet-700 font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          Keep holding
        </button>
      </div>
    </>
  );
}
