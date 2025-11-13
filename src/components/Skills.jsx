export default function Skills() {
  const skills = [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'Regression/Forecasting', level: 88 },
    { name: 'Model Evaluation', level: 92 },
    { name: 'Spark', level: 80 },
    { name: 'Docker', level: 85 },
    { name: 'CI/CD (GitHub Actions)', level: 86 },
    { name: 'Streamlit', level: 87 },
  ]

  return (
    <section id="skills" className="py-20 bg-autumn-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-autumn-900 mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((s) => (
            <div key={s.name} className="p-4 rounded-lg border border-autumn-200 bg-white/80 backdrop-blur">
              <div className="flex items-center justify-between">
                <span className="font-medium text-autumn-800">{s.name}</span>
                <span className="text-autumn-700 text-sm">{s.level}%</span>
              </div>
              <div className="mt-2 h-2 rounded bg-autumn-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-autumn-400 via-autumn-500 to-autumn-600 transition-all duration-1000"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
