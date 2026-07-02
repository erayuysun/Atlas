export default function CompetitionsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Competitions & Performance</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-8">
          Master the art of competitive paragliding and improve your cross-country performance.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">How to Win Big Competitions</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Strategies and techniques from top competitors
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Advanced Cross-Country Coaching</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Performance optimization and coaching resources
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Resources, Tools & Tips</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Essential tools and resources for competitive flying
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
