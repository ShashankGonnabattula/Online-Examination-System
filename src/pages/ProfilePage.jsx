import { useAuth } from '../context/AuthContext.jsx'

function ProfilePage() {
  const { user, role } = useAuth()
  const name = 'Test User'
  const phone = '1234567890'
  const accountStatus = true
  const username = user?.id || 'test@gmail.com'

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="h-44 w-44 rounded-full border-4 border-primary-400 grid place-items-center bg-dark-700/50">
          <div className="h-36 w-36 rounded-full bg-dark-600" />
        </div>
      </div>
      <div className="mt-8 overflow-x-auto">
        <div className="glass-panel p-8 mx-auto max-w-2xl">
          <h2 className="text-2xl font-display font-bold text-gray-100 mb-6 text-center">Profile Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-dark-700/50 rounded-2xl border border-dark-600">
              <span className="font-semibold text-gray-300">Name</span>
              <span className="text-gray-100">{name}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-dark-700/50 rounded-2xl border border-dark-600">
              <span className="font-semibold text-gray-300">Username</span>
              <span className="text-gray-100">{username}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-dark-700/50 rounded-2xl border border-dark-600">
              <span className="font-semibold text-gray-300">Phone</span>
              <span className="text-gray-100">{phone}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-dark-700/50 rounded-2xl border border-dark-600">
              <span className="font-semibold text-gray-300">Role</span>
              <span className="text-primary-400 font-semibold">{role?.toUpperCase() || 'USER'}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-dark-700/50 rounded-2xl border border-dark-600">
              <span className="font-semibold text-gray-300">Account Status</span>
              <span className="text-success-400 font-semibold">{String(accountStatus)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage





