export default function KnowledgeBasePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Knowledge Base</h1>
      
      <p className="text-lg mb-12">
        Your comprehensive resource for paragliding education, from beginner to expert level.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/knowledge-base/competitions" className="group">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition">
              Competitions & Performance
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Advanced cross-country coaching, competition strategies, and performance optimization
            </p>
          </div>
        </a>

        <a href="/knowledge-base/meteorology" className="group">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition">
              Meteorology & Weather Analysis
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Weather forecasting, pattern recognition, and navigation skills
            </p>
          </div>
        </a>

        <a href="/knowledge-base/core-series" className="group">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition">
              Core Series
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Fundamental topics including lifting mechanics and essential techniques
            </p>
          </div>
        </a>

        <a href="/knowledge-base/industry" className="group">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition">
              Industry & Community
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Event hosting, international tourism, and community building
            </p>
          </div>
        </a>

        <a href="/knowledge-base/technical-focus" className="group">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg hover:shadow-lg transition">
            <h2 className="text-2xl font-bold mb-3 group-hover:text-orange-600 transition">
              Technical Focus & Flight Safety
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Flight mechanics, gear technologies, and equipment knowledge
            </p>
          </div>
        </a>

        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-3">Beginner Resources</h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Getting started guides and essential information for new pilots
          </p>
        </div>
      </div>
    </div>
  );
}
