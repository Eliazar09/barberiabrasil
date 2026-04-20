"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, MapPin, Clock, Gift } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center mb-4 p-[30px] rounded-2xl border border-[#262626] bg-[#0f0f0f]"
            >
              <Image
                src="/videos/image.png"
                alt="Dsbarber Shop"
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-[#737373] text-sm leading-relaxed mb-4">
              A Dsbarber Shop é a barbearia premium de Boa Vista. Atrás de todo homem de sucesso há um barbeiro extraordinário. Experimente o verdadeiro artesanato no coração de Buritis.
            </p>
            <div className="flex items-center gap-2 text-[#c9a961] text-sm">
              <Gift className="w-4 h-4" />
              <span>Vale-presentes disponíveis na loja</span>
            </div>
            <div className="flex items-center gap-2 text-[#c9a961] text-sm mt-2">
              <span>Empresa de empreendedoras</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#fafafa] font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#737373] hover:text-[#c9a961] transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#737373] hover:text-[#c9a961] transition-colors text-sm"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[#737373] hover:text-[#c9a961] transition-colors text-sm"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-[#737373] hover:text-[#c9a961] transition-colors text-sm"
                >
                  Agendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#fafafa] font-medium mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#737373] text-sm">
                <MapPin className="w-4 h-4 text-[#c9a961] mt-0.5 shrink-0" />
                <span>Av. dos Bandeirantes, 1509<br />Buritis, Boa Vista - RR<br />CEP: 69309-185</span>
              </li>
              <li className="flex items-center gap-2 text-[#737373] text-sm">
                <Phone className="w-4 h-4 text-[#c9a961]" />
                <a href="tel:95991267894" className="hover:text-[#c9a961] transition-colors">
                  (95) 99126-7894
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#737373] text-sm">
                <Clock className="w-4 h-4 text-[#c9a961] mt-0.5 shrink-0" />
                <div>
                  <p>Seg-Sex: 9h – 19h</p>
                  <p>Sábado: 9h – 17h</p>
                  <p>Domingo: Fechado</p>
                  <p className="text-[#c9a961] mt-1">Promo Terça: Pagamento à vista</p>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/dsbarber_rr/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:border-[#c9a961] hover:text-[#c9a961] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/p/dsbarbershop-100063505786108/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:border-[#c9a961] hover:text-[#c9a961] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://maps.google.com/?q=Av+dos+Bandeirantes+1509+Buritis+Boa+Vista+RR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:border-[#c9a961] hover:text-[#c9a961] transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#737373] text-sm">
            {currentYear} Dsbarber Shop. Todos os direitos reservados.
          </p>
          <p className="text-[#737373] text-sm">
            Nota 4,9 (135 avaliações)
          </p>
        </div>
      </div>
    </footer>
  )
}
