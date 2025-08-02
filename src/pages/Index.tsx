import React, { useState, useEffect } from 'react';
import AnimatedLoader from '../components/AnimatedLoader';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedTitle from '../components/FeaturedTitle';
import SneakerCard from '../components/SneakerCard';
import ImageCollage from '../components/ImageCollage';
import InfiniteMarquee from '../components/InfiniteMarquee';
import TeamSection from '../components/TeamSection';
import RippleEffect from '../components/RippleEffect';
import AnimatedCharacters from '../components/AnimatedCharacters';
import BackgroundPatterns from '../components/BackgroundPatterns';
import InteractiveStickers from '../components/InteractiveStickers';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const featuredSneakers = [
    {
      image: '',
      title: 'Spider-Man Web Crawler',
      price: '$299',
      category: 'marvel' as const,
      isSpecial: true,
      splashImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500'
    },
    {
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500',
      title: 'Batman Shadow Walker',
      price: '$349',
      category: 'dc' as const,
      isSpecial: true,
      splashImage: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500'
    },
    {
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500',
      title: 'Iron Man Reactor Core',
      price: '$399',
      category: 'avengers' as const,
    },
    {
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500',
      title: 'Hanuman Strength',
      price: '$279',
      category: 'indian' as const,
      isSpecial: true,
      splashImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500'
    },
  ];

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <AnimatedLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen text-gray-800 overflow-x-hidden relative" style={{ background: 'linear-gradient(135deg, #FFF5E1 0%, #f8f4e6 50%, #f5f0dc 100%)' }}>
      {/* Background Elements */}
      <BackgroundPatterns />
      
      {/* Interactive Elements */}
      <RippleEffect />
      <AnimatedCharacters />
      <InteractiveStickers />
      
      {/* Main Content */}
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Title Animation */}
      <FeaturedTitle 
        title="ROBOT SHOES" 
        subtitle="Next Generation Footwear"
      />
      
      {/* Featured Sneakers Grid */}
      <section className="py-20 px-6 ripple-zone relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bangers text-center mb-16 text-gradient-quadrant">
            DRIP FOR EVERY UNIVERSE - MARVEL, DC & MORE!!
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSneakers.map((sneaker, index) => (
              <div
                key={sneaker.title}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <SneakerCard {...sneaker} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Collage */}
      <ImageCollage />
      
      {/* Infinite Marquee */}
      <InfiniteMarquee />
      
      {/* Another Featured Title */}
      <FeaturedTitle 
        title="LEGENDARY COLLECTION" 
        subtitle="Heroes Never Die"
      />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Footer */}
      <footer className="py-20 px-6 bg-gradient-to-t from-yellow-100/30 to-transparent ripple-zone relative">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bangers mb-8 text-gradient-quadrant">
            💕QU4DRANT💕
          </h3>
          <p className="text-gray-600 mb-8 font-jersey">
            Where legends are born, one step at a time.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-500 font-jersey">
            <span>© 2025 QU4DRANT</span>
            <span>•</span>
            <span>All Rights Reserved</span>
            <span>•</span>
            <span>Made with RRs.😎😼</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;