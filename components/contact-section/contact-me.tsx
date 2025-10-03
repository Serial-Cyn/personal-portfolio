import DisplaySocials from "./display-socials";

export default function ContactMe() {
  return (
    <section
      id="contact"
      className="w-screen px-6 h-screen mt-32 flex flex-col justify-center items-center"
    >
      <div className="h-3/5 flex flex-col justify-center items-center gap-4">
        <h2 className="text-lg sm:text-2xl md:text-4xl font-light">
          I work to delight, are you
        </h2>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold">
          INTERESTED?
        </h1>
      </div>

      <div className="w-full h-auto sm:h-2/5 flex justify-center flex-col sm:flex-row items-start">
        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-4/5 h-full mb-8 sm:mb-0 flex flex-col lg:flex-row justify-start lg:justify-between items-start">
          <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
            <h2 className="text-sm sm:text-lg text-zinc-400">
              Let's talk business!
            </h2>
            <a className="mt-2 text-base sm:text-xl" href="mailto:christianmamplata.neust@gmail.com">
              christianmamplata.neust@gmail.com
            </a>
          </div>
          <div className="w-full lg:w-2/5 mb-8 sm:mb-0">
            <h2 className="text-sm sm:text-lg text-zinc-400">
              Give me a call!
            </h2>
            <h1 className="mt-2 text-base sm:text-xl">(+63) 991 617 9584</h1>
          </div>
        </div>
        <div className="w-full sm:w-1/5 md:w-2/5 lg:w-1/5 h-full mb-8 sm:mb-0 flex flex-col">
          <h2 className="text-sm sm:text-lg text-zinc-400">
            Here are my socials
          </h2>
          <div className="h-full mt-2 flex flex-col gap-4">
            <DisplaySocials
              filename="/socials/github.svg"
              altText="GitHub"
              label="GitHub"
              href="https://github.com/Serial-Cyn"
            />
            <DisplaySocials
              filename="/socials/linkedin.svg"
              altText="LinkedIn"
              label="LinkedIn"
              href="https://www.linkedin.com/in/christian-mamplata/"
            />
            <DisplaySocials
              filename="/socials/twitter-x.svg"
              altText="Twitter"
              label="Twitter"
              href="https://x.com/chano_mamplata"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
