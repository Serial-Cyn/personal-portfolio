import Navbar from "@/components/ui/navbar";
import Headline from "../../components/blog/headline";
import Demo from "./demo";
import Reason from "../../components/blog/reason";
import Blog from "./blog";

export default function Monobit() {
  const techStack = ["Figma", "Aseprite"];

  return (
    <>
      <Headline
        title="MONOBIT"
        year="2024 - 2025"
        img="/featured/monobit/headline.webp"
        techStack={techStack}
      />
      <Reason
        reason="Inspired to help people in learning programming languages efficiently
        through an engaging way!"
      />
      <Blog />
      <Demo />
    </>
  );
}
