import { useState } from 'react'
import { registerUser } from '../services/api.js'
import { useNavigate } from 'react-router-dom'

function RegisterPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('STUDENT')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  return (
    <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="glass-panel p-8">
        <h1 className="text-3xl font-display font-bold text-gray-100">Create your account</h1>
        {error && <p className="mt-4 text-sm text-danger-400 bg-danger-500/10 p-3 rounded-2xl border border-danger-500/20">{error}</p>}
        <form
          className="mt-8 space-y-6"
          onSubmit={async (e) => {
            e.preventDefault()
            setError('')
            setLoading(true)
            const res = await registerUser({ username, password, role })
            setLoading(false)
            if (res.success) {
              navigate('/login')
            } else {
              setError(res.message || 'Registration failed')
            }
          }}
        >
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="input-field">
              <option value="STUDENT">Student</option>
              <option value="TEACHER">Teacher</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="input-field" placeholder="Choose a username" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="input-field" placeholder="Create a password" />
          </div>
          <button type="submit" disabled={loading} className="w-full btn-primary disabled:opacity-60">{loading ? 'Creating...' : 'Create account'}</button>
        </form>
      </div>
    </main>
  )
}

export default RegisterPage







