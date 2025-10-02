import Navbar from "@/components/ui/navbar";
import Hero from "@/components/hero-section/hero";
import JobValue from "@/components/value-section/job-value";
import Expertise from "@/components/expertise-section/expertise";
import ContactMe from "@/components/contact-section/contact-me";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <JobValue />
      <Expertise />
      <ContactMe />
      <Footer />
    </div>
  );
}
