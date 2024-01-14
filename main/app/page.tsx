import { Roboto, Lato } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function Home(): JSX.Element {
  return (
    <div className="flex min-h-screen">
      <div className="w-3/6 my-52">
        <h1 className={roboto.className + " text-6xl my-3 font-semibold"}>
          Production ready components
        </h1>
        <p
          className={
            lato.className + " w-4/6 text-lg tracking-wide mt-7 opacity-85"
          }
        >
          {" "}
          Beautifully designed, expertly crafted components and templates, built
          by the makers of Tailwind CSS. The perfect starting point for your
          next project.
        </p>
        <button className="my-7 bg-pink-700 px-5 py-2 rounded-sm">
          Browse components
        </button>
      </div>
    </div>
  );
}
