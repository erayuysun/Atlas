export default function TechnicalFocusPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Technical Focus & Flight Safety</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-8">
          Deep dive into flight mechanics, gear technologies, and safety protocols.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Flight Mechanics</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Understanding the physics of paragliding flight
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Gear Technologies</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Latest innovations in paragliding equipment
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Know Your Equipment</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Comprehensive equipment knowledge and maintenance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
