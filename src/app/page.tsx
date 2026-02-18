import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { WhyChoose } from "@/components/home/WhyChoose";
import { TechStack } from "@/components/home/TechStack";
import { Testimonials } from "@/components/home/Testimonials";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0 min-h-screen">
      <Hero />
      <TechStack />
      <Services />
      <WhyChoose />
      <Testimonials />
      <CTABanner />
    </div>
  );
}
