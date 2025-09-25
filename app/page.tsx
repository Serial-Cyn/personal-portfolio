import ContactMe from '@/components/contacts/contactMe';
import Skills from '@/components/expertise/skills';
import HeroSection from '@/components/hero-section/heroSection';
import Navbar from '@/components/hero-section/navbar';
import JobValue from '@/components/job-value/jobValue';
import Projects from '@/components/works/projects';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <JobValue />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}