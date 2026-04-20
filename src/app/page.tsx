import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PoeticStory } from "@/components/poetic-story"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CountdownSection } from "@/components/countdown-section"
import { GalleryPreview } from "@/components/gallery-preview"
import { FinalCTA } from "@/components/final-cta"
import { SocialNavbar } from "@/components/social-navbar"
import { Footer } from "@/components/footer"
import { StatsSection } from "@/components/stats-section"
import { FlowingMenu } from "@/components/ui/flowing-menu"
import dynamic from "next/dynamic"

// Lazy load heavy components for better performance
const ImageComparison = dynamic(
  () => import("@/components/image-comparison").then((mod) => mod.ImageComparison),
  { loading: () => <div className="h-[600px] bg-[#0a0a0a]" /> }
)

const flowingMenuItems = [
  { link: "/services#hair", text: "Cortes", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop" },
  { link: "/services#shave", text: "Barbas", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop" },
  { link: "/services#beard", text: "Modelagem", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop" },
  { link: "/services", text: "Ver Todos", image: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=600&h=400&fit=crop" },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      
      {/* Flowing Menu Navigation */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="h-[300px] md:h-[350px] rounded-2xl overflow-hidden">
          <FlowingMenu
            items={flowingMenuItems}
            speed={12}
            textColor="#a3a3a3"
            bgColor="#0a0a0a"
            marqueeBgColor="#c9a961"
            marqueeTextColor="#0a0a0a"
            borderColor="#262626"
          />
        </div>
      </section>
      
      <StatsSection />
      <PoeticStory />
      <ExperienceSection />
      <ImageComparison />
      <TestimonialsSection />
      <CountdownSection />
      <GalleryPreview />
      <FinalCTA />
      <Footer />
      <SocialNavbar />
    </main>
  )
}
