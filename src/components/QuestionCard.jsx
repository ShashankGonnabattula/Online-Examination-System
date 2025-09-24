function QuestionCard({ question, answer, onChange }) {
  return (
    <div className="card p-6 card-hover">
      <h3 className="text-lg font-semibold text-gray-100 mb-6">{question.text}</h3>
      <div className="space-y-4">
        {question.type === 'mcq' ? (
          <div className="space-y-3">
            {question.options.map((opt, idx) => (
              <label key={idx} className="flex items-center gap-3 p-3 bg-dark-700/50 rounded-2xl border border-dark-600 hover:border-primary-500/50 transition-colors cursor-pointer">
                <input
                  type="radio"
                  name={question.id}
                  value={opt}
                  checked={answer === opt}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-4 h-4 text-primary-500"
                />
                <span className="text-gray-200">{opt}</span>
              </label>
            ))}
          </div>
        ) : question.type === 'boolean' ? (
          <div className="flex gap-4">
            {['True', 'False'].map((opt) => (
              <label key={opt} className="flex items-center gap-3 p-4 bg-dark-700/50 rounded-2xl border border-dark-600 hover:border-primary-500/50 transition-colors cursor-pointer flex-1">
                <input
                  type="radio"
                  name={question.id}
                  value={opt}
                  checked={String(answer) === opt}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-4 h-4 text-primary-500"
                />
                <span className="text-gray-200 font-medium">{opt}</span>
              </label>
            ))}
          </div>
        ) : (
          <textarea
            value={answer || ''}
            onChange={(e) => onChange(e.target.value)}
            className="input-field min-h-36 resize-none"
            placeholder="Type your answer here..."
          />
        )}
      </div>
    </div>
  )
}

export default QuestionCard


