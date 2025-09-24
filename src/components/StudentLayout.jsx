import { NavLink, Outlet, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

function StudentLayout() {
  const { user, logout } = useAuth()

  const navItem = (to, label, icon) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
          isActive ? 'bg-primary-500/20 text-primary-300' : 'text-gray-300 hover:bg-white/10'
        }`}
      end
    >
      <span className="w-4 h-4">{icon}</span>
      <span>{label}</span>
    </NavLink>
  )

  return (
    <div className="min-h-dvh grid grid-cols-1 lg:grid-cols-[240px_1fr]">
      <aside className="bg-dark-900 text-white">
        <div className="h-16 flex items-center px-4 border-b border-white/10">
          <Link to="/" className="font-semibold text-gray-100">Online Examination System</Link>
        </div>
        <nav className="py-2">
          {navItem('/dashboard/profile', 'Profile', '👤')}
          {navItem('/dashboard/report', 'Report Card', '🧾')}
          {navItem('/dashboard/quizzes', 'All Quizzes', '🗂️')}
          {navItem('/dashboard/programming', 'Programming', '💻')}
          {navItem('/dashboard/aptitude', 'Aptitude', '🧠')}
        </nav>
      </aside>
      <div className="bg-dark-800/80 backdrop-blur">
        <header className="h-16 flex items-center justify-between border-b border-white/10 px-4 sm:px-6">
          <div />
          <div className="flex items-center gap-4 text-sm">
            {user?.id && <span className="text-gray-300 hidden sm:inline">{user.id}</span>}
            <Link to="/exam" className="text-gray-300 hover:text-primary-400 transition-colors">Test</Link>
            <button onClick={logout} className="btn-ghost">Logout</button>
          </div>
        </header>
        <main className="p-4 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default StudentLayout





