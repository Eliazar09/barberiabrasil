"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Instagram, Phone, MapPin, Facebook } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

interface NavItem {
  icon: React.ElementType
  label: string
  href?: string
  external?: boolean
  action?: () => void
}

function LimelightNavItem({
  item,
  isActive,
  onClick,
}: {
  item: NavItem
  isActive: boolean
  onClick: () => void
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }, [])

  const Icon = item.icon

  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className="limelight relative group flex flex-col items-center gap-2 p-3 rounded-xl transition-colors duration-300"
      style={
        {
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Glow effect background */}
      <div
        className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(201, 169, 97, 0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Icon container */}
      <div
        className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
          isActive
            ? "bg-[#c9a961]/20 border-[#c9a961] text-[#c9a961]"
            : "bg-[#1a1a1a] border-[#262626] text-[#a3a3a3] group-hover:border-[#c9a961]/50 group-hover:text-[#c9a961]"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>

      {/* Label */}
      <span
        className={`relative z-10 text-xs font-medium transition-colors duration-300 ${
          isActive ? "text-[#c9a961]" : "text-[#737373] group-hover:text-[#a3a3a3]"
        }`}
      >
        {item.label}
      </span>
    </button>
  )
}

export function SocialNavbar() {
  const router = useRouter()
  const [activeItem, setActiveItem] = useState<string | null>(null)

  const handleNavClick = (item: NavItem) => {
    setActiveItem(item.label)

    if (item.action) {
      item.action()
    } else if (item.external && item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer")
    } else if (item.href) {
      router.push(item.href)
    }

    // Reset active state after animation
    setTimeout(() => setActiveItem(null), 300)
  }

  const navItems: NavItem[] = [
    {
      icon: Instagram,
      label: "Instagram",
      external: true,
      href: "https://www.instagram.com/dsbarber_rr/",
    },
    {
      icon: Facebook,
      label: "Facebook",
      external: true,
      href: "https://www.facebook.com/p/dsbarbershop-100063505786108/",
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      external: true,
      href: "https://wa.me/5595991267894",
    },
    {
      icon: Phone,
      label: "Ligar",
      external: true,
      href: "tel:95991267894",
    },
    {
      icon: MapPin,
      label: "Local",
      external: true,
      href: "https://maps.google.com/?q=Av+dos+Bandeirantes+1509+Buritis+Boa+Vista+RR",
    },
  ]

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 p-2 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#262626] rounded-2xl shadow-2xl shadow-black/50">
        {navItems.map((item) => (
          <LimelightNavItem
            key={item.label}
            item={item}
            isActive={activeItem === item.label}
            onClick={() => handleNavClick(item)}
          />
        ))}
      </div>
    </motion.nav>
  )
}
