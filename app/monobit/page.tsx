import Navbar from "@/components/ui/navbar";
import Headline from "./components/headline";
import Demo from "./components/demo";
import Reason from "./components/reason";

export default function Monobit() {
  const techStack = ["Figma"];

  return (
    <>
      <Headline
        title="MONOBIT"
        year="2024 - 2025"
        img="/featured/monobit/headline.webp"
        techStack={techStack}
      />
      <Reason />
      <Demo />
      <Navbar />
    </>
  );
}
