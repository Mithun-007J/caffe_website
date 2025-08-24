import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Using placeholder images - replace with actual image URLs
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=500&h=400&fit=crop",
      alt: "Cozy café interior with warm lighting",
      category: "interior"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop",
      alt: "Freshly brewed coffee with latte art",
      category: "coffee"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=400&fit=crop",
      alt: "Delicious pastries and baked goods",
      category: "food"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=500&h=400&fit=crop",
      alt: "Customers enjoying coffee together",
      category: "atmosphere"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=400&fit=crop",
      alt: "Barista preparing specialty coffee",
      category: "coffee"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&h=400&fit=crop",
      alt: "Beautiful café exterior with outdoor seating",
      category: "exterior"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&h=400&fit=crop",
      alt: "Variety of coffee beans",
      category: "coffee"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&h=400&fit=crop",
      alt: "Fresh croissants and pastries",
      category: "food"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500&h=400&fit=crop",
      alt: "Comfortable seating area",
      category: "interior"
    }
  ];

  const categories = ['all', 'interior', 'coffee', 'food', 'atmosphere', 'exterior'];
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="bg-gradient-to-r from-primary to-secondary text-white py-16"
        style={{
          background: 'linear-gradient(135deg, var(--primary) 0%, #2C5282 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gallery
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Take a visual journey through our cozy café, delicious offerings, 
            and the warm atmosphere that makes us special.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center space-x-2 space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 capitalize ${
                  activeFilter === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 image-container"
                onClick={() => openModal(image)}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '12px'
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div
                  style={{
                    content: "''",
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(26,54,93,0.3) 0%, rgba(212,175,55,0.2) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-200"
                ></div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-200 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <p className="text-center">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      {/* Visit Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Experience It Yourself
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Pictures can only capture so much. Come visit us and experience the full 
            warmth and charm of Brew & Bean Café in person.
          </p>
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-200"
            style={{
              background: 'linear-gradient(135deg, var(--primary), #2C5282)',
              color: 'var(--accent)'
            }}
          >
            Visit Our Café
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
