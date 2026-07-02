export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Atlas Paragliding</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Atlas Paragliding is your comprehensive resource for paragliding adventures, 
          knowledge, and community across three incredible continents.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
        <p className="mb-6">
          We aim to provide the most comprehensive paragliding knowledge base, connecting 
          pilots with world-class flying destinations and advanced technical resources.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What We Offer</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Expert guidance on competitions and performance improvement</li>
          <li>In-depth meteorology and weather analysis education</li>
          <li>Destination guides for Kenya, India, and Peru</li>
          <li>Technical focus on flight safety and mechanics</li>
          <li>Community-driven content and discussions</li>
        </ul>
      </div>
    </div>
  );
}
