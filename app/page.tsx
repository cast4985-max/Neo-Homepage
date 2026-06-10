import Header from "@/components/Header";
import PromoBanner from "@/components/PromoBanner";
import Hero from "@/components/Hero";
import Suggestions from "@/components/Suggestions";
import LoginSection from "@/components/LoginSection";
import PlanAhead from "@/components/PlanAhead";
import Outcomes from "@/components/Outcomes";
import AiLogistics from "@/components/AiLogistics";
import CaseStudies from "@/components/CaseStudies";
import Capabilities from "@/components/Capabilities";
import Deployment from "@/components/Deployment";
import BusinessSection from "@/components/BusinessSection";
import PartnerSections from "@/components/PartnerSections";
import TechLeadership from "@/components/TechLeadership";
import Recognition from "@/components/Recognition";
import LogoCloud from "@/components/LogoCloud";
import Testimonial from "@/components/Testimonial";
import ProcessSteps from "@/components/ProcessSteps";
import News from "@/components/News";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BottomBar from "@/components/BottomBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <PromoBanner />
        <Hero />
        <Suggestions />
        <LoginSection />
        <PlanAhead />
        <Outcomes />
        <AiLogistics />
        <CaseStudies />
        <Capabilities />
        <Deployment />
        <BusinessSection />
        <PartnerSections />
        <TechLeadership />
        <Recognition />
        <LogoCloud />
        <Testimonial />
        <ProcessSteps />
        <News />
        <ContactSection />
      </main>
      <Footer />
      <BottomBar />
    </>
  );
}
