import { Roboto } from "next/font/google";
import Button from "../components/button";
import Card from "../components/card";
const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const text: string = "Explore Components";

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-screen">
      <div className="bg-img blur-3xl"></div>
      <div className="w-5/6 my-52 z-10">
        <div className="flex justify-between w-full">
          <div className="flex gap-4 flex-col w-3/6">
            <h1 className={roboto.className + " text-6xl font-semibold"}>
              Production ready components
            </h1>
            <p className="w-5/6 text-lg tracking-wide opacity-85">
              {" "}
              Beautifully designed, expertly crafted components and templates,
              built by the makers of Tailwind CSS. The perfect starting point
              for your next project.
            </p>
          </div>

          <Card />
        </div>

        <Button buttonText={text}></Button>
      </div>
    </div>
  );
}
