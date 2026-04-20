"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Scissors, Sparkles, Crown, Clock, ChevronRight, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialNavbar } from "@/components/social-navbar"
import { Button } from "@/components/ui/button"
import { barbershopImages } from "@/services/pexels"
import { AnimatedText } from "@/components/ui/animated-shiny-text"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { SquishyCard } from "@/components/ui/squishy-card"
import { ServiceCard } from "@/components/ui/service-card"
import { MovingDotCard } from "@/components/ui/moving-dot-card"

const hairServices = [
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
    name: "Cabelo Longo",
    description: "Para cabelos no ombro ou abaixo. Lavagem, corte e modelagem.",
    price: "R$ 55",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
  },
  {
    name: "Corte na Máquina",
    description: "Corte utilizando máquina elétrica.",
    price: "R$ 25",
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop",
  },
  {
    name: "Zero Fade",
    description: "Degradê baixo com sombra mínima.",
    price: "R$ 40",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=600&h=800&fit=crop",
  },
  {
    name: "Degradê (Fade)",
    description: "Degradê na nuca e laterais.",
    price: "R$ 40",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop",
    badge: "Tendência",
  },
]

const shaveServices = [
  {
    name: "Barba com Toalha Quente",
    description: "Modelagem da barba com produtos especiais, seguido de toalha quente e hidratação.",
    price: "R$ 45",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop",
  },
  {
    name: "Barba Tradicional",
    description: "Experiência clássica de barbear com navalha e finalização com hidratante.",
    price: "R$ 40",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
    badge: "Clássico",
  },
]

const popularServices = [
  {
    title: "Corte & Modelagem",
    price: "35",
    duration: "30 min",
    description: "Corte preciso com tesoura e máquina, finalizado com produtos premium de modelagem.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=800&fit=crop",
    badge: "Mais Popular",
  },
  {
    title: "Degradê (Fade)",
    price: "40",
    duration: "45 min",
    description: "Degradê perfeito que se funde suavemente na nuca e laterais com detalhes precisos.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=800&fit=crop",
    badge: "Tendência",
  },
  {
    title: "Barba Premium",
    price: "40",
    duration: "30 min",
    description: "Transformação completa da barba com navalha e tratamento de toalha quente.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
    badge: "Premium",
  },
]


const beardServices = [
  {
    name: "Barba & Bigode",
    description: "Modelagem e acabamento da barba com máquina, finalizado com toalha quente.",
    price: "R$ 30",
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
  },
  {
    name: "Barba Premium",
    description: "Para barbas maiores, com tesoura, navalha e produtos especiais.",
    price: "R$ 40",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop",
    badge: "Premium",
  },
  {
    name: "Barba com Linha",
    description: "Acabamento perfeito com navalha para complementar seu corte.",
    price: "R$ 45",
    duration: "35 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero with Video */}
      <div className="relative h-[60vh] overflow-hidden mt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster={barbershopImages.gallery[2].srcLarge}
        >
          <source src={barbershopImages.videos.hero} type="video/mp4" />
          <source src={barbershopImages.videos.heroHD} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-2 text-[#a3a3a3] text-xs tracking-widest mb-4">
            <Link href="/" className="hover:text-[#fafafa] transition-colors">Início</Link>
            <ChevronRight size={12} />
            <span className="text-[#fafafa]">Serviços</span>
          </div>
          <AnimatedText 
            text="Nossos Serviços" 
            gradientColors="linear-gradient(90deg, #c9a961, #fff, #c9a961)"
            textClassName="text-[3rem] md:text-[5rem] font-bold"
          />
          <p className="text-[#a3a3a3] text-lg mt-4 max-w-xl">
            Serviços premium de cuidados masculinos para o homem moderno
          </p>
        </div>
      </div>

      {/* Container Scroll Animation Section */}
      <ContainerScroll
        titleComponent={
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#fafafa] mb-4">
              A <span className="font-serif italic text-[#c9a961]">Experiência</span>
            </h2>
            <p className="text-[#a3a3a3] max-w-md mx-auto">
              Entre no nosso mundo de cuidados premium e relaxamento
            </p>
          </div>
        }
      >
        <div className="relative h-full w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={barbershopImages.videos.booking} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0a0a]/60 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-[#fafafa] mb-2">
                Onde o <span className="font-serif italic text-[#c9a961]">estilo</span> encontra a sofisticação
              </h3>
              <p className="text-[#a3a3a3]">Cada detalhe é pensado para o homem exigente</p>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Popular Services - Squishy Cards */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            Serviços <span className="font-serif italic text-[#c9a961]">Mais</span> Populares
          </h2>
          <p className="text-[#a3a3a3] max-w-xl mx-auto">
            Nossos serviços exclusivos amados pelos clientes de Boa Vista
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {popularServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <SquishyCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section - Moving Dot Card */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <MovingDotCard target={135} duration={2500} label="Clientes Satisfeitos" />
          <MovingDotCard target={5} duration={2000} label="Anos de Experiência" />
          <MovingDotCard target={6} duration={2000} label="Barbeiros Especialistas" />
        </div>
      </section>

      {/* Hair Services */}
      <section id="hair" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            Serviços de <span className="font-serif italic text-[#c9a961]">Cabelo</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl">
            Cortes precisos adaptados ao seu estilo e preferências individuais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hairServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.name}
                price={service.price}
                duration={service.duration}
                description={service.description}
                image={service.image}
                badge={service.badge}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shave Services */}
      <section id="shave" className="py-20 px-4 md:px-12 max-w-7xl mx-auto bg-[#0f0f0f]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            <span className="font-serif italic text-[#c9a961]">Barbas</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl">
            Barbear tradicional com toalha quente para a melhor experiência
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {shaveServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.name}
                price={service.price}
                duration={service.duration}
                description={service.description}
                image={service.image}
                badge={service.badge}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Beard Services */}
      <section id="beard" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            <span className="font-serif italic text-[#c9a961]">Modelagem</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl">
            Cuidado e modelagem especializada da barba para o visual perfeito
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beardServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.name}
                price={service.price}
                duration={service.duration}
                description={service.description}
                image={service.image}
                badge={service.badge}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 px-4 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-[#262626] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#fafafa] mb-8">
            Horário de <span className="font-serif italic text-[#c9a961]">Funcionamento</span>
          </h2>
          <div className="space-y-4 max-w-sm mx-auto">
            <div className="flex justify-between py-3 border-b border-[#262626]">
              <span className="text-[#a3a3a3]">Segunda - Sexta</span>
              <span className="text-[#fafafa] font-medium">9h - 19h</span>
            </div>
            <div className="flex justify-between py-3 border-b border-[#262626]">
              <span className="text-[#a3a3a3]">Sábado</span>
              <span className="text-[#fafafa] font-medium">9h - 17h</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-[#a3a3a3]">Domingo</span>
              <span className="text-[#ef4444] font-medium">Fechado</span>
            </div>
            <div className="flex justify-between py-3 border-t border-[#262626] mt-2 pt-2">
              <span className="text-[#c9a961] font-medium">Promo Terça</span>
              <span className="text-[#c9a961] font-medium">Pagamento à vista</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[#fafafa] mb-6">
            Pronto para ficar no seu <span className="font-serif italic text-[#c9a961]">melhor</span>?
          </h2>
          <p className="text-[#a3a3a3] text-lg mb-8 max-w-xl mx-auto">
            Agende seu horário hoje e experimente a melhor barbearia de Boa Vista
          </p>
          <Link href="/booking">
            <Button variant="gold" size="lg" className="h-14 px-10 rounded-full text-lg">
              Agendar
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
      <SocialNavbar />
    </main>
  )
}
