import Headline from "@/components/blog/headline";
import Reason from "@/components/blog/reason";

export default function JavaHeroes() {
  const techStack = ["Java, Aseprite"];

  return (
    <>
      <Headline
        title="JAVA HEROES"
        year="2022 - 2023"
        img="/featured/monobit/headline.webp"
        techStack={techStack}
      />
      <Reason
        reason="My first ever project, created to help people to learn and understand how viruses work in a fun and engaging way!"
      />
    </>
  );
}
