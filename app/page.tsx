import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceWorkflow from "@/components/ServiceWorkflow";
import SilentAssurance from "@/components/SilentAssurance";
import WhyUs from "@/components/WhyUs";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import SectionDivider from "@/components/SectionDivider";
import ExpertiseStackSection from "@/components/ExpertiseStackSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <HeroSection />
        <SectionDivider />
        <ServiceWorkflow />
        <SectionDivider />
        <ExpertiseStackSection />
        <SilentAssurance />
        <SectionDivider />
        <WhyUs />
        <SectionDivider />
        <ReviewsSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
      </div>
      <Footer />
      <FloatingActions />
    </main>
  );
}
