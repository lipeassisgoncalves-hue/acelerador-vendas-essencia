import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  Gem,
  Gift,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
} from 'lucide-react'
import { questions } from './data/quiz'
import { offer } from './data/offer'
import { getProfile } from './utils/profile'
import { loadDiagnosis, saveDiagnosis } from './utils/storage'

function currency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0,
  }).format(value || 0)
}

function Hero() {
  return (
    <header className="bg-hero-texture bg-cover bg-center">
      <nav className="section-shell flex items-center justify-between py-5">
        <a href="#topo" className="flex items-center gap-2 font-display text-xl font-extrabold text-espresso">
          <Gem className="h-6 w-6 text-gold" />
          Essencia
        </a>
        <div className="hidden items-center gap-7 text-sm font-semibold text-cacao/80 md:flex">
          <a href="#diagnostico" className="hover:text-espresso">Quiz</a>
          <a href="#simulador" className="hover:text-espresso">Simulador</a>
          <a href="#oferta" className="hover:text-espresso">Oferta</a>
        </div>
        <a href="#diagnostico" className="btn-secondary hidden sm:inline-flex">
          Comecar diagnostico
        </a>
      </nav>

      <section id="topo" className="section-shell grid min-h-[calc(100vh-84px)] items-center gap-10 pb-14 pt-8 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-3xl">
          <p className="eyebrow">Acelerador de Vendas Essencia</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.02] text-espresso sm:text-6xl lg:text-7xl">
            Metodo Essencia
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cacao/80 sm:text-xl">
            Um funil inteligente para nail designers que querem transformar tecnica em agenda cheia, preco valorizado e vendas mais leves pelo Instagram e WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#diagnostico" className="btn-primary">
              Fazer meu diagnostico
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#oferta" className="btn-secondary">
              Ver oferta
            </a>
          </div>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-cacao/80 sm:grid-cols-3">
            {['Posicionamento premium', 'Vendas por WhatsApp', 'Oferta pronta para acao'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="panel p-4 sm:p-6">
          <div className="overflow-hidden rounded-md bg-porcelain">
            <img
              src="https://images.unsplash.com/photo-1610992015732-2449b0dd3ff3?auto=format&fit=crop&w=1200&q=80"
              alt="Nail designer atendendo cliente em estudio elegante"
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>
          <div className="grid gap-3 pt-5 sm:grid-cols-3">
            {[
              ['+ clareza', 'no que oferecer'],
              ['+ valor', 'por atendimento'],
              ['+ agenda', 'com previsibilidade'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-md bg-cream px-4 py-3">
                <p className="text-lg font-extrabold text-espresso">{title}</p>
                <p className="text-xs font-semibold uppercase tracking-wide text-cacao/58">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </header>
  )
}

function MethodSection() {
  const pillars = [
    { icon: Target, title: 'Posicionamento', text: 'Clareza para comunicar seu diferencial e sair da briga por preco.' },
    { icon: Sparkles, title: 'Desejo', text: 'Conteudos e ofertas que fazem a cliente perceber valor antes do agendamento.' },
    { icon: HeartHandshake, title: 'Conversao', text: 'Roteiros simples para transformar interesse em horario marcado.' },
  ]

  return (
    <section className="bg-porcelain py-16 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">O metodo</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-espresso sm:text-5xl">
            Venda beleza com estrategia, nao com pressa.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }) => (
            <article key={title} className="panel p-6">
              <Icon className="h-9 w-9 text-gold" />
              <h3 className="mt-5 text-xl font-extrabold text-espresso">{title}</h3>
              <p className="mt-3 leading-7 text-cacao/72">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuizSection({ diagnosis, setDiagnosis }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState(diagnosis?.answers || {})
  const current = questions[step]
  const progress = ((step + 1) / questions.length) * 100

  function selectAnswer(option) {
    const nextAnswers = { ...answers, [current.id]: option }
    setAnswers(nextAnswers)

    if (step < questions.length - 1) {
      setStep((value) => value + 1)
      return
    }

    const score = Object.values(nextAnswers).reduce((sum, answer) => sum + answer.score, 0)
    const profile = getProfile(score)
    const result = { answers: nextAnswers, score, profile }
    saveDiagnosis(result)
    setDiagnosis(result)
    document.getElementById('resultado')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="diagnostico" className="bg-cream py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="eyebrow">Diagnostico inteligente</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-espresso sm:text-5xl">
            Descubra onde suas vendas estao travando.
          </h2>
          <p className="mt-4 leading-8 text-cacao/75">
            Responda perguntas rapidas e receba uma leitura objetiva do seu momento: o que ajustar primeiro, onde existe potencial e como vender com mais seguranca.
          </p>
        </div>

        <div className="panel p-5 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-bold text-cacao/68">
              Pergunta {step + 1} de {questions.length}
            </span>
            <span className="rounded-full bg-gold/12 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-gold">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-nude/25">
            <div className="h-full rounded-full bg-gold transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-3 flex justify-between text-[11px] font-bold uppercase tracking-wide text-cacao/45">
            <span>Inicio</span>
            <span>Diagnostico</span>
            <span>Resultado</span>
          </div>
          <h3 className="mt-7 text-2xl font-extrabold text-espresso">{current.title}</h3>
          <div className="mt-6 grid gap-3">
            {current.options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => selectAnswer(option)}
                className="flex min-h-16 items-center justify-between gap-4 rounded-md border border-nude/40 bg-white px-4 py-4 text-left font-bold text-cacao transition hover:border-gold hover:shadow-gold focus:outline-none focus:ring-4 focus:ring-gold/20"
              >
                <span>{option.label}</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-gold" />
              </button>
            ))}
          </div>
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((value) => value - 1)}
              className="mt-5 text-sm font-bold text-cacao/62 underline decoration-gold/50 underline-offset-4 hover:text-espresso"
            >
              Voltar uma pergunta
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

function ResultSection({ diagnosis }) {
  if (!diagnosis?.profile) {
    return (
      <section id="resultado" className="bg-porcelain py-14">
        <div className="section-shell">
          <div className="panel p-7 text-center">
            <p className="eyebrow">Resultado</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-espresso">
              Faca o quiz para liberar sua leitura personalizada.
            </h2>
          </div>
        </div>
      </section>
    )
  }

  const { score } = diagnosis
  const profile = getProfile(score) || diagnosis.profile
  const resultCards = [
    ['Diagnostico', profile.diagnosis],
    ['Principal problema', profile.problem],
    ['Oportunidade de crescimento', profile.opportunity],
    ['Como o Metodo Essencia pode ajudar', profile.methodHelp],
  ]

  return (
    <section id="resultado" className="bg-porcelain py-16 sm:py-20">
      <div className="section-shell">
        <div className="panel overflow-hidden">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-espresso p-7 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold">Seu perfil</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">{profile.name}</h2>
              <p className="mt-5 text-white/78">Pontuacao estrategica: {score} de 15</p>
              <div className="mt-7 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
            </div>
            <div className="p-7 sm:p-10">
              <h3 className="text-2xl font-extrabold text-espresso">{profile.headline}</h3>
              <div className="mt-6 grid gap-3">
                {resultCards.map(([title, text]) => (
                  <div key={title} className="rounded-md border border-gold/15 bg-cream p-4">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-gold">{title}</p>
                    <p className="mt-2 leading-7 text-cacao/76">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {profile.focus.map((item) => (
                  <div key={item} className="rounded-md bg-cream p-4">
                    <BadgeCheck className="h-5 w-5 text-gold" />
                    <p className="mt-3 text-sm font-extrabold text-cacao">{item}</p>
                  </div>
                ))}
              </div>
              <a href="#oferta" className="btn-primary mt-8">
                Quero aplicar isso no meu negocio
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SimulatorSection() {
  const [weeklyClients, setWeeklyClients] = useState(8)
  const [ticket, setTicket] = useState(85)
  const [newClients, setNewClients] = useState(10)

  const monthlyClients = weeklyClients * 4
  const currentRevenue = monthlyClients * ticket
  const projectedRevenue = (monthlyClients + newClients) * ticket
  const monthlyGain = projectedRevenue - currentRevenue
  const growthPercent = currentRevenue > 0 ? Math.round((monthlyGain / currentRevenue) * 100) : 0
  const currentBar = projectedRevenue > 0 ? Math.max(8, Math.round((currentRevenue / projectedRevenue) * 100)) : 0

  return (
    <section id="simulador" className="bg-cream py-16 sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="eyebrow">Simulador financeiro</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-espresso sm:text-5xl">
            Simule o impacto de conquistar novas clientes.
          </h2>
          <p className="mt-4 leading-8 text-cacao/75">
            Preencha sua realidade de hoje e veja, de forma simples, como pequenas melhorias na captacao podem mudar a previsao do mes.
          </p>
          <div className="mt-6 rounded-md border border-gold/20 bg-porcelain p-4">
            <p className="text-sm font-bold leading-6 text-cacao/72">
              A conta usa uma estimativa de 4 semanas por mes. Ela nao promete resultado, mas ajuda voce a enxergar o tamanho da oportunidade.
            </p>
          </div>
        </div>
        <div className="panel p-5 sm:p-7">
          <div className="grid gap-5">
            <Slider
              label="Quantas clientes atende por semana"
              value={weeklyClients}
              setValue={setWeeklyClients}
              min={1}
              max={35}
              suffix=" clientes"
            />
            <Slider
              label="Valor medio por atendimento"
              value={ticket}
              setValue={setTicket}
              min={40}
              max={300}
              step={5}
              prefix="R$ "
            />
            <Slider
              label="Novas clientes desejadas por mes"
              value={newClients}
              setValue={setNewClients}
              min={0}
              max={50}
              suffix=" clientes"
            />
          </div>
          <div className="mt-7 grid gap-3 lg:grid-cols-3">
            <Metric label="Faturamento atual estimado" value={currency(currentRevenue)} helper={`${monthlyClients} atendimentos/mes`} />
            <Metric label="Com novas clientes" value={currency(projectedRevenue)} helper={`${monthlyClients + newClients} atendimentos/mes`} highlighted />
            <Metric label="Crescimento possivel" value={currency(monthlyGain)} helper={`+${growthPercent}% no mes`} />
          </div>
          <div className="mt-7 rounded-md bg-cream p-4">
            <div className="flex items-center justify-between gap-3 text-sm font-extrabold text-cacao">
              <span>Hoje</span>
              <span>{currency(currentRevenue)}</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-nude/25">
              <div className="h-full rounded-full bg-nude" style={{ width: `${currentBar}%` }} />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 text-sm font-extrabold text-espresso">
              <span>Com novas clientes</span>
              <span>{currency(projectedRevenue)}</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-gold/20">
              <div className="h-full rounded-full bg-gold" style={{ width: '100%' }} />
            </div>
            <p className="mt-5 rounded-md bg-white p-4 text-center font-extrabold leading-7 text-cacao">
              Conquistar {newClients} novas clientes por mes pode representar {currency(monthlyGain)} a mais no seu caixa mensal.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Slider({ label, value, setValue, min, max, step = 1, prefix = '', suffix = '' }) {
  function updateValue(rawValue) {
    const nextValue = Number(rawValue)
    if (Number.isNaN(nextValue)) {
      setValue(min)
      return
    }

    setValue(Math.min(max, Math.max(min, nextValue)))
  }

  return (
    <label className="block">
      <span className="flex items-center justify-between gap-4 text-sm font-extrabold text-cacao">
        {label}
        <span className="rounded-full bg-gold/12 px-3 py-1 text-gold">
          {prefix}{value}{suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => updateValue(event.target.value)}
        className="mt-3 h-2 w-full cursor-pointer accent-gold"
      />
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => updateValue(event.target.value)}
        className="mt-3 w-full rounded-md border border-nude/40 bg-white px-4 py-3 text-sm font-bold text-cacao outline-none focus:border-gold focus:ring-4 focus:ring-gold/20"
      />
    </label>
  )
}

function Metric({ label, value, helper, highlighted = false }) {
  return (
    <div className={`rounded-md p-4 ${highlighted ? 'bg-espresso text-white' : 'bg-cream text-cacao'}`}>
      <p className={`text-xs font-bold uppercase tracking-wide ${highlighted ? 'text-gold' : 'text-cacao/56'}`}>{label}</p>
      <p className="mt-2 text-2xl font-extrabold">{value}</p>
      {helper && <p className={`mt-2 text-xs font-bold ${highlighted ? 'text-white/65' : 'text-cacao/55'}`}>{helper}</p>}
    </div>
  )
}

function OfferSection() {
  return (
    <section id="oferta" className="bg-porcelain py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">Oferta Hotmart</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-espresso sm:text-5xl">
              Transforme seu diagnostico em um plano de vendas mais claro.
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-cacao/75">
              O Metodo Essencia foi criado para nail designers que querem parar de depender de postagens soltas e comecar a vender com posicionamento, rotina e conversas mais bem conduzidas.
            </p>
            <p className="mt-4 max-w-2xl rounded-md border border-gold/20 bg-cream p-4 font-bold leading-7 text-cacao">
              Se voce quer organizar sua comunicacao, valorizar seus servicos e conduzir clientes com mais seguranca, este e o proximo passo natural depois do diagnostico.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {offer.bonuses.map((bonus) => (
                <div key={bonus} className="flex gap-3 rounded-md bg-cream p-4">
                  <Gift className="h-5 w-5 shrink-0 text-gold" />
                  <span className="font-bold text-cacao">{bonus}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="panel p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <Calculator className="h-9 w-9 text-gold" />
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-cacao/55">Investimento</p>
                <p className="font-display text-4xl font-extrabold text-espresso">{offer.priceLabel}</p>
              </div>
            </div>
            <p className="mt-2 text-sm font-semibold text-cacao/65">{offer.fullPriceLabel}</p>
            <div className="mt-6 flex gap-3 rounded-md border border-sage/20 bg-sage/10 p-4">
              <ShieldCheck className="h-6 w-6 shrink-0 text-sage" />
              <p className="font-bold text-cacao">{offer.guarantee}. Entre, veja o conteudo e decida com tranquilidade.</p>
            </div>
            <a href={offer.checkoutUrl} target="_blank" rel="noreferrer" className="btn-primary mt-7 w-full">
              Quero comecar o Metodo Essencia agora
              <TrendingUp className="h-4 w-4" />
            </a>
            <p className="mt-4 text-center text-sm font-bold leading-6 text-cacao/72">
              Entre hoje e use o metodo para ajustar sua oferta, sua comunicacao e seu atendimento comercial com mais intencao.
            </p>
            <p className="mt-4 text-center text-xs font-semibold text-cacao/55">
              Compra processada pela Hotmart em ambiente seguro.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function WhatsAppButton() {
  return (
    <a
      href={offer.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}

function Footer() {
  return (
    <footer className="bg-espresso py-8 text-white">
      <div className="section-shell flex flex-col gap-3 text-sm font-semibold text-white/68 sm:flex-row sm:items-center sm:justify-between">
        <p>Acelerador de Vendas Essencia</p>
        <p>Funil v1 sem backend, com dados temporarios no navegador.</p>
      </div>
    </footer>
  )
}

export default function App() {
  const initialDiagnosis = useMemo(() => loadDiagnosis(), [])
  const [diagnosis, setDiagnosis] = useState(initialDiagnosis)

  return (
    <main>
      <Hero />
      <MethodSection />
      <QuizSection diagnosis={diagnosis} setDiagnosis={setDiagnosis} />
      <ResultSection diagnosis={diagnosis} />
      <SimulatorSection />
      <OfferSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
