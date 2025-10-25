import { Zain } from "next/font/google";

const zain = Zain({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function Tagline() {

  return (
    <div
      id="tagline"
      className={`${zain.className} w-2xs sm:w-md lg:min-w-sm lg:w-2/5 max-w-md 2xl:max-w-xl px-1 sm:px-0 h-auto flex flex-col justify-center items-center pointer-events-none`}
    >
      <div className="w-full text-6xl sm:text-8xl 2xl:text-9xl font-bold">
        <div className="flex justify-between items-center leading-8">
          <h1>FUN</h1>
          <h1>IS</h1>
          <h1>MY</h1>
        </div>
        <div className="flex justify-center items-center tracking-tight">
          <h1>FRAMEWORK</h1>
        </div>
      </div>

      <div className="w-full text-4xl sm:text-5xl 2xl:text-6xl font-light">
        <div className="flex justify-between items-center leading-8">
          <h2>TO</h2>
          <h2>TURN</h2>
          <h2>IDEAS</h2>
          <h2>INTO</h2>
        </div>
        <div className="sm:flex justify-between items-center text-sky-400">
          <h2>MEANINGFUL</h2>
          <h2 className="w-full sm:w-auto text-right sm:text-left">EXPERIENCE</h2>
        </div>
      </div>
    </div>
  );
}
