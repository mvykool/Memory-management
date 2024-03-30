import React from "react";

interface CustomButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: CustomButtonProps): JSX.Element => {
  return (
    <button className="my-7 bg-neon-purple px-5 py-2 rounded-sm w-[15rem] text-center hover:bg-pink-700">
      {buttonText}
    </button>
  );
};

export default Button;
