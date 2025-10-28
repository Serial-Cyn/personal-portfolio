import Image from "next/image";

export default function Blog() {
  const demoPalette = ["#2C73C7", "#17AD57", "#8E44AD", "#FF4B4B", "#F49000"];
  const suisei = ["suisei-1", "suisei-2", "suisei-3"];

  return (
    <section className="px-6">
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold">How it started</h1>
        <div className="mx-8 text-base lg:text-2xl text-justify mt-4 font-light leading-normal">
          <div className="flex mb-16 justify-between items-center gap-16">
            <p>
              Monobit was first initiated as an individual case study for a
              Major Subject during my 2nd year at the university. The project
              aimed to create an educational game that would help users learn
              programming languages in, not only an effective and interactive
              way, but also a fun way.
            </p>
            <Image
              width={800}
              height={800}
              src="/featured/neust_logo.webp"
              alt="NEUST LOGO"
              className="w-1/5 h-auto mr-16 object-contain rounded-md"
            />
          </div>
          <p className="mb-4">
            This idea stemmed from the observation that many people struggle to
            grasp programming concepts through traditional learning methods. I
            conducted extensive research on existing educational games and
            programming learning tools, and identified key features that would
            enhance user engagement and learning outcomes.
          </p>
          <p>
            The game was designed to include various levels, each focusing on
            different programming concepts, with challenges and quizzes to test
            the player&apos;s knowledge. Interviewing potential users is also
            part of the research process to gather pain spots and preferences,
            this allowed me to tailor the game mechanics and content to better
            suit the target audience.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold mt-10">
          Development Journey
        </h1>
        <div className="mx-8 text-base lg:text-2xl text-justify mt-4 font-light leading-normal">
          <p className="mb-16">
            The development of Monobit involved several stages, starting with
            prototyping and user testing. I utilized tools like Figma for UI/UX
            design and Aseprite for creating pixel art graphics. At this stage,
            I focused on creating a simple yet engaging interface that would
            appeal to users of all ages.
          </p>
          <div
            className="flex w-1/2 m-auto mb-16 min-h-64 justify-center items-center gap-6 rounded-2xl"
            style={{ backgroundColor: "#f7f7f7" }}
          >
            {demoPalette.map((color, index) => (
              <div
                key={index}
                className="w-16 h-16 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <div className="flex my-32 justify-center items-center gap-16">
            <p className="text-zinc-400">
              This is Suisei in her initial design! I was too focused on
              improving the design quality, and neglected to connect her to the
              players. I realized that I should not be thinking how she will
              look like in the end, but rather focus on who she is and what she
              is thinking.
            </p>
            <Image
              width={800}
              height={800}
              src="/featured/monobit/initial-character-design.webp"
              alt="Initial Character Design"
              className="w-1/2 h-auto object-contain rounded-md mb-16"
            />
          </div>
          <div className="flex my-32 justify-center items-center gap-16">
            <p className="text-zinc-400">
              This is Suisei now! She is cute and calm, and she has a strong
              desire to learn and grow. She loves to explore new things and is
              always eager to take on new challenges.
            </p>
            {suisei.map((img, index) => (
              <Image
                key={index}
                width={800}
                height={800}
                src={`/featured/monobit/suisei/${img}.webp`}
                alt={`Suisei ${index + 1} Design`}
                className="w-1/5 -mx-8"
              />
            ))}
          </div>
          <p className="mb-4">
            As the project progressed, I implemented feedback from user testing
            to refine the gameplay mechanics and educational content. This
            iterative process ensured that the game remained engaging while
            effectively teaching programming concepts. I also collaborated with
            peers and mentors to gain insights and improve the overall quality
            of the game.
          </p>
          <p>
            These stages were repeated multiple times to ensure the final
            product was both enjoyable and educational. The culmination of this
            effort resulted in Monobit, a game that not only entertains but also
            empowers users to learn programming in a more interactive way.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold mt-10">Future Plans</h1>
        <div className="mx-8 text-base lg:text-2xl text-justify mt-4 font-light leading-normal">
          <p className="mb-4">
            Currently, Monobit is still a work in progress, with plans to expand
            its content and features. Future updates will include additional
            levels, more programming languages, and enhanced graphics and sound
            effects to further immerse players in the learning experience.
          </p>
          <p>
            I plan to develop Monobit into a Software as a Service (SaaS)
            platform, allowing users to be able to access the game from any
            device! This will achieve my goal of making programming education
            more accessible and engaging for a wider audience.
          </p>
        </div>
      </div>
    </section>
  );
}
