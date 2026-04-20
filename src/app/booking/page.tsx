"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  AlertTriangle, 
  MessageCircle, 
  HelpCircle,
  Scissors,
  User,
  CalendarDays,
  Check
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialNavbar } from "@/components/social-navbar"
import { Button } from "@/components/ui/button"
import { barbershopImages } from "@/services/pexels"

interface FormData {
  nome: string
  email: string
  telefone: string
  comoConheceu: string
  servico: string
  descricao: string
  diaPreferido: string
  horario: string
  primeiraVez: string
  termos: boolean
}

const initialForm: FormData = {
  nome: "", email: "", telefone: "", comoConheceu: "",
  servico: "", descricao: "", diaPreferido: "", horario: "",
  primeiraVez: "nao", termos: false,
}

const steps = ["Seus Dados", "Serviço", "Preferências", "Confirmação"]

const servicos = [
  { id: "corte-finalizacao", nome: "Corte & Finalização", descricao: "Corte com tesoura e máquina, finalizado com modelagem", duracao: "30 min", preco: "R$ 35" },
  { id: "lavagem-corte", nome: "Lavagem, Corte & Modelagem", descricao: "Limpeza, hidratação, corte e modelagem", duracao: "45 min", preco: "R$ 45" },
  { id: "cabelo-longo", nome: "Cabelo Longo", descricao: "Para cabelos no ombro ou abaixo. Lavagem, corte e modelagem", duracao: "60 min", preco: "R$ 55" },
  { id: "corte-maquina", nome: "Corte na Máquina", descricao: "Corte utilizando máquina elétrica", duracao: "20 min", preco: "R$ 25" },
  { id: "zero-fade", nome: "Zero Fade", descricao: "Degradê baixo com sombra mínima", duracao: "45 min", preco: "R$ 40" },
  { id: "degrade", nome: "Degradê (Fade)", descricao: "Degradê na nuca e laterais", duracao: "45 min", preco: "R$ 40", popular: true },
  { id: "barba", nome: "Barba & Bigode", descricao: "Modelagem da barba com máquina e navalha, finalizado com toalha quente", duracao: "20 min", preco: "R$ 30" },
  { id: "barba-premium", nome: "Barba Premium", descricao: "Para barbas maiores, com tesoura, navalha e produtos especiais", duracao: "30 min", preco: "R$ 40" },
  { id: "barba-linha", nome: "Barba com Linha", descricao: "Acabamento perfeito com navalha de barbear", duracao: "35 min", preco: "R$ 45" },
  { id: "pezinho", nome: "Pezinho", descricao: "Acabamento na nuca e laterais", duracao: "15 min", preco: "R$ 15" },
  { id: "combo", nome: "Combo Corte + Barba", descricao: "Corte completo + barba com preço especial", duracao: "60 min", preco: "R$ 60" },
]

const diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

const horarios = [
  { label: "Manhã", sub: "9h - 12h" },
  { label: "Tarde", sub: "12h - 17h" },
  { label: "Noite", sub: "17h - 19h" },
]

const faq = [
  { q: "Quais são os horários de funcionamento?", a: "Segunda a Sexta: 9h - 19h, Sábado: 9h - 17h, Domingo: Fechado. Promo Terça: pagamento à vista" },
  { q: "Preciso fazer agendamento?", a: "Aceitamos walk-ins, mas agendamentos são recomendados para garantir seu horário preferido." },
  { q: "Posso cancelar ou remarcar?", a: "Sim, pedimos pelo menos 24 horas de antecedência para cancelamentos ou remarcações." },
  { q: "Como devo me preparar para a visita?", a: "Venha com o cabelo limpo e relaxe. Cuidaremos do resto para garantir uma experiência premium." },
]

export default function BookingPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const setField = (field: keyof FormData, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }))

  const canNext = () => {
    if (step === 0) return form.nome && form.email && form.telefone
    if (step === 1) return form.servico
    if (step === 2) return form.diaPreferido && form.horario
    if (step === 3) return form.termos
    return true
  }

  const PHONE = "95991267894"

  const handleSubmit = () => {
    if (!form.termos) return

    const servicoSelecionado = servicos.find(s => s.id === form.servico)

    const msg = [
      "NOVO AGENDAMENTO - DSBARBER SHOP",
      "",
      "DADOS DO CLIENTE",
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `Telefone: ${form.telefone}`,
      form.comoConheceu ? `Como conheceu: ${form.comoConheceu}` : "",
      "",
      "SERVIÇO",
      `Serviço: ${servicoSelecionado?.nome}`,
      form.descricao ? `Descrição: ${form.descricao}` : "",
      `Primeira vez: ${form.primeiraVez === "sim" ? "Sim" : "Não"}`,
      "",
      "PREFERÊNCIAS",
      `Dia preferido: ${form.diaPreferido}`,
      `Horário: ${form.horario}`,
    ].filter(Boolean).join("%0A")

    window.open(`tel:${PHONE}`, "_blank")
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero com video */}
      <div className="relative h-56 md:h-72 overflow-hidden mt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={barbershopImages.gallery[0].src}
        >
          <source src={barbershopImages.videos.booking} type="video/mp4" />
          <source src={barbershopImages.videos.bookingHD} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-2 text-[#a3a3a3] text-xs tracking-widest mb-4">
            <Link href="/" className="hover:text-[#fafafa] transition-colors">Início</Link>
            <ChevronRight size={12} />
            <span className="text-[#fafafa]">Agendar</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#fafafa] tracking-wide">
            AGENDE SEU <span className="font-serif italic text-[#c9a961]">HORÁRIO</span>
          </h1>
          <p className="text-[#a3a3a3] text-sm mt-2">Dê o primeiro passo para sua transformação</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-12 py-8 md:py-12">
        {submitted ? (
          <div className="max-w-lg mx-auto text-center py-20">
            <CheckCircle2 size={64} className="text-[#c9a961] mx-auto mb-6" />
            <h2 className="text-4xl font-semibold mb-3 tracking-wide text-[#fafafa]">SOLICITAÇÃO ENVIADA!</h2>
            <p className="text-[#a3a3a3] text-sm leading-relaxed mb-3">
              Sua solicitação de agendamento foi enviada. Nossa equipe entrará em contato em breve para confirmar seu horário.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a961] text-[#0a0a0a] px-8 py-3 rounded-lg font-medium text-sm tracking-wider hover:bg-[#d4b978] transition-colors"
              >
                <MessageCircle size={16} />
                LIGUE PARA NÓS
              </a>
              <Link
                href="/"
                className="inline-block border border-[#262626] text-[#fafafa] px-8 py-3 rounded-lg font-medium text-sm tracking-wider hover:bg-[#1a1a1a] transition-colors"
              >
                VOLTAR AO INÍCIO
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex items-center gap-0 mb-3">
                  {steps.map((s, i) => (
                    <div key={s} className="flex items-center flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all shrink-0 ${
                        i < step ? "bg-[#c9a961] text-[#0a0a0a]" : i === step ? "bg-[#c9a961] text-[#0a0a0a] ring-4 ring-[#c9a961]/20" : "bg-[#1a1a1a] text-[#737373]"
                      }`}>
                        {i < step ? <Check size={14} /> : i + 1}
                      </div>
                      {i < steps.length - 1 && (
                        <div className={`flex-1 h-0.5 transition-all ${i < step ? "bg-[#c9a961]" : "bg-[#262626]"}`} />
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  {steps.map((s, i) => (
                    <span key={s} className={`text-xs hidden sm:block ${i === step ? "text-[#c9a961] font-medium" : "text-[#737373]"}`}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#141414] border border-[#262626] rounded-2xl p-4 sm:p-6 md:p-8"
                >
                  {/* Step 0 - Dados */}
                  {step === 0 && (
                    <div className="space-y-5">
                      <h2 className="text-2xl font-semibold tracking-wider mb-6 text-[#fafafa]">SEUS DADOS</h2>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Nome Completo *</label>
                        <input
                          type="text"
                          value={form.nome}
                          onChange={e => setField("nome", e.target.value)}
                          placeholder="Seu nome completo"
                          className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-sm text-[#fafafa] focus:outline-none focus:border-[#c9a961] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">E-mail *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setField("email", e.target.value)}
                          placeholder="seu@email.com"
                          className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-sm text-[#fafafa] focus:outline-none focus:border-[#c9a961] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Telefone *</label>
                        <input
                          type="tel"
                          value={form.telefone}
                          onChange={e => setField("telefone", e.target.value)}
                          placeholder="(95) 99126-7894"
                          className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-sm text-[#fafafa] focus:outline-none focus:border-[#c9a961] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Como nos conheceu?</label>
                        <select
                          value={form.comoConheceu}
                          onChange={e => setField("comoConheceu", e.target.value)}
                          className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-sm text-[#fafafa] focus:outline-none focus:border-[#c9a961] transition-colors"
                        >
                          <option value="">Selecione...</option>
                          <option>Instagram</option>
                          <option>Google</option>
                          <option>Indicação de amigo</option>
                          <option>Facebook</option>
                          <option>Outro</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 1 - Servico */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <h2 className="text-2xl font-semibold tracking-wider mb-6 text-[#fafafa]">SELECIONE O SERVIÇO</h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {servicos.map((servico) => (
                          <div
                            key={servico.id}
                            onClick={() => setField("servico", servico.id)}
                            className={`p-5 rounded-xl border cursor-pointer transition-all ${
                              form.servico === servico.id
                                ? "border-[#c9a961] bg-[#c9a961]/5"
                                : "border-[#262626] bg-[#0a0a0a] hover:border-[#c9a961]/30"
                            }`}
                          >
                            {servico.popular && (
                              <span className="inline-block px-2 py-0.5 bg-[#c9a961] text-[#0a0a0a] text-[10px] font-bold rounded-full mb-2">
                                POPULAR
                              </span>
                            )}
                            {servico.id === "combo" && (
                              <span className="inline-block px-2 py-0.5 bg-[#22c55e] text-[#0a0a0a] text-[10px] font-bold rounded-full mb-2">
                                PROMO
                              </span>
                            )}
                            <div className="flex items-center gap-2 mb-2">
                              <Scissors className="w-4 h-4 text-[#c9a961]" />
                              <h3 className="font-medium text-[#fafafa]">{servico.nome}</h3>
                            </div>
                            <p className="text-xs text-[#a3a3a3] mb-3">{servico.descricao}</p>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-[#737373] flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {servico.duracao}
                              </span>
                              <span className="text-[#c9a961] font-medium">{servico.preco}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Observações</label>
                        <textarea
                          value={form.descricao}
                          onChange={e => setField("descricao", e.target.value)}
                          placeholder="Algum pedido especial ou preferência?"
                          rows={3}
                          className="w-full bg-[#0a0a0a] border border-[#262626] rounded-lg px-4 py-3 text-sm text-[#fafafa] focus:outline-none focus:border-[#c9a961] transition-colors resize-none"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2 - Preferencias */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <h2 className="text-2xl font-semibold tracking-wider mb-6 text-[#fafafa]">PREFERÊNCIAS</h2>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Dia Preferido *</label>
                        <div className="flex flex-wrap gap-2">
                          {diasSemana.map(dia => (
                            <button
                              key={dia}
                              onClick={() => setField("diaPreferido", dia)}
                              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                                form.diaPreferido === dia
                                  ? "bg-[#c9a961] text-[#0a0a0a] border-[#c9a961]"
                                  : "border-[#262626] text-[#a3a3a3] hover:border-[#c9a961]/30 hover:text-[#fafafa]"
                              }`}
                            >
                              {dia}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Horário Preferido *</label>
                        <div className="grid grid-cols-3 gap-3">
                          {horarios.map(h => (
                            <button
                              key={h.label}
                              onClick={() => setField("horario", h.label)}
                              className={`p-4 rounded-xl border text-left transition-all ${
                                form.horario === h.label
                                  ? "bg-[#c9a961] text-[#0a0a0a] border-[#c9a961]"
                                  : "border-[#262626] hover:border-[#c9a961]/30"
                              }`}
                            >
                              <p className={`font-semibold text-sm ${form.horario === h.label ? "text-[#0a0a0a]" : "text-[#fafafa]"}`}>
                                {h.label}
                              </p>
                              <p className={`text-xs mt-0.5 ${form.horario === h.label ? "text-[#0a0a0a]/70" : "text-[#737373]"}`}>
                                {h.sub}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs tracking-widest text-[#737373] uppercase mb-2">Primeira visita?</label>
                        <div className="flex gap-3">
                          {["sim", "nao"].map(v => (
                            <button
                              key={v}
                              onClick={() => setField("primeiraVez", v)}
                              className={`flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                                form.primeiraVez === v ? "bg-[#c9a961] text-[#0a0a0a] border-[#c9a961]" : "border-[#262626] text-[#a3a3a3] hover:border-[#c9a961]/30"
                              }`}
                            >
                              {v === "sim" ? "Sim" : "Não"}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 - Confirmacao */}
                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl font-semibold tracking-wider mb-6 text-[#fafafa]">CONFIRMAÇÃO</h2>
                      <div className="space-y-3 mb-8">
                        {[
                          { label: "Nome", value: form.nome },
                          { label: "E-mail", value: form.email },
                          { label: "Telefone", value: form.telefone },
                          { label: "Serviço", value: servicos.find(s => s.id === form.servico)?.nome },
                          { label: "Dia", value: form.diaPreferido },
                          { label: "Horário", value: form.horario },
                        ].map(item => (
                          <div key={item.label} className="flex justify-between py-2.5 border-b border-[#262626]">
                            <span className="text-xs tracking-widest text-[#737373] uppercase">{item.label}</span>
                            <span className="text-sm text-[#fafafa] font-medium">{item.value || "-"}</span>
                          </div>
                        ))}
                      </div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.termos}
                          onChange={e => setField("termos", e.target.checked)}
                          className="mt-0.5 accent-[#c9a961] w-4 h-4 shrink-0"
                        />
                        <span className="text-sm text-[#a3a3a3] leading-relaxed">
                          Concordo com os <a href="#" className="text-[#c9a961] underline">Termos de Serviço</a> e <a href="#" className="text-[#c9a961] underline">Política de Privacidade</a>.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className={`flex mt-8 ${step > 0 ? "justify-between" : "justify-end"}`}>
                    {step > 0 && (
                      <button
                        onClick={() => setStep(s => s - 1)}
                        className="flex items-center gap-2 text-sm font-medium text-[#737373] hover:text-[#fafafa] transition-colors"
                      >
                        <ArrowLeft size={16} />
                        Voltar
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        onClick={() => canNext() && setStep(s => s + 1)}
                        disabled={!canNext()}
                        className="bg-[#c9a961] text-[#0a0a0a] px-8 py-3 rounded-lg font-medium text-sm tracking-wider hover:bg-[#d4b978] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        Continuar
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={!form.termos}
                        className="bg-[#c9a961] text-[#0a0a0a] px-8 py-3 rounded-lg font-medium text-sm tracking-wider hover:bg-[#d4b978] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        <MessageCircle size={16} />
                        LIGAR PARA AGENDAR
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Info cards */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#c9a961] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#fafafa] mb-1">Tempo de Resposta</p>
                    <p className="text-xs text-[#737373] leading-relaxed">Respondemos em até 24 horas úteis.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-[#c9a961] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[#fafafa] mb-1">Política de Cancelamento</p>
                    <p className="text-xs text-[#737373] leading-relaxed">Pedimos 24 horas de antecedência para cancelamentos.</p>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <HelpCircle size={18} className="text-[#c9a961]" />
                  <h3 className="text-lg font-semibold tracking-widest text-[#fafafa]">Dúvidas</h3>
                </div>
                <div className="space-y-3">
                  {faq.map((item, i) => (
                    <div key={i} className="border-b border-[#262626] pb-3 last:border-0">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full text-left flex items-center justify-between gap-2"
                      >
                        <span className="text-sm font-medium text-[#fafafa]">{item.q}</span>
                        <span className="text-[#737373] text-lg shrink-0">{openFaq === i ? "-" : "+"}</span>
                      </button>
                      {openFaq === i && (
                        <p className="text-xs text-[#737373] leading-relaxed mt-2">{item.a}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* PHONE CTA */}
              <div className="bg-[#c9a961] rounded-2xl p-6 text-center">
                <p className="text-xl font-semibold tracking-wider mb-2 text-[#0a0a0a]">LIGUE PARA NÓS</p>
                <p className="text-xs text-[#0a0a0a]/70 mb-4">Prefere ligar diretamente?</p>
                <a
                  href={`tel:${PHONE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#0a0a0a] text-[#c9a961] px-6 py-2.5 rounded-lg font-medium text-sm tracking-wider hover:bg-[#1a1a1a] transition-colors"
                >
                  <MessageCircle size={15} />
                  Ligar Agora
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <SocialNavbar />
    </main>
  )
}
