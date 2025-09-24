import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { loginTeacher } from '../services/api.js'

function TeacherLoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/teacher'
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <main className="min-h-dvh -mt-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="glass-panel p-8">
          <h1 className="text-3xl font-display font-bold text-center text-gray-100">Teacher Login</h1>
          <p className="mt-3 text-sm text-gray-400 text-center">Demo: teacher / teacher123</p>
          {error && <p className="mt-4 text-sm text-danger-400 text-center bg-danger-500/10 p-3 rounded-2xl border border-danger-500/20">{error}</p>}
          <form
            className="mt-8 space-y-6"
            onSubmit={async (e) => {
              e.preventDefault()
              setError('')
              setLoading(true)
              const res = await loginTeacher({ username, password })
              setLoading(false)
              if (res.success) {
                login('teacher', { id: username })
                navigate(from, { replace: true })
              } else {
                setError(res.message || 'Login failed')
              }
            }}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="input-field" placeholder="Enter your username" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input-field" placeholder="Enter your password" />
            </div>
            <button type="submit" disabled={loading} className="w-full btn-primary">{loading ? 'Logging in...' : 'Login'}</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default TeacherLoginPage


