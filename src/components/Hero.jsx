import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 bg-gradient-to-b from-autumn-900 via-autumn-800 to-autumn-900 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-autumn-600/20 blur-3xl" />
      <div className="absolute top-1/3 -left-16 w-64 h-64 rounded-full bg-autumn-500/10 blur-3xl" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-autumn-50">
          <p className="uppercase tracking-[0.25em] text-autumn-200/70 text-xs mb-4">Data Science • AI • MLOps</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Rida Khan
          </h1>
          <p className="mt-4 text-autumn-100/90 text-lg leading-relaxed">
            Expert in data tools and processes, leveraging cutting-edge AI to streamline workflows and deliver fast, precise results.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-autumn-500 hover:bg-autumn-400 text-autumn-900 font-semibold transition-all shadow hover:shadow-md">
              Explore My Work <ArrowRight size={18} />
            </a>
            <a href="#about" className="px-5 py-3 rounded-md border border-autumn-600 text-autumn-100 hover:bg-autumn-800/60 transition-colors">
              About Me
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="mx-auto w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-autumn-400 via-autumn-500 to-autumn-600 shadow-xl ring-4 ring-autumn-700/40 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" alt="Rida Khan portrait" className="w-full h-full object-cover mix-blend-luminosity opacity-90" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-autumn-800 text-autumn-100 px-3 py-2 rounded-lg shadow/40 shadow-autumn-900">
            <p className="text-xs">MS in Data Science & AI</p>
          </div>
          <div className="absolute -top-3 -right-3 bg-autumn-700 text-autumn-50 px-3 py-2 rounded-lg shadow/40 shadow-autumn-900">
            <p className="text-xs">AWS GenAI • Amazon Q</p>
          </div>
        </div>
      </div>
    </section>
  )
}
