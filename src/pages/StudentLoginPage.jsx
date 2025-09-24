import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext.jsx'
import { loginStudent } from '../services/api.js'

function StudentLoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/dashboard'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <main className="min-h-dvh -mt-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="glass-panel p-8">
          <h1 className="text-3xl font-display font-bold text-center text-gray-100">Student Login</h1>
          <p className="mt-3 text-sm text-gray-400 text-center">Demo: student@example.com / student123</p>
          {error && <p className="mt-4 text-sm text-danger-400 text-center bg-danger-500/10 p-3 rounded-2xl border border-danger-500/20">{error}</p>}
          <form
            className="mt-8 space-y-6"
            onSubmit={async (e) => {
              e.preventDefault()
              setError('')
              setLoading(true)
              const res = await loginStudent({ email, password })
              setLoading(false)
              if (res.success) {
                login('student', { id: email })
                navigate(from, { replace: true })
              } else {
                setError(res.message || 'Login failed')
              }
            }}
          >
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="input-field" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input-field" placeholder="Enter your password" />
            </div>
            <button type="submit" disabled={loading} className="w-full btn-success disabled:opacity-60">{loading ? 'Logging in...' : 'Login'}</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default StudentLoginPage


