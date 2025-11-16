import Sidebar from "@/components/Sidebar"
import Hero from "@/components/home/Hero"
import VisionSection from "@/components/home/VisionSection"
import MissionSection from "@/components/home/MissionSection"
import ImpactSection from "@/components/home/ImpactSection"
import GallerySection from "@/components/home/GallerySection"
import TeamSection from "@/components/home/TeamSection"
import InvestorsSection from "@/components/home/InvestorsSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Hero />

        <VisionSection
          id="vision"
          heading="ADVANCING DEFENSE<br/>TECHNOLOGY"
          text="Our cutting-edge systems are transforming how soldiers approach operations with innovative AI-driven solutions."
          backgroundImage="/images/test2.png"
          nextSection="#vision2"
          alignment="left"
        />

        <VisionSection
          id="vision2"
          heading="SUPPORTING WARFIGHTERS<br/>ON THE GROUND"
          text="Exia Labs is dedicated to empowering warfighters with advanced AI tools that enhance situational awareness and decision-making in the field."
          backgroundImage="/images/test4.jpg"
          nextSection="#vision3"
          alignment="right"
        />

        <VisionSection
          id="vision3"
          heading="DELIVERING<br/> DECISION ADVANTAGE"
          text="Exia Labs is pioneering AI-powered solutions that enhance strategic decision-making and operational effectiveness for warfighters."
          backgroundImage="/images/blue_intro.png"
          nextSection="#mission"
          alignment="left"
        />

        <hr className="section-divider" />

        <MissionSection />

        <hr className="section-divider" />

        <ImpactSection />

        <hr className="section-divider" />

        <GallerySection />

        <hr className="section-divider" />

        <TeamSection />

        <InvestorsSection />

        <Footer />
      </div>
    </>
  )
}
