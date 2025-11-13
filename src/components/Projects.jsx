import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'LoanSense AI',
    desc: 'End-to-end credit risk prediction system with real-time dashboard.',
    tech: ['Python', 'scikit-learn', 'Streamlit', 'Docker'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop',
    links: {
      demo: '#',
      code: '#'
    }
  },
  {
    title: 'FundSight',
    desc: 'Time series forecasting for mutual fund NAV trends using Prophet.',
    tech: ['Python', 'Prophet', 'Pandas'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    links: {
      demo: '#',
      code: '#'
    }
  },
  {
    title: 'CI/CD Automation',
    desc: 'Automated Python pipeline with GitHub Actions and pytest.',
    tech: ['GitHub Actions', 'pytest', 'Docker'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop',
    links: {
      demo: '#',
      code: '#'
    }
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-autumn-50 to-autumn-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-autumn-900 mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-autumn-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-40 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-autumn-900/30 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-autumn-900">{p.title}</h3>
                <p className="mt-2 text-sm text-autumn-700">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-autumn-100 text-autumn-800 border border-autumn-200">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.links.demo} className="inline-flex items-center gap-1 text-autumn-800 hover:text-autumn-600 font-medium">
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a href={p.links.code} className="inline-flex items-center gap-1 text-autumn-800 hover:text-autumn-600 font-medium">
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
