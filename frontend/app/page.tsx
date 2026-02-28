"use client"

import { useState, useEffect } from "react"
import { 
  ArrowRight, 
  CalendarDays, 
  Users, 
  Bot, 
  CheckCircle2, 
  Star, 
  Zap, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Clock, 
  Search, 
  Play, 
  ChevronRight, 
  Quote, 
  TrendingUp, 
  Award, 
  Globe, 
  Lock, 
  Sparkles, 
  Video, 
  FileText, 
  Mic, 
  Headphones, 
  Monitor, 
  Smartphone, 
  Tablet, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ExternalLink,
  Layers,
  Cpu,
  Target,
  MousePointer2,
  ZapOff,
  Infinity,
  Sparkle,
  Fingerprint,
  Activity,
  Workflow,
  BrainCircuit,
  ShieldCheck,
  ZapIcon,
  SearchCode
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans overflow-x-hidden antialiased">
      {/* Technical Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b py-2 shadow-sm" : "bg-transparent py-4"
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-12">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center shadow-md group-hover:bg-blue-600 transition-colors">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                SupaMeet
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50">
              {['Capabilities', 'Intelligence', 'Pricing', 'Security'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="px-4 py-1.5 text-[13px] font-semibold text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-sm rounded-full transition-all"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link href="/dashboard">
                <Button variant="ghost" className="text-xs font-bold text-slate-600 hover:text-slate-900 h-9 px-4">
                  Log in
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button className="bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold rounded-lg h-9 px-5 transition-all shadow-sm">
                  Join Beta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest mx-auto">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              The Neural Layer for Team Execution
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-slate-900">
              Turn every word into <br />
              <span className="text-slate-400">institutional memory.</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              SupaMeet autonomously indexes every conversation, decision, and action item. 
              Replace fragmented notes with a centralized brain for your entire organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
              <Link href="/dashboard">
                <Button size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-200 transition-all">
                  Start Building Memory
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-12 px-8 border-slate-200 rounded-xl text-sm font-bold hover:bg-slate-50 transition-all group">
                <Play className="mr-2 h-4 w-4 fill-slate-900" />
                View Demo
              </Button>
            </div>

            {/* Dashboard Preview */}
            <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200">
              <div className="rounded-xl overflow-hidden border border-slate-100 aspect-video relative bg-slate-50">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-10 border-b bg-white flex items-center px-4 justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-24 h-5 bg-slate-50 rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex-1 flex p-8 gap-8">
                    <div className="w-44 space-y-6">
                      <div className="h-5 w-full bg-slate-900/5 rounded-md"></div>
                      <div className="space-y-3">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                          <div key={i} className="h-1.5 w-full bg-slate-200 rounded-full opacity-40"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 space-y-8">
                      <div className="flex justify-between items-center">
                        <div className="h-10 w-56 bg-white border border-slate-100 rounded-xl"></div>
                        <div className="w-12 h-12 rounded-full bg-blue-50/50 border border-blue-100 flex items-center justify-center">
                          <BrainCircuit className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="h-40 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                            <ZapIcon className="w-4 h-4 text-white" />
                          </div>
                          <div className="space-y-3">
                            <div className="h-2.5 w-full bg-slate-100 rounded-full"></div>
                            <div className="h-2.5 w-4/5 bg-slate-100 rounded-full"></div>
                            <div className="h-2.5 w-1/2 bg-slate-50 rounded-full"></div>
                          </div>
                        </div>
                        <div className="h-40 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
                          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center mb-4">
                            <SearchCode className="w-4 h-4 text-white" />
                          </div>
                          <div className="space-y-3">
                            <div className="h-2.5 w-full bg-slate-100 rounded-full"></div>
                            <div className="h-2.5 w-3/4 bg-slate-100 rounded-full"></div>
                            <div className="h-2.5 w-2/3 bg-slate-50 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO CLOUD */}
        <section className="py-12 border-y border-slate-100 bg-slate-50/30">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">
              Reliable Intelligence for the World's Fastest Teams
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale">
              {['Linear', 'Stripe', 'Supabase', 'GitHub', 'Vercel', 'Airbnb'].map(name => (
                 <span key={name} className="text-xl font-bold tracking-tighter text-slate-900">{name}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES - BENTO */}
        <section id="capabilities" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-2xl mb-16 space-y-4">
              <span className="text-blue-600 font-bold text-[11px] uppercase tracking-widest">Core Capabilities</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Engineered for deep focus.
              </h2>
            </div>

            <div className="grid md:grid-cols-12 gap-4">
              {/* Feature 1 */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:bg-slate-50">
                <div className="relative z-10 max-w-md text-left">
                  <div className="w-10 h-10 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Context-Aware Transcription</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Our neural engine doesn't just record words; it decodes the "why" behind every statement. 
                    Support for complex technical semantics, multi-speaker debate, and real-time sentiment analysis.
                  </p>
                </div>
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <Workflow className="w-40 h-40 text-blue-200" />
                </div>
              </div>

              {/* Feature 2 */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl border border-slate-900 bg-slate-900 p-8 text-white text-left">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Zero-Trust Security</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Enterprise-grade encryption with SOC 2 Type II compliance. We provide a sovereign data layer that guarantees privacy at every node.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 text-left">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Autonomous Action Pipelines</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Tasks are autonomously indexed, summarized, and routed to your project management stack before you hang up.</p>
              </div>

              {/* Feature 4 */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 text-left">
                <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Semantic Search History</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Query your organization's entire meeting history as if it were a single document. Instantly find the rationale for any decision.</p>
              </div>

              {/* Feature 5 */}
              <div className="md:col-span-4 group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 text-left">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Predictive Summaries</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Receive high-density executive briefings that anticipate the information your team needs to move forward.</p>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section id="intelligence" className="py-24 bg-slate-50/50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16 space-y-3">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">The End of Administrative Friction</h3>
              <p className="text-sm text-slate-500">How we solve the cognitive overhead of traditional coordination.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden shadow-sm text-left">
              <div className="bg-white p-10 space-y-8">
                <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                  <X className="w-4 h-4" /> Traditional Coordination
                </div>
                <ul className="space-y-6">
                  {[
                    { t: "Cognitive Load", d: "Recording notes while struggling to engage in debate." },
                    { t: "Administrative Lag", d: "Hours wasted after every call summarizing outcomes." },
                    { t: "Fragmented Context", d: "Key decisions lost in Slack threads or memory." }
                  ].map((item, i) => (
                    <li key={i} className="space-y-1">
                      <p className="text-sm font-bold text-slate-900 opacity-60">{item.t}</p>
                      <p className="text-xs text-slate-400">{item.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-10 space-y-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-bl-full -z-10"></div>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4" /> Deep Work Flow
                </div>
                <ul className="space-y-6">
                  {[
                    { t: "Radical Presence", d: "Full engagement while the neural engine indexes logs." },
                    { t: "Instant Intelligence", d: "Comprehensive briefings delivered automatically." },
                    { t: "Unified Memory", d: "A searchable, linked history of institutional knowledge." }
                  ].map((item, i) => (
                    <li key={i} className="space-y-1">
                      <p className="text-sm font-bold text-blue-600">{item.t}</p>
                      <p className="text-xs text-slate-500">{item.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">Scale with Intelligence</h2>
              <p className="text-sm text-slate-500">Capacity-based access for teams that prioritize efficiency.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { name: "Personal", price: "0", feat: ['5 indexing credits/mo', 'Email briefings', 'Core Integrations'], cta: "Start Indexing", best: false },
                { name: "Team Pro", price: "24", feat: ['Unlimited indexing', 'Neural Summarization', 'Custom Action Pipelines', 'Priority API'], cta: "Go Professional", best: true },
                { name: "Enterprise", price: "Custom", feat: ['Zero-Trust Architecture', 'SAML/SSO', 'Custom LLM Fine-tuning', 'SLA Guarantee'], cta: "Contact Solutions", best: false }
              ].map((plan, i) => (
                <div key={i} className={`rounded-2xl p-8 border ${plan.best ? 'border-blue-600 ring-4 ring-blue-50' : 'border-slate-100'} flex flex-col justify-between text-left`}>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-900">{plan.name}</h4>
                      {plan.best && <Badge className="bg-blue-600 text-white text-[9px] px-2 py-0">Recommended</Badge>}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-slate-900">{plan.price !== "Custom" ? `$${plan.price}` : plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-slate-400 text-xs font-bold">/mo</span>}
                    </div>
                    <ul className="space-y-4">
                      {plan.feat.map(f => (
                        <li key={f} className="flex items-center gap-3 text-xs text-slate-500 font-medium">
                          <Check className="w-4 h-4 text-blue-500" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className={`w-full mt-10 h-10 rounded-lg text-xs font-bold transition-all ${plan.best ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' : 'bg-slate-900 hover:bg-slate-800 text-white'}`}>
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-slate-50/50">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-xl font-bold text-slate-900 mb-10 text-center">Frequently Asked</h3>
            <div className="space-y-2">
              {[
                { q: "Is SupaMeet compatible with our current stack?", a: "SupaMeet integrates natively with Zoom, Google Meet, Microsoft Teams, Slack, Notion, and Jira. We also offer a robust API for custom integrations." },
                { q: "How is institutional data protected?", a: "We utilize AES-256 encryption, SOC 2 Type II compliant data centers, and offer granular permission sets. Your data is never used to train global models." },
                { q: "Can we migrate our existing meeting logs?", a: "Yes, our ingestion engine can process past video and audio recordings to retroactively index your organization's history." }
              ].map((faq, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-sm font-bold text-slate-800">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-[13px] text-slate-500 leading-relaxed text-left">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 border-t border-slate-100 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Build a better team memory.
            </h2>
            <p className="text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
              Stop recording and start indexing. Join the engineering and product teams scaling with SupaMeet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button size="lg" className="h-12 px-10 bg-slate-900 hover:bg-blue-600 text-white rounded-xl text-sm font-bold shadow-sm transition-all">
                  Join the Beta
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <span className="text-base font-bold tracking-tight">SupaMeet</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Autonomous meeting intelligence for high-performing teams. 
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:col-span-3 text-left">
              {[
                { title: "Platform", links: ["Intelligence", "Capabilities", "Pricing", "Security"] },
                { title: "Legal", links: ["Privacy Policy", "Terms of Service", "DPA"] },
              ].map((col, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest">{col.title}</h4>
                  <ul className="space-y-2">
                    {col.links.map(link => (
                      <li key={link}>
                        <Link href="#" className="text-xs text-slate-500 hover:text-blue-600 transition-colors">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex justify-between items-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              © 2026 SupaMeet AI. Precision Tools for Modern Thinking.
            </p>
            <div className="flex gap-4 opacity-40 grayscale hover:opacity-100 transition-opacity">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="text-slate-900">
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
