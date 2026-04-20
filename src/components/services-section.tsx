"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"

const services = [
  {
    name: "Corte & Finalização",
    description: "Corte com tesoura e máquina, finalizado com modelagem.",
    price: "R$ 35",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=800&fit=crop",
  },
  {
    name: "Lavagem, Corte & Modelagem",
    description: "Limpeza, hidratação, corte e modelagem.",
    price: "R$ 45",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=800&fit=crop",
    badge: "Popular",
  },
  {
    name: "Degradê (Fade)",
    description: "Corte com degradê na nuca e laterais.",
    price: "R$ 40",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop",
    badge: "Tendência",
  },
  {
    name: "Barba & Bigode",
    description: "Definição e acabamento da barba com máquina e navalha, finalizado com toalha quente.",
    price: "R$ 30",
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    let st: ScrollTrigger | null = null
    
    if (ref.current) {
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(ref.current?.querySelectorAll(".service-item") || [], 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              stagger: 0.1,
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
          <h2 className="text-3xl md:text-5xl font-semibold text-[#fafafa] mb-4">
            Nossos <span className="font-serif italic text-[#c9a961]">Serviços</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl mx-auto">
            Serviços premium de cuidados masculinos para o homem moderno
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.name}
              className="service-item"
            >
              <ServiceCard
                title={service.name}
                price={service.price}
                duration={service.duration}
                description={service.description}
                image={service.image}
                badge={service.badge}
              />
            </div>
          ))}
        </div>

        <div
          className="text-center"
        >
          <Link href="/services">
            <Button variant="outline" className="mr-4 border-[#262626] text-[#fafafa] hover:bg-[#1a1a1a]">
              Ver Todos os Serviços
            </Button>
          </Link>
          <Link href="/booking">
            <Button variant="gold" className="premium-shadow group">
              Agendar
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
