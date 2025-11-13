export default function About() {
  return (
    <section id="about" className="py-20 bg-autumn-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-autumn-900 mb-8">About</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded-xl bg-white/70 backdrop-blur border border-autumn-200 shadow-sm">
            <h3 className="text-xl font-semibold text-autumn-800">Who I Am</h3>
            <p className="mt-3 text-autumn-700 leading-relaxed">
              I specialize across the data lifecycle with core strengths in Python, SQL, Regression, Forecasting, and Model Evaluation. I pair these with robust MLOps—Spark, Docker, CI/CD with GitHub Actions, and Streamlit—to ship production-grade systems quickly and reliably.
            </p>
            <p className="mt-3 text-autumn-700 leading-relaxed">
              My work is grounded in a simple goal: deliver measurable outcomes through thoughtful engineering and clear communication.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-autumn-100 to-autumn-200 border border-autumn-300">
            <h4 className="text-sm uppercase tracking-wider text-autumn-700">Quick Facts</h4>
            <ul className="mt-4 space-y-2 text-autumn-800">
              <li>• 91% default detection with LoanSense AI</li>
              <li>• FundSight – NAV forecasting with Prophet</li>
              <li>• Automated CI/CD with pytest</li>
              <li>• Pursuing MS in Data Science & AI</li>
              <li>• AWS GenAI: Amazon Q certified</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
