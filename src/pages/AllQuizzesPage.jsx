import { useEffect, useState } from 'react'
import { fetchAvailableExams } from '../services/api.js'
import ExamCard from '../components/ExamCard.jsx'

function AllQuizzesPage() {
  const [exams, setExams] = useState([])
  useEffect(() => { fetchAvailableExams().then(setExams) }, [])
  return (
    <div>
      <h2 className="text-3xl font-display font-bold text-gray-100 mb-8">All Quizzes</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exams.map(e => <ExamCard key={e.id} exam={e} />)}
      </div>
    </div>
  )
}

export default AllQuizzesPage





