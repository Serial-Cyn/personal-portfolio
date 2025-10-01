export default function JobValue() {
  const jobValueStyles = `
        @keyframes fadeInUp {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        #job-value h1 {
            animation: fadeInUp 1s ease-in-out;
        }
    `;

  return (
    <>
      <style>{jobValueStyles}</style>
      <section
        id="job-value"
        className="w-screen h-screen flex justify-center items-center px-6 text-4xl sm:text-5xl md:text-6xl leading-normal"
      >
        <h1>
          I <span className="font-bold text-sky-400">develop</span> and{" "}
          <span className="font-bold text-sky-400">design</span> user-friendly
          solutions with the user in mind to{" "}
          <span className="font-bold text-sky-400">connect</span> and deliver{" "}
          <span className="font-bold text-sky-400">
            meaningful experiences.
          </span>
        </h1>
      </section>
    </>
  );
}
