"use client";

import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <>
      <Head>
        <title>Mumbrane — Digital Employees</title>
        <meta
          name="description"
          content="Mumbrane builds digital employees powered by a Cognitive OS."
        />
        {/* Recommended Google Fonts for this look */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-[#FDFDFC] text-[#1a1a1a] selection:bg-black selection:text-white font-sans">
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 border-b border-black/[0.03] bg-[#FDFDFC]/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <span className="text-lg font-semibold tracking-tighter">
                MUMBRANE
              </span>
              <div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-black/50">
                <a
                  href="#product"
                  className="hover:text-black transition-colors">
                  Product
                </a>
                <a
                  href="#difference"
                  className="hover:text-black transition-colors">
                  Why Mumbrane
                </a>
                <a
                  href="#vision"
                  className="hover:text-black transition-colors">
                  Vision
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:block px-3 py-1 rounded-full border border-black/5 bg-black/[0.02] text-[11px] uppercase tracking-widest font-bold text-black/40">
                v1.0 Alpha
              </div>
              <button className="px-5 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-black/80 transition-all active:scale-95">
                Join Waitlist
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-44 pb-32 px-6">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="max-w-7xl mx-auto">
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-medium mb-8 border border-orange-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Supporting the road to Singularity
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-6xl md:text-[84px] font-medium tracking-tight leading-[0.95] max-w-5xl">
              Digital employees <br />
              <span className="font-['Instrument_Serif'] italic text-black/40">
                built on a Cognitive OS.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-10 text-xl md:text-2xl text-black/50 max-w-2xl leading-relaxed">
              Mumbrane replaces the brittleness of AI agents with a
              deterministic system that thinks, remembers, and operates like a
              human teammate.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="mt-12 flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-full bg-black text-white text-base font-medium hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-0.5 active:translate-y-0">
                Request Deployment
              </button>
              <button className="px-8 py-4 rounded-full border border-black/10 text-base font-medium hover:bg-black/5 transition-colors">
                Read the Whitepaper
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* Value Prop Cards */}
        <section
          id="difference"
          className="max-w-7xl mx-auto px-6 py-24 border-t border-black/[0.05]">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Reliability",
                desc: "Deterministic behavior grounded in explicit cognitive structure—not brittle prompt chains.",
              },
              {
                title: "Auditability",
                desc: "Every action, memory, and decision is inspectable and traceable across time.",
              },
              {
                title: "Governance",
                desc: "Clear permissions and accountability enforced at the system level.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white border border-black/[0.04] shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500">
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-black/50 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Product Philosophy */}
        <section
          id="product"
          className="bg-[#111111] text-white py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-medium tracking-tight mb-8">
                  Not an agent. <br />
                  <span className="text-white/40">
                    A Cognitive Operating System.
                  </span>
                </h2>
                <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                  <p>
                    We treat an LLM’s context window as a core system
                    primitive—the equivalent of human working memory.
                  </p>
                  <p>
                    This OS supports the <strong>Singularity</strong> by
                    creating a framework where digital labor is no longer a
                    tool, but a persistent, evolving entity capable of
                    independent collaboration.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square bg-gradient-to-tr from-white/5 to-white/10 rounded-full flex items-center justify-center border border-white/10">
                <div className="absolute inset-0 animate-pulse bg-white/5 blur-3xl rounded-full"></div>
                <div className="text-[140px] font-['Instrument_Serif'] italic opacity-20 select-none">
                  M
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision / Team Replacement */}
        <section
          id="vision"
          className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h2 className="text-4xl font-medium tracking-tight mb-8">
            A replacement for teams.
          </h2>
          <p className="text-xl text-black/50 leading-relaxed mb-8">
            One digital employee replaces the output of an entire department. No
            overhead, no operational risk, and perfect memory.
          </p>
          <div className="h-1 w-20 bg-black/10 mx-auto rounded-full"></div>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/[0.05] bg-white">
          <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-black/40">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-black/80">MUMBRANE</span>
              <span>© {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-black transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-black transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          -webkit-font-smoothing: antialiased;
        }
      `}</style>
    </>
  );
}
