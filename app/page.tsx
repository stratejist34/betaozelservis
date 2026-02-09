import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceWorkflow from "@/components/ServiceWorkflow";
import SilentAssurance from "@/components/SilentAssurance";
import WhyUs from "@/components/WhyUs";
import ReviewsSection from "@/components/ReviewsSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import PremiumServices from "@/components/PremiumServices";
import MaintenancePackages from "@/components/MaintenancePackages";


export default function Home() {
  return (
    <main className="min-h-screen overflow-visible">
      <Header />
      <HeroSection />
      <SectionDivider />
      <ServiceWorkflow />
      <SectionDivider />
      <PremiumServices />
      <SectionDivider />
      <SilentAssurance />
      <SectionDivider />
      <WhyUs />
      <SectionDivider />
      <ReviewsSection />
      <SectionDivider />
      <MaintenancePackages />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <Footer />

    </main>
  );
}
