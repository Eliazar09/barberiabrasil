"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { MoveHorizontal } from "lucide-react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

// Before/After images from Pexels
const beforeImage = "https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg?auto=compress&cs=tinysrgb&w=1200"
const afterImage = "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1200"

export function ImageComparison() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (ref.current) {
      // Header animation
      gsap.fromTo(ref.current.querySelector(".header-content"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          }
        }
      )

      // Comparison container animation
      gsap.fromTo(ref.current.querySelector(".comparison-container"), 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 70%",
          }
        }
      )
    }
  }, [])

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="header-content text-center mb-16"
        >
          <p className="text-[#c9a961] text-sm tracking-[0.3em] uppercase mb-4">
            Transformação
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#fafafa]">
            Antes <span className="font-serif italic text-[#c9a961]">&</span> Depois
          </h2>
        </div>

        {/* Image Comparison Container */}
        <div
          className="comparison-container relative max-w-[800px] mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
            onTouchMove={handleTouchMove}
          >
            <div className="absolute inset-0">
              <Image
                src={afterImage}
                alt="Depois do corte"
                fill
                className="object-cover"
                sizes="(max-width: 800px) 100vw, 800px"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-[#0a0a0a]/20" />
            </div>

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image
                src={beforeImage}
                alt="Antes do corte"
                fill
                className="object-cover"
                style={{ filter: "grayscale(30%) contrast(0.9)" }}
                sizes="(max-width: 800px) 100vw, 800px"
              />
              {/* Before label overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-serif text-[#fafafa]/20 uppercase tracking-widest">
                  Antes
                </span>
              </div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#c9a961] cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#c9a961] flex items-center justify-center shadow-lg shadow-[#c9a961]/20">
                <MoveHorizontal className="w-5 h-5 text-[#0a0a0a]" />
              </div>
            </div>

            {/* Labels */}
            <div
              className="absolute top-4 left-4 px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-full text-sm text-[#fafafa] font-medium"
              style={{ opacity: sliderPosition > 15 ? 1 : 0 }}
            >
              Antes
            </div>
            <div
              className="absolute top-4 right-4 px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-sm rounded-full text-sm text-[#c9a961] font-medium"
              style={{ opacity: sliderPosition < 85 ? 1 : 0 }}
            >
              Depois
            </div>
          </div>

          {/* Instruction */}
          <p className="text-center text-[#737373] text-sm mt-6">
            Arraste para comparar
          </p>
        </div>
      </div>
    </section>
  )
}
