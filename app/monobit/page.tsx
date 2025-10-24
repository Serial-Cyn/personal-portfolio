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
        url="https://www.figma.com/proto/Lpmarxfv5IuZxLBSfuQkfJ/2B-%7C-MAMPLATA--CHRISTIAN-B.---HCI?node-id=1289-78458&t=hWDRRothcxd5W2uT-0&scaling=scale-down&content-scaling=fixed&page-id=1017%3A19490&starting-point-node-id=1289%3A78458&show-proto-sidebar=1"
      />
      <Reason />
      <Demo />
      <Navbar />
    </>
  );
}
