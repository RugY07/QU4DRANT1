import React from 'react';

const InfiniteMarquee: React.FC = () => {
  const trendingSneakers = [
    {
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300',
      name: 'Spider-Man Web Slinger',
      price: '$299'
    },
    {
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300',
      name: 'Batman Dark Knight',
      price: '$349'
    },
    {
      image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=300',
      name: 'Iron Man Reactor',
      price: '$399'
    },
    {
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300',
      name: 'Captain America Shield',
      price: '$329'
    },
    {
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=300',
      name: 'Wonder Woman Lasso',
      price: '$359'
    },
    {
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300',
      name: 'Hanuman Power',
      price: '$279'
    },
    {
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=300',
      name: 'Krishna Divine',
      price: '$309'
    },
    {
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300',
      name: 'Thor Thunder',
      price: '$379'
    },
  ];

  // Duplicate the array for seamless loop
  const duplicatedSneakers = [...trendingSneakers, ...trendingSneakers];

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-r from-red-900/20 to-blue-900/20 ripple-zone">
      <div className="mb-12">
        <h2 className="text-6xl font-bangers text-center text-gradient-quadrant">
          TRENDING NOW
        </h2>
      </div>
      
      <div className="relative">
        <div className="flex space-x-8 marquee">
          {duplicatedSneakers.map((sneaker, index) => (
            <div
              key={`${sneaker.name}-${index}`}
              className="flex-shrink-0 w-80 glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group border border-red-600/30"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={sneaker.image}
                  alt={sneaker.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient-quadrant transition-all duration-300">
                  {sneaker.name}
                </h3>
                <p className="text-2xl font-black text-gradient-quadrant">
                  {sneaker.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for seamless effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default InfiniteMarquee;