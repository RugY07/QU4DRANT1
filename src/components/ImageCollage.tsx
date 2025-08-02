import React, { useState, useEffect } from 'react';

interface CollageItem {
  id: string;
  images: string[];
  category: string;
  isCarousel?: boolean;
  sneakerName: string;
}

const ImageCollage: React.FC = () => {
  const [currentImages, setCurrentImages] = useState<{[key: string]: number}>({});
  const [isIdle, setIsIdle] = useState(false);

  const collageItems: CollageItem[] = [
    {
      id: 'spiderman-angles',
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', // front view
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', // side view
        'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400', // back view
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400', // top view
      ],
      category: 'Marvel',
      sneakerName: 'Spider-Man Web Crawler',
      isCarousel: true,
    },
    {
      id: 'batman-angles',
      images: [
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400', // front view
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400', // side view
        'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400', // back view
      ],
      category: 'DC',
      sneakerName: 'Batman Dark Knight',
      isCarousel: true,
    },
    {
      id: 'ironman-angles',
      images: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400', // front view
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400', // side view
      ],
      category: 'Avengers',
      sneakerName: 'Iron Man Reactor',
    },
    {
      id: 'hanuman-angles',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400', // front view
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', // side view
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400', // back view
      ],
      category: 'Indian Heritage',
      sneakerName: 'Hanuman Power',
      isCarousel: true,
    },
  ];

  // Auto-carousel effect when idle
  useEffect(() => {
    let idleTimer: NodeJS.Timeout;
    let carouselInterval: NodeJS.Timeout;

    const resetIdleTimer = () => {
      setIsIdle(false);
      clearTimeout(idleTimer);
      clearInterval(carouselInterval);
      
      idleTimer = setTimeout(() => {
        setIsIdle(true);
        
        // Start auto-carousel for carousel items
        carouselInterval = setInterval(() => {
          setCurrentImages(prev => {
            const newState = { ...prev };
            collageItems.forEach(item => {
              if (item.isCarousel && item.images.length > 1) {
                newState[item.id] = ((prev[item.id] || 0) + 1) % item.images.length;
              }
            });
            return newState;
          });
        }, 2000);
      }, 3000);
    };

    const handleMouseMove = () => resetIdleTimer();
    const handleScroll = () => resetIdleTimer();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    resetIdleTimer();

    return () => {
      clearTimeout(idleTimer);
      clearInterval(carouselInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getViewLabel = (index: number) => {
    const labels = ['Front', 'Side', 'Back', 'Top'];
    return labels[index] || 'View';
  };

  return (
    <section className="py-20 px-6 ripple-zone">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bangers text-center mb-16 text-gradient-quadrant">
          COLLECTIONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collageItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer ${
                index % 3 === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{
                transform: `translateZ(${index * 10}px)`,
                transition: 'transform 0.5s ease-out',
              }}
            >
              <div className="glass-effect rounded-2xl overflow-hidden hover-scale border border-red-600/30">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={item.images[currentImages[item.id] || 0]}
                    alt={`${item.sneakerName} - ${getViewLabel(currentImages[item.id] || 0)}`}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Category Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="mb-2 px-2 py-1 bg-red-600 text-white text-xs font-bold rounded">
                      {item.category.toUpperCase()}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.sneakerName}
                    </h3>
                    <p className="text-sm text-yellow-400 font-semibold">
                      {getViewLabel(currentImages[item.id] || 0)} View
                    </p>
                    {item.isCarousel && (
                      <div className="flex space-x-1 mt-2">
                        {item.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              imgIndex === (currentImages[item.id] || 0)
                                ? 'bg-red-500'
                                : 'bg-white/30'
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Zoom effect indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 border-2 border-red-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border border-red-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;