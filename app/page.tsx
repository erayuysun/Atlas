import Image from "next/image";
import PodcastCarousel from "@/components/PodcastCarousel";
import EpisodeMap from "@/components/EpisodeMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      {/* Hero Section - starts from top, behind fixed navbar */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden -mt-16 md:-mt-20">
        <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/Media/hp/homapage%20image.png')"}} />
        {/* Gradient overlay: transparent in middle, dark at bottom */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.5) 65%, rgba(10,10,10,0.85) 80%, #0a0a0a 100%)'
        }} />
      </section>

      {/* Destination Cards Section */}
      <section className="container mx-auto px-4 pt-0 pb-16 md:pb-24">
        {/* Kenya */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/Media/hp/hp_row1.png')"}} />
          </div>
          <div>
            <p className="text-orange-500 text-sm font-medium mb-2">Explore East Africa From Above</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Journey Over The Cradle Of Humankind
            </h2>
            <p className="text-gray-300 mb-6">
              From chasing personal bests and world records to gliding over thousand year old 
              baobab trees while observing zebras and giraffes in their natural habitat below. Our 
              Kenya expedition offers an aerial exploration that will leave you yearning for more.
            </p>
            <button className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-gray-700 hover:border-orange-500/50 text-white pl-2 pr-5 py-2 rounded-full transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </span>
              <span className="font-semibold">Enquire Now</span>
            </button>
          </div>
        </div>


        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="md:order-2 relative h-64 md:h-80 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/Media/hp/row2.png')"}} />
          </div>
          <div className="md:order-1">
            <p className="text-orange-500 text-sm font-medium mb-2">Sky Is Not The Limit</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Majestic Himalayas: A Paraglider's Ultimate Frontier
            </h2>
            <p className="text-gray-300 mb-6">
              Our Himalayan expedition delivers an aerial experience that makes you soar over 
              landscapes shaped by time and beyond you glide drift over ancient monasteries 
              while exploring your limits in thin air. It's a journey that stirs the soul.
            </p>
            <button className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-gray-700 hover:border-orange-500/50 text-white pl-2 pr-5 py-2 rounded-full transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </span>
              <span className="font-semibold">Enquire Now</span>
            </button>
          </div>
        </div>

        {/* Peru */}
        {/* India/Himalayas */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/Media/hp/row3.png')"}} />
          </div>
          <div>
            <p className="text-orange-500 text-sm font-medium mb-2">Soar the Land of the Incas</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Multi-Day Soaring Adventure Through Iconic Flying Corridors
            </h2>
            <p className="text-gray-300 mb-6">
              Let the vivid Pacific breezes carry you into long, graceful, and endlessly rewarding 
              flights. Trace ancient pathways across landscape stypes to discover hidden gems in 
              remote Andean communities. Peru offers a soaring adventure not crafted for pilots who 
              crave exploration and freedom.
            </p>
            <button className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-gray-700 hover:border-orange-500/50 text-white pl-2 pr-5 py-2 rounded-full transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </span>
              <span className="font-semibold">Enquire Now</span>
            </button>
          </div>
        </div>

        {/* Beyond Roads */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2 relative h-64 md:h-80 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('/Media/hp/row4.png')"}} />
          </div>
          <div className="md:order-1">
            <p className="text-orange-500 text-sm font-medium mb-2">A Flight to the Ends of the Earth</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Beyond Roads, Beyond Maps, Beyond The Unknown
            </h2>
            <p className="text-gray-300 mb-6">
              Experience the exhilarating freedom of gliding through clear skies, the feeling of floating 
              over a landscape untouched, uncharted, and utterly otherworldly. Wind carved 
              marvels make surreal rock formations look like we're flying in lunarscape and dried 
              ancient seabeds become our landing grounds, be a Pilot or be a Fossil Hunter. We 
              promise that you'll collect bragging rights for life! #weareAtlas
            </p>
            <button className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-gray-700 hover:border-orange-500/50 text-white pl-2 pr-5 py-2 rounded-full transition-all duration-300">
              <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </span>
              <span className="font-semibold">Enquire Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#1a1a1a] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-gray-300">
            What Makes Paragliding Atlas Unique?
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Experience intimately, expert led flying in world class destinations. Skip the crowds with 
            small group tours in iconic sites over untamed terrain, fully guided from launch to 
            landing and beyond
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Because We Care to Share */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Because We Care to Share</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sharing our passion for the art of flight isn't just meaningful, 
                it's our purpose. We do more miles because your 
                breakthroughs, safety, and joy in the skies matter to us. And 
                this ripples back through inspiring explorers as much as it helps 
                you help local communities through welfare, training, 
                and opportunities for adventure tourism.
              </p>
              <p className="text-gray-500 text-sm mt-4 italic">
                Join us to form your flights into soaring impact.
              </p>
            </div>

            {/* Flight Safety */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-orange-500">Flight Safety - First & Always</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                In paragliding, there's a saying: if it's a contradiction, then control 
                it. We don't leave things to chance, because, when it comes to 
                perfect, flying takes effortless. But when turbulence hits, 
                navigating Atlas has your back. On-site radio communication, 
                mastery, and rescue readiness mean we master every 
                detail beforehand, ensuring that you stay safe, calm, so you 
                can soar worry-free and have a trip of a lifetime.
              </p>
            </div>

            {/* Exclusive Journeys */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Exclusive Journeys</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We're a group of like minded pilots who meticulously craft each trip with passion, creativity, and teamwork. 
                We approach each one of our tours with obsessive precision in Paragliding Atlas delivers flights that feel like 
                they were dreamed up just for your soul
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 border-4 border-gray-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-400 text-sm mb-2">Ready to TOUCH THE SKY WITH GLORY ?</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Book a free 30min no obligation virtual call
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-gray-700 hover:border-orange-500/50 text-white pl-2 pr-5 py-2 rounded-full transition-all duration-300">
                  <span className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-400 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                  </span>
                  <span className="font-semibold">Book a call</span>
                </button>
                <button className="group flex items-center gap-3 bg-[#1a1a1a] hover:bg-[#222] border border-gray-700 hover:border-green-500/50 text-white pl-2 pr-5 py-2 rounded-full transition-all duration-300">
                  <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:bg-green-400 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.525 5.845L.057 23.492a.5.5 0 0 0 .614.614l5.694-1.484A11.955 11.955 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.682-.516-5.21-1.418l-.374-.22-3.878 1.011 1.03-3.784-.242-.386A9.956 9.956 0 0 1 2 12C2 6.478 6.478 2 12 2s10 4.478 10 10-4.478 10-10 10z"/></svg>
                  </span>
                  <span className="font-semibold">Chat on WhatsApp</span>
                </button>
              </div>
            </div>
            <div>
              <p className="text-gray-300 mb-4">
                Whether you're a to hour pilot eyeing your first 50 or a 
                longtime sky veteran chasing your next world record, we 
                specialize in turning ambition into stories. This relaxed no-
                expectation intro call helps you bite through the extremes 
                with straight talk.
              </p>
              <p className="font-bold text-orange-500 mb-3">We'll break down:</p>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>1) Ideal tour month for your skill and dreams (Kenya, India, or Peru.)</li>
                <li>2) Fitness and wing experience required</li>
                <li>3) Gear list, dates, and costs</li>
                <li>4) What you'll get is no-fuss-to-face guidance from Paragliding Atlas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="bg-[#1a1a1a] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <p className="text-orange-500 text-sm font-medium mb-2">Find Inspiration in The Paragliding Atlas Podcast</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Stories From The Blue Yonder</h2>
          <p className="text-gray-300 mb-12 max-w-3xl">
            Conversations with Pilots, Dreamers and those who have 
            Lived Life Aloud a Wing. Each episode dives into the 
            Mindset, Journeys, and Defining Moments in the Skies where 
            Flying, Travel, and Personal Growth all Converge while 
            Creating the Art of Flight
          </p>

          <p className="text-gray-400 mb-8">
            Discover our most streamed podcast episodes below. Handpicked favorites packed with Wanderlust vibes, Tech insights, Pro hacks, and Free Flight folklore
          </p>

          {/* Podcast Carousel */}
          <PodcastCarousel />
        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4 text-orange-500">
          A Map of Every Place We've Ever Told A Story From
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Click pins to dive into episode details. Zoom in for precise locations
        </p>

        <EpisodeMap />

        {/* Podcast Platforms */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Tune in Wherever you get your Podcasts</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#1DB954] hover:bg-[#1aa34a] text-white px-6 py-2 rounded-lg transition flex items-center gap-2 font-semibold">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
              <span>Spotify</span>
            </button>
            <button className="bg-[#872EC4] hover:bg-[#7325a8] text-white px-6 py-2 rounded-lg transition flex items-center gap-2 font-semibold">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 1.6a1.2 1.2 0 1 0 0 2.4A1.2 1.2 0 0 0 12 4zm0 3.2c-2.65 0-4.8 2.15-4.8 4.8v4.8a1.2 1.2 0 0 0 2.4 0V12a2.4 2.4 0 0 1 4.8 0v4.8a1.2 1.2 0 0 0 2.4 0V12c0-2.65-2.15-4.8-4.8-4.8z"/></svg>
              <span>Apple Podcasts</span>
            </button>
            <button className="bg-[#00A8E0] hover:bg-[#0090c0] text-white px-6 py-2 rounded-lg transition flex items-center gap-2 font-semibold">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm5.016 16.916H6.984c-.662 0-1.2-.538-1.2-1.2V8.284c0-.662.538-1.2 1.2-1.2h10.032c.662 0 1.2.538 1.2 1.2v7.432c0 .662-.538 1.2-1.2 1.2zM10.08 9.6v4.8l4.16-2.4-4.16-2.4z"/></svg>
              <span>Amazon Music</span>
            </button>
            <button className="bg-[#FF0000] hover:bg-[#cc0000] text-white px-6 py-2 rounded-lg transition flex items-center gap-2 font-semibold">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span>YouTube</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
