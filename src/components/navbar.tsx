"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/services", label: "Serviços" },
  { href: "/gallery", label: "Galeria" },
  { href: "/booking", label: "Agendar" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#262626]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 relative">
            {/* Logo - Left */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-[#c9a961] shadow-lg shadow-[#c9a961]/20"
              >
                <Image
                  src="/videos/image.png"
                  alt="Dsbarber Shop"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              <span className="ml-3 text-lg font-semibold text-[#fafafa] hidden sm:block">
                Ds<span className="text-[#c9a961]">barber</span>
              </span>
            </Link>

            {/* Desktop Navigation - Pill Style - Centered */}
            <nav className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
              <div className="relative flex items-center bg-[#1a1a1a] rounded-full p-1.5 border border-[#262626]">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href
                  const isHovered = hoveredIndex === index
                  
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch={true}
                      className="relative px-5 py-2 text-sm font-medium z-10"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <span className={`relative z-10 transition-colors duration-200 ${
                        isActive ? "text-[#0a0a0a]" : isHovered ? "text-[#fafafa]" : "text-[#a3a3a3]"
                      }`}>
                        {link.label}
                      </span>
                      
                      {(isActive || isHovered) && (
                        <motion.div
                          layoutId="pill"
                          className={`absolute inset-0 rounded-full -z-0 ${
                            isActive ? "bg-[#c9a961]" : "bg-[#262626]"
                          }`}
                          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
                        />
                      )}
                    </Link>
                  )
                })}
              </div>
            </nav>

            {/* Book Now Button - Right */}
            <Link href="/booking" prefetch={true} className="hidden md:block">
              <Button
                variant="gold"
                size="sm"
                className="rounded-full px-6"
              >
                Agendar
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#fafafa]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] pt-24 md:hidden"
          >
            <nav className="flex flex-col items-center gap-8 p-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl transition-colors ${
                    pathname === link.href ? "text-[#c9a961]" : "text-[#fafafa] hover:text-[#c9a961]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/booking" prefetch={true} onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="gold" size="lg" className="rounded-full px-8 mt-4">
                  Agendar
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
