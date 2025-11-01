import Image from "next/image";

export default function Suisei() {
  const suisei = ["suisei-1", "suisei-2", "suisei-3"];

  return (
    <div className="flex my-32 justify-between items-center gap-16">
      <div className="flex items-center gap-8">
        <p className="text-zinc-400">
          This is Suisei in her initial design! I was too focused on improving
          the design quality, and neglected to connect her to the players. I
          realized that I should not be thinking how she will look like in the
          end, but rather focus on who she is and what she is thinking.
        </p>
        <Image
          width={800}
          height={800}
          src="/featured/monobit/initial-character-design.webp"
          alt="Initial Character Design"
          className="w-1/2 h-auto object-contain rounded-md mb-16"
        />
      </div>
      <div>
        <p className="text-zinc-400">
          This is Suisei now! She is cute and calm, and she has a strong desire
          to learn and grow. She loves to explore new things and is always eager
          to take on new challenges.
        </p>
        <div className="flex mt-16 justify-between items-center gap-4"  >
          {suisei.map((img, index) => (
            <div id={`suisei-${index + 1}`} className="w-1/3 p-4 border-2 border-zinc-800 rounded-md" key={index}>
              <Image
                key={index}
                width={800}
                height={800}
                src={`/featured/monobit/suisei/${img}.webp`}
                alt={`Suisei ${index + 1} Design`}
                className="full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
