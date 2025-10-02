import Navbar from "@/components/ui/navbar";
import Hero from "@/components/hero-section/hero";
import JobValue from "@/components/value-section/job-value";
import Expertise from "@/components/expertise-section/expertise";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobValue />
      <Expertise />
    </div>
  );
}
