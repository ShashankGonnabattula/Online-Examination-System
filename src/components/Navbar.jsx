import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function Navbar() {
  const { isAuthenticated, role, logout } = useAuth()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-dark-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl tracking-tight hover:text-primary-400 transition-colors text-gray-100">
            Online Examination System
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {isAuthenticated && role === 'student' && (
              <>
                <NavLink to="/dashboard" className={({ isActive }) => `${isActive ? 'text-primary-400 font-semibold' : 'text-gray-300'} hover:text-primary-400 transition-colors px-3 py-2 rounded-xl hover:bg-white/10`}>Dashboard</NavLink>
                <NavLink to="/exam" className={({ isActive }) => `${isActive ? 'text-primary-400 font-semibold' : 'text-gray-300'} hover:text-primary-400 transition-colors px-3 py-2 rounded-xl hover:bg-white/10`}>Exams</NavLink>
                <NavLink to="/results" className={({ isActive }) => `${isActive ? 'text-primary-400 font-semibold' : 'text-gray-300'} hover:text-primary-400 transition-colors px-3 py-2 rounded-xl hover:bg-white/10`}>Results</NavLink>
              </>
            )}
            {isAuthenticated && role === 'teacher' && (
              <NavLink to="/teacher" className={({ isActive }) => `${isActive ? 'text-primary-400 font-semibold' : 'text-gray-300'} hover:text-primary-400 transition-colors px-3 py-2 rounded-xl hover:bg-white/10`}>Teacher</NavLink>
            )}
          </nav>
          <div className="flex items-center gap-4">
            {!isAuthenticated && (
              <>
                <Link to="/login" className="btn-ghost">Login</Link>
                <Link to="/register" className="btn-primary">Register</Link>
              </>
            )}
            {isAuthenticated && (
              <button onClick={() => { logout(); navigate('/'); }} className="btn-ghost">Logout</button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar


