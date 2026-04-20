"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import { barbershopImages } from "@/services/pexels"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const videoRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    let trigger: ScrollTrigger | null = null
    
    if (videoRef.current) {
      trigger = ScrollTrigger.create({
        trigger: videoRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (videoRef.current) {
            gsap.set(videoRef.current, { yPercent: self.progress * 30 })
          }
        },
      })
    }
    
    return () => {
      if (trigger) trigger.kill()
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section className="relative min-h-[110vh] overflow-hidden">
      {/* Video Background */}
      <div ref={videoRef} className="absolute inset-0 z-0 h-[130%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster="/videos/image.png"
        >
          <source src="/videos/7426312-uhd_2560_1080_25fps.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[#0a0a0a]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 pt-[290px] pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8"
        >
          {/* Headline */}
          <motion.div variants={itemVariants} className="max-w-[1200px] text-center mx-auto">
            <h1 className="relative inline-block text-[42px] sm:text-[64px] lg:text-[82px] font-semibold leading-[1.1] text-[#0a0a0a] tracking-tight">
              <span className="relative z-10 bg-[#c9a961] px-6 sm:px-10 py-3 sm:py-4 block">
                Onde o <span className="font-serif italic tracking-wide">estilo</span> encontra a sofisticação
              </span>
            </h1>
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-[#a3a3a3] max-w-[600px] text-center mx-auto"
          >
            Cada detalhe é pensado para o homem exigente
          </motion.p>

          {/* Email CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 max-w-[480px] mx-auto"
          >
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-full px-6 bg-[#0a0a0a]/80 border-[#262626] text-[#fafafa] placeholder:text-[#737373] focus-visible:ring-[#c9a961]"
            />
            <Link href="/booking">
              <Button
                variant="gold"
                size="lg"
                className="h-12 rounded-full px-8 premium-shadow group"
              >
                Agendar
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mt-4 mx-auto"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#c9a961] to-[#a88b4a] border-2 border-[#0a0a0a] flex items-center justify-center text-xs font-medium text-[#0a0a0a]"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#a3a3a3]">
              <Users className="w-4 h-4 text-[#c9a961]" />
              <span>A melhor barbearia de Boa Vista - RR</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
