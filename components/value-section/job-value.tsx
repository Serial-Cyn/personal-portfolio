import Motion from "../ui/motion";

export default function JobValue() {
  return (
    <section
      id="about"
      className="min-w-full min-h-screen flex justify-center items-center px-6 text-4xl sm:text-5xl md:text-6xl leading-normal"
    >
      <Motion>
        <h1>
          I design and develop intuitive software solutions that{" "}
          <span className="font-bold text-sky-400">connect</span> with users and
          deliver{" "}
          <span className="font-bold text-sky-400">
            meaningful experiences.
          </span>
        </h1>
        <p className="mt-4 pr-16 text-base sm:text-xl italic text-zinc-400">
          *I made this portfolio during my 3rd year college!
        </p>
      </Motion>
    </section>
  );
}
