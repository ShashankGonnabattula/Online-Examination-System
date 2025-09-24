import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-dark-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl font-display font-bold tracking-tight text-gray-100 leading-tight">
                Excellence in 
                <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent"> Education</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-prose leading-relaxed">
                Empower students and educators with our innovative digital assessment platform that makes learning more engaging and effective.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="btn-primary text-base px-8 py-4">
                  Get Started
                </Link>
                <Link to="/login" className="btn-outline text-base px-8 py-4">
                  Login
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-primary-500/20 blur-3xl opacity-60" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl opacity-60" />
              <div className="relative glass-panel p-8">
                <div className="space-y-6">
                  {/* Main exam interface mockup */}
                  <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-2xl p-6 border border-dark-600">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-danger-500"></div>
                        <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                        <div className="w-3 h-3 rounded-full bg-success-500"></div>
                      </div>
                      <span className="text-sm text-gray-400">Question 1 of 25</span>
                    </div>
                    <div className="h-2 bg-dark-600 rounded-full mb-4">
                      <div className="h-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full w-1/4"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-600 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                    </div>
                  </div>
                  
                  {/* Floating elements representing different features */}
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center shadow-lg">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg">
                      <span className="text-2xl">⚡</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-100 mb-4">
              Revolutionizing Education
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our advanced platform transforms traditional learning into an interactive digital experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Adaptive Learning</h3>
              <p className="text-gray-300">
                Personalized learning paths that adapt to each student's pace and learning style for optimal outcomes
              </p>
            </div>
            
            <div className="glass-panel p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-success-500 to-success-600 flex items-center justify-center">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">
                Enterprise-grade security with encrypted data transmission and secure authentication protocols
              </p>
            </div>
            
            <div className="glass-panel p-8 text-center card-hover">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">Global Accessibility</h3>
              <p className="text-gray-300">
                Access your exams from anywhere in the world with our cloud-based platform and multi-device support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Preview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-100 mb-4">
              Interactive Learning Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience seamless digital assessments with real-time feedback and engaging question formats
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="glass-panel p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-danger-500"></div>
                  <div className="w-3 h-3 rounded-full bg-accent-500"></div>
                  <div className="w-3 h-3 rounded-full bg-success-500"></div>
                  <span className="text-sm text-gray-400 ml-4">Online Examination System - Question 1 of 10</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-4">
                  Which learning approach best describes our platform's methodology?
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-dark-700/50 rounded-xl border border-dark-600 hover:border-primary-500/50 transition-colors">
                    <span className="text-gray-200">A) Traditional paper-based testing</span>
                  </div>
                  <div className="p-3 bg-dark-700/50 rounded-xl border border-primary-500/50 bg-primary-500/10">
                    <span className="text-primary-300">B) Interactive digital assessment</span>
                  </div>
                  <div className="p-3 bg-dark-700/50 rounded-xl border border-dark-600 hover:border-primary-500/50 transition-colors">
                    <span className="text-gray-200">C) Offline examination system</span>
                  </div>
                  <div className="p-3 bg-dark-700/50 rounded-xl border border-dark-600 hover:border-primary-500/50 transition-colors">
                    <span className="text-gray-200">D) Manual grading process</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center">
                  <button className="btn-outline">Previous</button>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  </div>
                  <button className="btn-primary">Next</button>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="glass-panel p-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">Advanced Platform Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-success-500/20 flex items-center justify-center">
                      <span className="text-success-400">🎓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-100">Personalized Learning</h4>
                      <p className="text-sm text-gray-400">Adaptive content based on individual progress</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center">
                      <span className="text-primary-400">🤖</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-100">AI-Powered Insights</h4>
                      <p className="text-sm text-gray-400">Smart analytics for better learning outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center">
                      <span className="text-accent-400">💡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-100">Interactive Content</h4>
                      <p className="text-sm text-gray-400">Engaging multimedia questions and activities</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400">📈</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-100">Progress Tracking</h4>
                      <p className="text-sm text-gray-400">Detailed performance analytics and reports</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-panel p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-100">Exam Progress</h4>
                  <span className="text-sm text-gray-400">2:45 remaining</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2 mb-2">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{width: '30%'}}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>3 of 10 questions</span>
                  <span>30% complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-500/10 to-accent-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-gray-100 mb-6">
            Begin Your Educational Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join a community of forward-thinking educators and students who are revolutionizing learning with our innovative platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-primary text-lg px-8 py-4">
              Start Learning Now
            </Link>
            <Link to="/login" className="btn-outline text-lg px-8 py-4">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage


