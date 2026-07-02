export default function PodcastPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Atlas Paragliding Podcast</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Listen to stories, insights, and expert interviews from the paragliding community.
        </p>
        
        <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest Episodes</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Podcast episodes coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}
