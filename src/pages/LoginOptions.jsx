import { Link } from 'react-router-dom'

function LoginOptions() {
  return (
    <main className="min-h-dvh -mt-16 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="glass-panel p-8 text-center">
          <h1 className="text-3xl font-display font-bold text-gray-100">Welcome back</h1>
          <p className="mt-3 text-gray-300">Choose how you want to sign in</p>
          <div className="mt-8 grid grid-cols-1 gap-4">
            <Link to="/login/student" className="btn-success">Student Login</Link>
            <Link to="/login/teacher" className="btn-primary">Teacher Login</Link>
          </div>
          <p className="mt-8 text-gray-300">
            New here? <Link to="/register" className="text-primary-400 hover:text-primary-300 font-semibold transition-colors">Register</Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default LoginOptions


