"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { MovingDotCard } from "@/components/ui/moving-dot-card"

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    let st: ScrollTrigger | null = null
    
    if (ref.current) {
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(ref.current?.querySelectorAll(".stat-card") || [], 
            { opacity: 0, x: 50 },
            { 
              opacity: 1, 
              x: 0, 
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
    <section ref={ref} className="py-20 px-4 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            Confiado por <span className="font-serif italic text-[#c9a961]">Milhares</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl mx-auto">
            O destino premium de Boa Vista para cuidados masculinos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="stat-card">
            <MovingDotCard target={135} duration={2500} label="Clientes Satisfeitos" />
          </div>
          <div className="stat-card">
            <MovingDotCard target={5} duration={2000} label="Anos de Experiência" />
          </div>
          <div className="stat-card">
            <MovingDotCard target={6} duration={2000} label="Barbeiros Especialistas" />
          </div>
        </div>
      </div>
    </section>
  )
}
