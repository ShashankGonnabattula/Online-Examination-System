function ResultsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-display font-bold text-gray-100 mb-8">Results</h1>
      <div className="glass-panel p-8">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-dark-600">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Exam</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Score</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-dark-600">
                <td className="px-4 py-3 text-gray-200">Sample Exam</td>
                <td className="px-4 py-3 text-gray-200">-</td>
                <td className="px-4 py-3 text-gray-200">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default ResultsPage







