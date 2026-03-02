import React from "react";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="bg-[#141413] text-[#FAF9F5] min-h-screen selection:bg-[#7197CF] selection:text-[#141413]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#FAF9F5] max-w-4xl leading-tight">
            Hire Human like Digital Employees
          </h1>
          <p className="mt-8 text-xl text-[#6A6963] max-w-2xl leading-relaxed">
            Deploy role-specific AI employees that remember every conversation,
            track every project, and deliver 10x ROI—without sick days,
            turnover, or training costs.
          </p>
          <div className="mt-10">
            <button className="bg-[#7197CF] text-[#141413] px-8 py-4 cursor-pointer rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105 shadow-[0_0_20px_rgba(113,151,207,0.3)]">
              Book a Call
            </button>
          </div>
        </section>

        {/* Section 1: The Problem */}
        <section className="py-24 px-6 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold mb-6">
                Your Teams Are Drowning In Context Loss
              </h2>
            </div>
            <ul className="space-y-6 text-lg text-[#6A6963]">
              <li className="flex items-start gap-4">
                <span className="text-[#7197CF] mt-1">✦</span>
                Projects lose momentum when employees leave or switch roles
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#7197CF] mt-1">✦</span>
                Critical knowledge lives in someone's head—until they're
                unavailable
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#7197CF] mt-1">✦</span>
                Coordination overhead kills productivity across distributed
                teams
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#7197CF] mt-1">✦</span>
                Onboarding takes months before new hires become productive
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: The Mumbrane Difference */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16 text-center">
            Digital Employees That Work Like Your Best People—
            <span className="text-[#7197CF]">But Better</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Never Forgets",
                desc: "Permanent institutional memory across all projects and discussions. Every conversation, decision, and context persists indefinitely—like git for organizational knowledge.",
              },
              {
                title: "Always Aligned",
                desc: "Built-in mission control tracks goals, priorities, and progress. Your digital employees know exactly what to work on and why, without micromanagement.",
              },
              {
                title: "Infinitely Scalable",
                desc: "Handles projects too large for single-agent context. Automatically spawns coordinating sub-agents to manage massive codebases and complex initiatives.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl cursor-pointer border border-white/10 bg-white/[0.01] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:bg-white/[0.03] hover:border-[#7197CF]/30">
                <h3 className="text-xl font-medium text-[#FAF9F5] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#6A6963] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Core Capabilities */}
        <section className="py-24 px-6 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold mb-16 text-center">
              Built For Enterprise Work, Not Parlor Tricks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Discussions & Meetings",
                  desc: "Have actual conversations with your digital employees. Reorganize priorities, clarify goals, get status updates—just like managing human reports.",
                },
                {
                  title: "Mission Control Dashboard",
                  desc: "Trello-like visibility into every employee's tasks, blockers, and progress. Know exactly what's being worked on across your entire digital workforce.",
                },
                {
                  title: "Multi-Month Project Memory",
                  desc: "Maintains context on initiatives spanning months or years. Projects never lose momentum due to memory constraints or employee turnover.",
                },
                {
                  title: "Governance & Approvals",
                  desc: "Set granular permissions for what requires approval. Execute tasks in sandbox mode with pull-request-style reviews before production changes.",
                },
                {
                  title: "Complete Audit Trail",
                  desc: "Detailed logs of every action, decision, and change. Full transparency into what was done, when, how, and why.",
                },
                {
                  title: "Git-Like State Management",
                  desc: "Roll back any employee's memory to previous states. Experiment freely, knowing you can always restore to known-good configurations.",
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border cursor-pointer border-white/10 transition-all duration-300 ease-in-out hover:border-[#7197CF]/50">
                  <h3 className="text-lg font-medium text-[#FAF9F5] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#6A6963] text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Role-Specific Employees */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-semibold max-w-2xl">
              Pre-Configured For Your Department's Actual Work
            </h2>
            <a
              href="#"
              className="hidden md:block text-[#7197CF] hover:underline transition-all duration-300">
              See Full Role Catalog &rarr;
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: "Marketing Analyst",
                desc: "Campaign tracking, ROI analysis, competitive intelligence. Maintains brand voice and messaging consistency across all channels.",
              },
              {
                role: "Junior Software Engineer",
                desc: "Code reviews, documentation, bug triage, test automation. Learns your codebase architecture and coding standards.",
              },
              {
                role: "Social Media Manager",
                desc: "24/7 engagement, content scheduling, audience analytics. Remembers every brand interaction and community conversation.",
              },
              {
                role: "Operations Coordinator",
                desc: "Process documentation, data entry, workflow automation. Tracks cross-functional projects and stakeholder communications.",
              },
            ].map((role, i) => (
              <div
                key={i}
                className="p-6 rounded-xl cursor-pointer bg-white/[0.03] border border-transparent transition-all duration-300 ease-in-out hover:bg-white/[0.05] hover:border-white/10">
                <div className="h-10 w-10 rounded-full bg-[#7197CF]/20 mb-4 flex items-center justify-center text-[#7197CF]">
                  ❖
                </div>
                <h3 className="text-lg font-medium text-[#FAF9F5] mb-2">
                  {role.role}
                </h3>
                <p className="text-[#6A6963] text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="block md:hidden text-[#7197CF] mt-8 hover:underline transition-all duration-300">
            See Full Role Catalog &rarr;
          </a>
        </section>

        {/* Section 5: Technical Foundation */}
        <section className="py-24 px-6 border-t border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold mb-16 text-center">
              Enterprise-Grade Architecture, <br className="hidden md:block" />
              Not A Chatbot With Tools
            </h2>
            <div className="space-y-12 max-w-4xl mx-auto">
              {[
                {
                  title: "Hybrid Context Orchestration",
                  desc: "Intelligent memory loading only pulls relevant context for each task. No wasted tokens on irrelevant history—optimized for cost and performance.",
                },
                {
                  title: "Project State Decomposition",
                  desc: "When projects exceed context windows, sub-agents automatically coordinate on specific file chunks. Scale to codebases of any size.",
                },
                {
                  title: "Skill Cortex System",
                  desc: "Capabilities loaded on-demand instead of flooding every prompt. Efficient, targeted tool use for complex enterprise workflows.",
                },
              ].map((tech, i) => (
                <div
                  key={i}
                  className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.02]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#7197CF]/10 border border-[#7197CF]/20 flex items-center justify-center text-[#7197CF] font-mono text-xl">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-[#FAF9F5] mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-[#6A6963]">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Security & Compliance */}
        <section className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl font-semibold mb-10">
            Your Data Never Leaves Your Control
          </h2>
          <ul className="space-y-4 text-left inline-block mb-10">
            {[
              "SOC 2 Type II certified infrastructure",
              "On-premise deployment options available",
              "Role-based access control and audit logging",
              "Sandbox execution for high-risk operations",
              "Complete data export and deletion capabilities",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[#6A6963] text-lg">
                <svg
                  className="w-5 h-5 text-[#7197CF] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"></path>
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="text-[#7197CF] hover:text-[#FAF9F5] transition-all duration-300 border-b border-[#7197CF]/30 hover:border-[#FAF9F5] pb-1">
            View Security Documentation &rarr;
          </a>
        </section>

        {/* Section 7: Final CTA */}
        <section className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-[#7197CF]/5 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FAF9F5]">
              See What Your Digital Workforce Could Accomplish
            </h2>
            <p className="text-xl text-[#6A6963] mb-10 leading-relaxed">
              Book a 30-minute consultation to discuss your specific use case.
              We'll show you exactly how Mumbrane employees would integrate into
              your operations.
            </p>
            <button className="bg-[#FAF9F5] text-[#141413] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ease-in-out hover:bg-[#7197CF] hover:scale-105">
              Book Enterprise Demo
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
