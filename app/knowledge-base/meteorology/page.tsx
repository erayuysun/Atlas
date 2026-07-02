export default function MeteorologyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Meteorology & Weather Analysis</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-8">
          Understand weather patterns, forecasting, and atmospheric conditions for safer and better flights.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Weather Patterns & Forecasting</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Learn to read and predict weather conditions
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Navigation</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Navigation techniques and tools for cross-country flying
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Dry Days Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Understanding optimal flying conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
