export default function CoreSeriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Core Series</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-8">
          Fundamental topics and core concepts every paraglider pilot should master.
        </p>

        <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Lifting Mechanics</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Understanding thermals and how they work
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Dry Days</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Making the most of optimal flying conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
