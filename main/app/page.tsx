import { Roboto } from "next/font/google";
import Button from "../components/button";
const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const text: string = "Browse Components";

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-screen">
      <div className="bg-img blur-3xl"></div>
      <div className="w-3/6 my-52 z-10">
        <h1 className={roboto.className + " text-6xl my-3 font-semibold"}>
          Production ready components
        </h1>
        <p className="w-4/6 text-lg tracking-wide mt-7 opacity-85">
          {" "}
          Beautifully designed, expertly crafted components and templates, built
          by the makers of Tailwind CSS. The perfect starting point for your
          next project.
        </p>
        <Button buttonText={text}></Button>
      </div>
    </div>
  );
}
