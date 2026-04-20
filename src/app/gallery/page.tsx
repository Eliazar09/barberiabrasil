"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialNavbar } from "@/components/social-navbar"
import { Button } from "@/components/ui/button"
import { barbershopImages } from "@/services/pexels"

const galleryImages = barbershopImages.gallery

export default function GalleryPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="mb-8 text-[#a3a3a3] hover:text-[#fafafa]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-[#c9a961] text-sm tracking-[0.3em] uppercase mb-4">
              Nosso Trabalho
            </p>
            <h1 className="text-5xl lg:text-7xl font-semibold text-[#fafafa] mb-6">
              A <span className="font-serif italic text-[#c9a961]">Galeria</span>
            </h1>
            <p className="text-[#a3a3a3] max-w-[600px] text-lg">
              Uma coleção curada das nossas melhores transformações. Cada imagem representa
              nosso compromisso com a excelência e a arte da barbearia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={ref} className="pb-24 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs text-[#c9a961] uppercase tracking-wider mb-2">
                    {image.category}
                  </p>
                  <h3 className="text-xl font-medium text-[#fafafa] mb-1">{image.title}</h3>
                  <p className="text-sm text-[#a3a3a3]">Photo by {image.photographer}</p>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 border border-transparent group-hover:border-[#c9a961]/30 rounded-xl transition-colors duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sticky Book Button */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="fixed bottom-6 right-6 z-40"
      >
        <Link href="/booking">
          <Button
            size="lg"
            className="rounded-full px-6 bg-[#c9a961] text-[#0a0a0a] hover:bg-[#d4b978] premium-shadow shadow-lg shadow-[#c9a961]/20 group"
          >
            Agendar
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>

      <Footer />
      <SocialNavbar />
    </main>
  )
}
