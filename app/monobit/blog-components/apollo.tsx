import Image from "next/image";

export default function Apollo() {
  const apollo = ["apollo-1", "apollo-2", "apollo-3"];

  return (
    <div className="flex my-32 justify-between items-center gap-16">
      
      <div>
        <p className="text-zinc-400">
          And this is Apollo, the second character designed for Monobit. Apollo is
          characterized by his adventurous spirit and curiosity, often embarking on
          quests to discover new programming concepts and solve coding challenges.
        </p>
        <div className="flex mt-16 justify-between items-center gap-4"  >
          {apollo.map((img, index) => (
            <div id={`apollo-${index + 1}`} className="w-1/3 p-4 border-2 border-zinc-800 rounded-md" key={index}>
              <Image
                key={index}
                width={800}
                height={800}
                src={`/featured/monobit/apollo/${img}.webp`}
                alt={`Apollo ${index + 1} Design`}
                className="full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
