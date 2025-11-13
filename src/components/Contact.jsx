import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-autumn-100 to-autumn-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-autumn-900 mb-8">Get in touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={(e)=>e.preventDefault()} className="p-6 rounded-xl bg-white/80 backdrop-blur border border-autumn-200 shadow-sm space-y-4">
            <div>
              <label className="block text-sm text-autumn-800 mb-1">Name</label>
              <input className="w-full px-3 py-2 rounded-md bg-autumn-50 border border-autumn-200 focus:outline-none focus:ring-2 focus:ring-autumn-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-autumn-800 mb-1">Email</label>
              <input type="email" className="w-full px-3 py-2 rounded-md bg-autumn-50 border border-autumn-200 focus:outline-none focus:ring-2 focus:ring-autumn-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-autumn-800 mb-1">Message</label>
              <textarea rows={4} className="w-full px-3 py-2 rounded-md bg-autumn-50 border border-autumn-200 focus:outline-none focus:ring-2 focus:ring-autumn-400" placeholder="Say hello..." />
            </div>
            <button className="inline-flex items-center px-4 py-2 rounded-md bg-autumn-600 hover:bg-autumn-500 text-autumn-900 font-semibold transition-colors">
              Send Message
            </button>
          </form>
          <div className="p-6 rounded-xl bg-autumn-900 text-autumn-50 border border-autumn-700/50">
            <h3 className="font-semibold text-autumn-100">Let’s connect</h3>
            <p className="mt-2 text-autumn-200/80">Open to roles, collaborations, and conversations on data, AI, and MLOps.</p>
            <div className="mt-6 flex items-center gap-4">
              <a href="mailto:hello@ridakhansite.com" className="inline-flex items-center gap-2 hover:text-autumn-200 transition-colors"><Mail size={18}/> Email</a>
              <a href="#" className="inline-flex items-center gap-2 hover:text-autumn-200 transition-colors"><Linkedin size={18}/> LinkedIn</a>
              <a href="#" className="inline-flex items-center gap-2 hover:text-autumn-200 transition-colors"><Github size={18}/> GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
