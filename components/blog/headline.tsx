"use client";

import Image from "next/image";
import Button from "@/components/ui/button";

type HeadlineProps = {
  title: string;
  year: string;
  img: string;
  techStack: string[];
};

export default function Headline({
  title,
  year,
  img,
  techStack,
}: HeadlineProps) {

  function handleClick() {
    const TARGET_SECTION = document.getElementById("demo");

    if (TARGET_SECTION) {
      TARGET_SECTION.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Target section not found");
    }
  }

  return (
    <section id="headline" className="min-w-full h-screen px-6 pt-32">
      <div className="w-full h-full flex flex-col justify-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase">{title}</h1>
          <p className="mb-4 text-base md:text-xl text-zinc-600">{year}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <div className="2xl:w-3/5 max-w-2xl">
            <Image
              width={2000}
              height={2000}
              src={img}
              alt={title}
              className="w-full max-w-2xl 2xl:max-w-6xl object-contain rounded-2xl"
            />
          </div>
          <div className="grow flex flex-col justify-between">
            <div className="text-base md:text-xl 2xl:text-6xl font-light text-zinc-400">
              <h2 className="mb-0 md:mb-2 2xl:mb-6">Developed with</h2>
              <ul>
                {techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:flex justify-center mt-6 md:mt-4">
              <Button label="Check it out!" variant="secondary" onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
