export default function AtlasPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Atlas Destinations</h1>
      
      <p className="text-lg mb-12">
        Explore world-class paragliding destinations across three continents.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <a href="/atlas/kenya" className="group">
          <div className="bg-gradient-to-br from-red-50 to-green-50 dark:from-red-900/20 dark:to-green-900/20 p-8 rounded-lg hover:shadow-xl transition">
            <h2 className="text-3xl font-bold mb-4 group-hover:text-orange-600 transition">Kenya</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Discover the stunning landscapes and thermals of East Africa.
            </p>
          </div>
        </a>

        <a href="/atlas/india" className="group">
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 dark:from-orange-900/20 dark:to-blue-900/20 p-8 rounded-lg hover:shadow-xl transition">
            <h2 className="text-3xl font-bold mb-4 group-hover:text-orange-600 transition">India</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Experience the Himalayas and world-renowned flying sites.
            </p>
          </div>
        </a>

        <a href="/atlas/peru" className="group">
          <div className="bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-900/20 dark:to-yellow-900/20 p-8 rounded-lg hover:shadow-xl transition">
            <h2 className="text-3xl font-bold mb-4 group-hover:text-orange-600 transition">Peru</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Soar above the Andes and coastal desert landscapes.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
