"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { barbershopImages } from "@/services/pexels"

export function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const triggers: ScrollTrigger[] = []
    
    if (ref.current) {
      const contentTrigger = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(ref.current?.querySelector(".cta-content") || null, 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 1.2,
              ease: "power3.out",
            }
          )
        },
        once: true
      })
      triggers.push(contentTrigger)

      if (videoRef.current) {
        const videoTrigger = ScrollTrigger.create({
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          onUpdate: (self) => {
            if (videoRef.current) {
              gsap.set(videoRef.current, { yPercent: self.progress * 20 })
            }
          }
        })
        triggers.push(videoTrigger)
      }
    }
    
    return () => {
      triggers.forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden min-h-[60vh]">
      {/* Background Image */}
      <div ref={videoRef} className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12 text-center">
        <div
          className="cta-content flex flex-col items-center gap-8"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-[#c9a961]/10 border border-[#c9a961]/20 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-[#c9a961]" />
          </div>

          {/* Headline */}
          <h2 className="text-5xl lg:text-7xl font-semibold text-[#fafafa] leading-tight">
            Sua imagem é
            <br />
            sua <span className="font-serif italic text-[#c9a961]">assinatura</span>.
          </h2>

          {/* Subtext */}
          <p className="text-lg text-[#a3a3a3] max-w-[500px]">
            Entre em uma experiência projetada para quem exige excelência.
            Sua transformação começa com um simples agendamento.
          </p>

          {/* CTA */}
          <Link href="/booking">
            <Button
              variant="gold"
              size="xl"
              className="rounded-full px-10 premium-shadow group text-base"
            >
              Agende Seu Horário
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 text-sm text-[#737373]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Vagas Disponíveis Hoje
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Experiência Premium Garantida</span>
          </div>
        </div>
      </div>
    </section>
  )
}
