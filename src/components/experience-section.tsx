"use client"

import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Wine, MessageCircle, Scissors, Sparkles } from "lucide-react"
import { barbershopImages } from "@/services/pexels"

const steps = [
  {
    icon: Wine,
    number: "01",
    title: "Boas-vindas",
    description: "Inicie sua jornada com uma bebida refrescante, preparando o ambiente para o que está por vir.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Consulta",
    description: "Seu barbeiro ouve, analisa e cria uma visão personalizada para suas características únicas.",
  },
  {
    icon: Scissors,
    number: "03",
    title: "Corte Preciso",
    description: "Cada movimento é deliberado. Cada detalhe é intencional. É onde a arte encontra a expertise.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Finalização",
    description: "Saia não apenas com aparência diferente, mas se sentindo transformado. O toque final da excelência.",
  },
]

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    let st: ScrollTrigger | null = null
    
    if (ref.current) {
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(ref.current?.querySelectorAll(".experience-step") || [], 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              stagger: 0.2,
              duration: 1,
              ease: "power3.out",
            }
          )
        },
        once: true
      })
    }
    
    return () => {
      if (st) st.kill()
    }
  }, [])

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-[#c9a961] text-sm tracking-[0.3em] uppercase mb-4">
            A Experiência
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#fafafa]">
            Seu <span className="font-serif italic text-[#c9a961]">Ritual</span> Aguarda
          </h2>
        </div>

        {/* Steps Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="experience-step group relative"
            >
              <div className="relative p-8 lg:p-6 border border-[#262626] bg-[#141414]/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 hover:border-[#c9a961]/30 hover:bg-[#141414]">
                {/* Number */}
                <span className="absolute top-4 right-4 font-serif text-6xl text-[#262626] group-hover:text-[#c9a961]/10 transition-colors duration-500">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center mb-6 group-hover:border-[#c9a961]/50 group-hover:bg-[#c9a961]/10 transition-all duration-500">
                  <step.icon className="w-5 h-5 text-[#c9a961]" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-medium text-[#fafafa] mb-3">
                  {step.title}
                </h3>
                <p className="relative z-10 text-sm text-[#a3a3a3] leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#262626]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
