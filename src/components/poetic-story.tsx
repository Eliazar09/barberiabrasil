"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function PoeticStory() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const lineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section ref={ref} className="relative py-32 lg:py-40 overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-12 text-center"
      >
        <motion.p
          variants={lineVariants}
          className="font-serif text-3xl lg:text-5xl leading-relaxed text-[#fafafa] italic"
        >
          &ldquo;Todo homem carrega uma história em seu reflexo.
        </motion.p>
        <motion.p
          variants={lineVariants}
          className="font-serif text-3xl lg:text-5xl leading-relaxed text-[#a3a3a3] italic mt-6"
        >
          No silêncio da cadeira, a transformação começa.
        </motion.p>
        <motion.p
          variants={lineVariants}
          className="font-serif text-3xl lg:text-5xl leading-relaxed text-[#a3a3a3] italic mt-6"
        >
          O aço encontra a pele, o tempo desacelera,
        </motion.p>
        <motion.p
          variants={lineVariants}
          className="font-serif text-3xl lg:text-5xl leading-relaxed text-[#a3a3a3] italic mt-6"
        >
          e a identidade é refinada.
        </motion.p>
        <motion.div
          variants={lineVariants}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent" />
          <p className="font-serif text-xl text-[#c9a961] italic tracking-wide">
            Isto não é apenas um corte.
          </p>
          <p className="font-serif text-2xl text-[#fafafa] italic tracking-widest uppercase">
            Isto é ritual.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
