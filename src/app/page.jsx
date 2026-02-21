"use client";

import { BrainCog } from "lucide-react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mumbrane — The Cognitive Operating System</title>
        <meta
          name="description"
          content="A blueprint for stateful, governed digital employees. Currently in development."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="min-h-screen bg-white text-neutral-900 font-sans scroll-smooth">
        {/* NAV */}
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <span className="flex tracking-tight cursor-pointer hover:text-neutral-600 transition-colors duration-200 text-xl">
              <BrainCog className="mr-1 mt-0.5" />
              Mumbrane
            </span>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                Development Phase: 0.1-Alpha
              </span>
              <a
                href="https://x.com/rishi_sidharda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400">
                Follow on X
              </a>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-24 sm:pt-32 pb-28">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-neutral-500 uppercase bg-neutral-100 rounded transition-all duration-300 hover:bg-neutral-200">
            Technical Vision & Architecture
          </div>
          <div className="inline-block px-3 py-1 mb-6 ml-2 text-xs font-semibold tracking-widest text-white uppercase bg-neutral-900 rounded transition-all duration-300 hover:bg-neutral-800">
            Cognitive Base for ASI
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.1] transition-all duration-500 hover:translate-x-1">
            An Operating System Designed for{" "}
            <span className="text-neutral-400 italic">Autonomous Agents.</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-neutral-600 max-w-3xl leading-relaxed transition-opacity duration-300">
            Mumbrane is a{" "}
            <span className="italic">
              cognitive kernel currently in development
            </span>
            . We are building the missing system layer that gives AI a{" "}
            <span className="italic">"Silicon Hippocampus"</span>—enabling a
            perfect SUPER Human like cognition ability
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://x.com/rishi_sidharda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-md bg-neutral-900 text-white font-medium hover:translate-y-[-1px] hover:shadow-lg transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-neutral-400">
              Get Architecture Updates
            </a>

            <a
              href="mailto:rishisidharda.n@gmail.com"
              className="inline-block px-6 py-3 rounded-md border cursor-pointer border-neutral-300 font-medium hover:bg-neutral-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-300">
              Contact founder
            </a>
          </div>
        </section>

        {/* COGNITIVE MODULES - The Core of Mumbrane */}
        <section className="bg-neutral-50 border-t border-neutral-200 transition-all duration-500">
          <div className="max-w-7xl mx-auto px-6 py-24">
            <h2 className="text-3xl font-semibold mb-6 transition-all duration-300">
              The Building Blocks of <span className="italic">ASI</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mb-12 transition-opacity duration-300">
              To replicate <span className="italic">human-level cognition</span>
              , we are developing a modular kernel architecture that moves
              beyond <span className="italic">stateless chat</span>.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                [
                  "Episodic Memory",
                  "Permanent, multi-session experience logging using nano-chunking.",
                ],
                [
                  "Skill Cortex",
                  "A modular library of permissioned drivers for tool execution.",
                ],
                [
                  "Lookahead Planning",
                  "Recursive self-correction and mental simulation of outcomes.",
                ],
                [
                  "Global Goal Tracking",
                  "Persistent 'North Star' monitoring for multi-day tasks.",
                ],
                [
                  "State Manager",
                  "Hierarchical project snapshots to resume work instantly.",
                ],
                [
                  "Governance Handshake",
                  "Explicit authorization protocols for high-risk actions.",
                ],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="p-8 bg-white border border-neutral-200 rounded-lg hover:border-neutral-400 hover:shadow-md transition-all duration-300 group transform hover:-translate-y-1">
                  <h3 className="font-semibold mb-2 group-hover:text-black transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed transition-colors duration-200">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PERSPECTIVE SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-28 border-t border-neutral-100">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-8 transition-all duration-300">
                From <span className="italic">"Chat"</span> to{" "}
                <span className="italic">"Employ"</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 transition-opacity duration-300">
                By adjusting{" "}
                <strong className="italic">
                  boundaries, priorities, and authorizations
                </strong>
                , Mumbrane allows you to specialize the kernel into{" "}
                <span className="italic">any digital employee</span>—from a
                Junior Software Engineer to a Compliance Sentinel.
              </p>
              <p className="text-neutral-600 leading-relaxed transition-opacity duration-300">
                We are <span className="italic">currently refining</span> the{" "}
                <strong>Memory Auditing</strong> interface to allow humans to
                inspect and "reset" agent experiences without deleting the
                entire personality.
              </p>
            </div>
            <div className="bg-neutral-900 rounded-2xl p-10 text-white font-mono text-sm shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 transition-transform duration-300 hover:scale-110" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 transition-transform duration-300 hover:scale-110" />
                <div className="w-3 h-3 rounded-full bg-green-500 transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="text-neutral-400 transition-colors duration-200 hover:text-neutral-300">
                # Initializing Digital_Employ_v0.1
              </div>
              <div className="mt-2 text-green-400 transition-all duration-200 hover:text-green-300">
                &gt; Loading Skill_Cortex: ["DevOps", "Python"]
              </div>
              <div className="mt-1 text-blue-400 transition-all duration-200 hover:text-blue-300">
                &gt; Retrieving_Episodic_State: "Project_Alpha"
              </div>
              <div className="mt-1 text-neutral-200 transition-all duration-200 hover:text-white">
                &gt; Goal: "Patch Memory Leak"
              </div>
              <div className="mt-4 animate-pulse">
                _ Running Lookahead_Simulations...
              </div>
            </div>
          </div>
        </section>

        {/* STATUS / CTA */}
        <section className="bg-neutral-900 text-white border-t border-neutral-800 transition-all duration-500">
          <div className="max-w-7xl mx-auto px-6 py-24 text-center">
            <h2 className="text-3xl font-semibold mb-6 transition-all duration-300">
              Participate in the Development
            </h2>
            <p className="text-neutral-300 max-w-2xl mx-auto mb-10 transition-opacity duration-300">
              Mumbrane is{" "}
              <span className="italic">currently a conceptual framework</span>{" "}
              moving into <span className="italic">active prototyping</span>.
              Join our technical mailing list for architectural deep-dives and
              early repo access.
            </p>
            <a
              href="mailto:rishisidharda.n@gmail.com?subject=Private%20Updates&body=Hi%20Rishi,"
              className="inline-block px-8 py-3 rounded-md cursor-pointer bg-white text-neutral-900 font-medium hover:translate-y-[-1px] hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get Private Updates
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-neutral-200 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
            <span className="transition-colors duration-200 hover:text-neutral-700">
              © {new Date().getFullYear()} Mumbrane Systems
            </span>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="cursor-not-allowed transition-colors duration-200 hover:text-neutral-400">
                GitHub <span className="italic">(Soon)</span>
              </span>
              <span className="cursor-not-allowed transition-colors duration-200 hover:text-neutral-400">
                Documentation
              </span>
              <span className="cursor-not-allowed transition-colors duration-200 hover:text-neutral-400">
                Rishi Sidharda
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
