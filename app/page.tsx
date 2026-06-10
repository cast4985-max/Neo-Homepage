import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Suggestions from "@/components/Suggestions";
import LoginSection from "@/components/LoginSection";
import PlanAhead from "@/components/PlanAhead";
import Outcomes from "@/components/Outcomes";
import AiLogistics from "@/components/AiLogistics";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import Deployment from "@/components/Deployment";
import BusinessSection from "@/components/BusinessSection";
import PartnerSections from "@/components/PartnerSections";
import TechLeadership from "@/components/TechLeadership";
import Recognition from "@/components/Recognition";
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
        <Hero />
        <LogoCloud />
        <Suggestions />
        <LoginSection />
        <PlanAhead />
        <Outcomes />
        <AiLogistics />
        <Capabilities />
        <CaseStudies />
        <Deployment />
        <BusinessSection />
        <PartnerSections />
        <TechLeadership />
        <Recognition />
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
