import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-sans bg-autumn-50 text-autumn-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 bg-autumn-900 text-autumn-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm">© {new Date().getFullYear()} Rida Khan. All rights reserved.</p>
          <a href="#home" className="text-sm hover:text-autumn-200 transition-colors">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
