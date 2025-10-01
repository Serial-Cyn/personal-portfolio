import Navbar from "@/components/ui/navbar";
import Hero from "@/components/hero-section/hero";
import JobValue from "@/components/value-section/job-value";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobValue />
    </div>
  );
}
