"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, AlertCircle } from "lucide-react"

export function CountdownSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Set countdown to end of current day
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0)
      
      const diff = tomorrow.getTime() - now.getTime()
      
      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatNumber = (num: number) => num.toString().padStart(2, "0")

  return (
    <section ref={ref} className="py-16 lg:py-20 bg-[#141414] border-y border-[#262626]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="max-w-[1200px] mx-auto px-6 lg:px-12"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#c9a961]/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-[#c9a961]" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#fafafa]">
                Vagas Limitadas Disponíveis
              </h3>
              <p className="text-[#a3a3a3]">
                Apenas {timeLeft.hours} horas restantes para garantir seu horário hoje
              </p>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-6">
            <Clock className="w-5 h-5 text-[#c9a961] hidden sm:block" />
            
            <div className="flex gap-3">
              {/* Hours */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-[#262626] rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-semibold text-[#c9a961]">
                    {formatNumber(timeLeft.hours)}
                  </span>
                </div>
                <span className="text-xs text-[#a3a3a3] mt-1 block">Horas</span>
              </div>

              {/* Separator */}
              <div className="flex flex-col justify-center">
                <span className="text-[#c9a961] text-xl">:</span>
              </div>

              {/* Minutes */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-[#262626] rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-semibold text-[#c9a961]">
                    {formatNumber(timeLeft.minutes)}
                  </span>
                </div>
                <span className="text-xs text-[#a3a3a3] mt-1 block">Minutos</span>
              </div>

              {/* Separator */}
              <div className="flex flex-col justify-center">
                <span className="text-[#c9a961] text-xl">:</span>
              </div>

              {/* Seconds */}
              <div className="text-center">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-[#262626] rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-semibold text-[#c9a961]">
                    {formatNumber(timeLeft.seconds)}
                  </span>
                </div>
                <span className="text-xs text-[#a3a3a3] mt-1 block">Segundos</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
