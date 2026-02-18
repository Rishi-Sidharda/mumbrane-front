import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mumbrane — Digital Employees</title>
        <meta
          name="description"
          content="Mumbrane builds digital employees powered by a Cognitive OS."
        />
      </Head>

      <div className="min-h-screen bg-[#FAFAF9] text-[#111111] font-sans">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-[#FAFAF9]/80 backdrop-blur border-b border-black/5">
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <div className="text-lg font-medium tracking-tight">Mumbrane</div>
            <div className="hidden md:flex items-center gap-8 text-sm text-black/70">
              <a href="#product" className="hover:text-black">
                Product
              </a>
              <a href="#difference" className="hover:text-black">
                Why Mumbrane
              </a>
              <a href="#vision" className="hover:text-black">
                Vision
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-1.5 text-sm rounded-full bg-black text-white">
                In development
              </button>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 pt-40 pb-32">
          <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.05] max-w-4xl">
            Digital employees
            <br /> built on a Cognitive OS
          </h1>
          <p className="mt-8 text-lg text-black/60 max-w-2xl">
            Mumbrane builds digital employees that think, remember, collaborate,
            and operate like humans — with enterprise-grade reliability and
            governance.
          </p>
          <div className="mt-12 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-black text-white text-sm">
              Private development
            </button>
            <button className="px-6 py-3 rounded-full border border-black/10 text-sm text-black/70">
              Learn more
            </button>
          </div>
        </section>

        {/* Product */}
        <section id="product" className="max-w-7xl mx-auto px-8 py-28">
          <h2 className="text-3xl font-medium max-w-3xl">
            Not an agent. Not a workflow.
          </h2>
          <p className="mt-6 text-black/60 max-w-3xl">
            Mumbrane is a Cognitive Operating System that treats an LLM’s
            context window the same way humans use working memory — as a core
            system primitive. Memory, reasoning, collaboration, and
            accountability are built into the OS itself.
          </p>
        </section>

        {/* Difference */}
        <section id="difference" className="bg-white border-y border-black/5">
          <div className="max-w-7xl mx-auto px-8 py-28">
            <h2 className="text-3xl font-medium">Why Mumbrane</h2>
            <div className="grid md:grid-cols-3 gap-12 mt-14">
              <div>
                <h3 className="text-base font-medium">Reliability</h3>
                <p className="mt-3 text-black/60">
                  Deterministic behavior grounded in explicit cognitive
                  structure — not brittle prompt chains.
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium">Auditability</h3>
                <p className="mt-3 text-black/60">
                  Every action, memory, and decision is inspectable and
                  traceable across time.
                </p>
              </div>
              <div>
                <h3 className="text-base font-medium">Governance</h3>
                <p className="mt-3 text-black/60">
                  Clear permissions, boundaries, and accountability — enforced
                  at the system level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="max-w-7xl mx-auto px-8 py-28">
          <h2 className="text-3xl font-medium max-w-3xl">
            A replacement for teams
          </h2>
          <p className="mt-6 text-black/60 max-w-3xl">
            A Mumbrane digital employee can remember conversations across time,
            attend meetings with other digital employees, and collaborate
            asynchronously like a real team member.
          </p>
          <p className="mt-6 text-black/60 max-w-3xl">
            In practice, one digital employee replaces the output of an entire
            team — without the overhead or operational risk.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-black/5">
          <div className="max-w-7xl mx-auto px-8 py-16 flex flex-col md:flex-row justify-between text-sm text-black/50">
            <div>© {new Date().getFullYear()} Mumbrane</div>
            <div className="mt-4 md:mt-0">Digital labor, redefined</div>
          </div>
        </footer>
      </div>
    </>
  );
}
