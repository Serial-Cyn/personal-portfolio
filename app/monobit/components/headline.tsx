'use client';

import Button from "@/components/ui/button";

type HeadlineProps = {
  title: string;
  year: string;
  img: string;
  techStack: string[];
  url: string;
};

export default function Headline({ title, year, img, techStack, url }: HeadlineProps) {

    function handleClick() {
        window.open(url, "_blank");
    }

  return (
    <section id="headline" className="min-w-full min-h-screen px-6 pt-32">
      <div className="w-full h-full flex flex-col justify-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold uppercase">{title}</h1>
          <p className="mb-4 text-base md:text-xl text-zinc-600">{year}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-16">
          <div>
            <img
              src={img}
              alt={title}
              className="w-full max-w-2xl object-contain rounded-2xl"
            />
          </div>
          <div className="text-base md:text-xl font-light text-zinc-400">
            <h2 className="mb-0 md:mb-2">Developed with</h2>
            <ul>
                {techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
