import { useEffect, useState } from 'react'
import { fetchAdminOverview, fetchResults, createExam, createExamWithQuestions } from '../services/api.js'
import { generateExamWithAI } from '../services/ai.js'

function TeacherDashboard() {
  const [overview, setOverview] = useState({ exams: [], students: 0 })
  const [results, setResults] = useState([])
  const [title, setTitle] = useState('')
  const [duration, setDuration] = useState(30)
  const [creating, setCreating] = useState(false)
  const [aiTopic, setAiTopic] = useState('General Knowledge')
  const [aiDifficulty, setAiDifficulty] = useState('medium')
  const [aiCount, setAiCount] = useState(5)
  const [aiLoading, setAiLoading] = useState(false)
  useEffect(() => {
    fetchAdminOverview().then(setOverview)
    fetchResults().then(setResults)
  }, [])

  async function handleCreateExam(e) {
    e.preventDefault()
    setCreating(true)
    const res = await createExam({ title, durationMinutes: Number(duration) })
    setCreating(false)
    if (res.success) {
      setOverview((o) => ({ ...o, exams: [...o.exams, { id: res.id, title: res.title, questions: 0 }] }))
      setTitle('')
      setDuration(30)
    }
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-display font-bold text-gray-100">Teacher Dashboard</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <section className="lg:col-span-2 space-y-6">
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-gray-100 mb-6">Create Exam</h2>
            <form className="grid sm:grid-cols-3 gap-4" onSubmit={handleCreateExam}>
              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Exam title" className="input-field" />
              <input value={duration} onChange={(e) => setDuration(e.target.value)} type="number" min="5" className="input-field" />
              <button disabled={creating} className="btn-primary disabled:opacity-60">{creating ? 'Creating...' : 'Create'}</button>
            </form>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-gray-100 mb-6">Generate with AI</h2>
            <div className="grid sm:grid-cols-4 gap-4">
              <input value={aiTopic} onChange={(e) => setAiTopic(e.target.value)} placeholder="Topic" className="input-field sm:col-span-2" />
              <select value={aiDifficulty} onChange={(e) => setAiDifficulty(e.target.value)} className="input-field">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              <input value={aiCount} onChange={(e) => setAiCount(e.target.value)} type="number" min="3" max="20" className="input-field" />
            </div>
            <div className="mt-6">
              <button
                onClick={async () => {
                  setAiLoading(true)
                  const generated = await generateExamWithAI({ topic: aiTopic, difficulty: aiDifficulty, numQuestions: Number(aiCount), durationMinutes: Number(duration) })
                  const res = await createExamWithQuestions({ title: generated.title, durationMinutes: generated.durationMinutes, questions: generated.questions })
                  setAiLoading(false)
                  if (res.success) {
                    setOverview((o) => ({ ...o, exams: [...o.exams, { id: res.id, title: res.title, questions: generated.questions.length }] }))
                  }
                }}
                disabled={aiLoading}
                className="btn-secondary disabled:opacity-60"
              >
                {aiLoading ? 'Generating…' : 'Generate with AI'}
              </button>
              <p className="mt-3 text-xs text-gray-400 bg-dark-700/50 p-3 rounded-2xl border border-dark-600">Set VITE_OPENAI_API_KEY to use OpenAI; otherwise a smart mock is used.</p>
            </div>
          </div>
          <div className="card p-8">
            <h2 className="text-xl font-semibold text-gray-100 mb-6">Your Exams</h2>
            <ul className="space-y-3">
              {overview.exams.map((e) => (
                <li key={e.id} className="flex items-center justify-between p-4 bg-dark-700/50 rounded-2xl border border-dark-600">
                  <span className="font-medium text-gray-200">{e.title}</span>
                  <span className="text-sm text-gray-400 bg-dark-600 px-3 py-1 rounded-xl">{e.questions} questions</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <aside className="space-y-6">
          <div className="card p-8">
            <h3 className="text-xl font-semibold text-gray-100 mb-6">Performance Analytics</h3>
            {results.length === 0 ? (
              <p className="text-gray-400 bg-dark-700/50 p-4 rounded-2xl border border-dark-600">No results yet.</p>
            ) : (
              <ul className="space-y-3">
                {results.slice(-5).map((r, idx) => (
                  <li key={idx} className="flex items-center justify-between p-4 bg-dark-700/50 rounded-2xl border border-dark-600">
                    <span className="font-medium text-gray-200">{r.title}</span>
                    <span className="font-bold text-primary-400">{r.score}%</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </aside>
      </div>
    </main>
  )
}

export default TeacherDashboard


