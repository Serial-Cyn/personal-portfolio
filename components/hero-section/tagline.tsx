import { Zain } from "next/font/google";

const zain = Zain({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function Tagline() {

  return (
    <div
      id="tagline"
      className={`${zain.className} w-2xs sm:w-lg md:w-4/5 lg:w-3/5 lg:min-w-sm max-w-lg md:max-w-xl 2xl:max-w-3xl px-1 sm:px-0 lg:px-2 h-auto flex flex-col justify-center items-center pointer-events-none`}
    >
      <div className="w-full text-5xl sm:text-8xl 2xl:text-9xl font-bold">
        <div className="flex justify-between items-center leading-8 sm:leading-16">
          <h1>FUN</h1>
          <h1>IS</h1>
          <h1>MY</h1>
        </div>
        <div className="flex justify-center items-center tracking-tight">
          <h1>FRAMEWORK</h1>
        </div>
      </div>

      <div className="w-full text-3xl sm:text-5xl 2xl:text-6xl font-light">
        <div className="flex justify-between items-center leading-8">
          <h2>TO</h2>
          <h2>TURN</h2>
          <h2>IDEAS</h2>
          <h2>INTO</h2>
        </div>
        <div className="md:flex justify-between items-center text-sky-400">
          <h2>MEANINGFUL</h2>
          <h2 className="w-full md:w-auto text-right md:text-left">EXPERIENCE</h2>
        </div>
      </div>
    </div>
  );
}
