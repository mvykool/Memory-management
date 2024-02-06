import React from "react";

export default function LandingButton(): JSX.Element {
  return (
    <>
      <div className="flex gap-3">
        <button className="bg-teal-500 hover:bg-teal-700 font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          Click me!
        </button>
        <button className="bg-violet-500 hover:bg-violet-700 font-bold py-2 px-4 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
          Keep holding
        </button>
      </div>
    </>
  );
}
