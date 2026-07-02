export default function IndustryPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Industry & Community</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-8">
          Building community, hosting events, and growing the paragliding industry worldwide.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Event Hosting & International Tourism</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Organizing events and promoting paragliding tourism
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Recognition</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Celebrating achievements in the paragliding community
            </p>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">YouTube Skills & Learning</h3>
            <p className="text-gray-700 dark:text-gray-300">
              In-house video content and tutorials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
