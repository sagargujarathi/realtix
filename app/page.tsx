import CTA from "../components/home/CTA";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
// Removed import for Blog component

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
      {/* Blog section removed */}
    </>
  );
}
