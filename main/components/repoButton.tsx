import React from "react";

const RepoButton = (): JSX.Element => {
  return (
    <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neon-purple hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-neon-purple relative bg-transparent  w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-teal-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
      <a href="https://github.com/mvykool">Souce Code</a>
    </button>
  );
};

export default RepoButton;
