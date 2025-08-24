import React, { useState } from 'react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');

  const menuItems = {
    coffee: [
      {
        name: "Classic Espresso",
        description: "Rich, bold espresso shot with perfect crema",
        price: "₹120"
      },
      {
        name: "Cappuccino",
        description: "Espresso with steamed milk and foam art",
        price: "₹180"
      },
      {
        name: "Americano",
        description: "Smooth espresso with hot water",
        price: "₹150"
      },
      {
        name: "Latte",
        description: "Creamy espresso with steamed milk",
        price: "₹200"
      },
      {
        name: "Mocha",
        description: "Espresso with chocolate and steamed milk",
        price: "₹220"
      },
      {
        name: "Cold Brew",
        description: "Smooth, cold-extracted coffee served over ice",
        price: "₹190"
      }
    ],
    pastries: [
      {
        name: "Croissant",
        description: "Buttery, flaky French pastry",
        price: "₹80"
      },
      {
        name: "Blueberry Muffin",
        description: "Freshly baked with real blueberries",
        price: "₹90"
      },
      {
        name: "Chocolate Brownie",
        description: "Rich, fudgy brownie with chocolate chips",
        price: "₹110"
      },
      {
        name: "Banana Bread",
        description: "Moist banana bread with walnuts",
        price: "₹85"
      },
      {
        name: "Cheesecake Slice",
        description: "Creamy New York style cheesecake",
        price: "₹150"
      },
      {
        name: "Apple Danish",
        description: "Flaky pastry with cinnamon apple filling",
        price: "₹95"
      }
    ],
    beverages: [
      {
        name: "Fresh Orange Juice",
        description: "Squeezed daily from premium oranges",
        price: "₹100"
      },
      {
        name: "Green Tea",
        description: "Premium loose leaf green tea",
        price: "₹80"
      },
      {
        name: "Hot Chocolate",
        description: "Rich chocolate with whipped cream",
        price: "₹160"
      },
      {
        name: "Iced Tea",
        description: "Refreshing iced tea with lemon",
        price: "₹90"
      },
      {
        name: "Smoothie Bowl",
        description: "Acai berry smoothie with granola toppings",
        price: "₹180"
      },
      {
        name: "Chai Latte",
        description: "Spiced tea with steamed milk",
        price: "₹140"
      }
    ]
  };

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'pastries', name: 'Pastries', icon: '🥐' },
    { id: 'beverages', name: 'Beverages', icon: '🥤' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Menu
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our carefully crafted selection of premium coffee, 
            fresh pastries, and delicious beverages.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`mx-2 mb-4 px-6 py-3 rounded-full font-semibold transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button
                    className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200"
                    style={{
                      background: 'linear-gradient(135deg, var(--primary), #2C5282)',
                      border: 'none',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Today's Specials
            </h2>
            <p className="text-lg text-gray-600">
              Don't miss out on our daily special offers!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🌅</span>
                <h3 className="text-xl font-semibold">Morning Special</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get any coffee + pastry combo before 10 AM for just ₹250
              </p>
              <span className="text-sm text-primary font-semibold">Valid until 10:00 AM</span>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🎯</span>
                <h3 className="text-xl font-semibold">Loyalty Reward</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Buy 9 coffees, get the 10th one absolutely free!
              </p>
              <span className="text-sm text-primary font-semibold">Ask for your loyalty card</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
