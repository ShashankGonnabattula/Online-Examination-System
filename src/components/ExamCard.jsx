import { Link } from 'react-router-dom'

function ExamCard({ exam }) {
  return (
    <div className="card p-5 card-hover animate-fadeInUp">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold font-display">{exam.title}</h3>
          <p className="mt-1 text-sm text-gray-600">Duration: {exam.durationMinutes} mins</p>
          <span className="mt-2 inline-block text-xs rounded-full border px-2 py-0.5 text-gray-700 bg-white/60">{exam.status}</span>
        </div>
        <Link to={`/exam/${exam.id}`} className="btn-primary">Start</Link>
      </div>
    </div>
  )
}

export default ExamCard





