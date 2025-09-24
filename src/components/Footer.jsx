function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-dark-900/40 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-sm text-gray-400 flex flex-col sm:flex-row gap-6 items-center justify-between">
        <p className="font-medium">
          © {new Date().getFullYear()} Online Examination System. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-primary-400 transition-colors px-3 py-2 rounded-xl hover:bg-white/10">Privacy</a>
          <a href="#" className="hover:text-primary-400 transition-colors px-3 py-2 rounded-xl hover:bg-white/10">Terms</a>
          <a href="#" className="hover:text-primary-400 transition-colors px-3 py-2 rounded-xl hover:bg-white/10">Support</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer







