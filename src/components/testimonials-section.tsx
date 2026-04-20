"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Quote, Star } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Excelente local, ótimos profissionais, lugar organizado. Voltarei sempre!",
    author: "Dennys Ramiz",
    role: "Cliente Verificado",
    rating: 5,
  },
  {
    quote: "Ambiente confortável, limpo, ótimo atendimento. Recomendo demais!",
    author: "Oleg Protasov",
    role: "Cliente Verificado",
    rating: 5,
  },
  {
    quote: "Atendimento nota mil, detalhamento do corte e barba surreais! Trabalho impecável e muito bem feito, na régua!",
    author: "Nycolas Monteiro",
    role: "Local Guide",
    rating: 5,
  },
]

function AnimatedGlowCard({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 rounded-xl opacity-0 transition-opacity duration-500"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(201, 169, 97, 0.15), transparent 40%)`
            : "none",
          opacity: isHovered ? 1 : 0,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p className="text-[#c9a961] text-sm tracking-[0.3em] uppercase mb-4">
            Avaliações
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#fafafa]">
            O que dizem os <span className="font-serif italic text-[#c9a961]">Clientes</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AnimatedGlowCard className="h-full">
                <Card className="h-full p-8 bg-[#141414] border-[#262626] hover:border-[#c9a961]/30 transition-colors duration-500">
                  {/* Quote Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#c9a961]/10 flex items-center justify-center mb-6">
                    <Quote className="w-5 h-5 text-[#c9a961]" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c9a961] text-[#c9a961]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-[#fafafa] leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a961] to-[#a88b4a] flex items-center justify-center text-[#0a0a0a] font-medium">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-medium text-[#fafafa]">{testimonial.author}</p>
                      <p className="text-sm text-[#a3a3a3]">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </AnimatedGlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
