import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCoffee, FaStar } from 'react-icons/fa';

const Home = () => {
  const testimonials = [
    { name: "Sarah Johnson", text: "The best coffee in town! Their espresso is absolutely perfect.", rating: 5 },
    { name: "Mike Chen", text: "Love the cozy atmosphere and friendly staff. Great place to work!", rating: 5 },
    { name: "Emily Davis", text: "Their pastries are amazing and the coffee is always fresh.", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="floating-elements">
          <div className="floating-coffee-bean"></div>
          <div className="floating-coffee-bean"></div>
          <div className="floating-coffee-bean"></div>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-center lg:text-left">
            <h1 className="hero-title mb-6">
              Discover The Art
              <br />
              <span className="text-secondary">Of Perfect Coffee.</span>
            </h1>
            
            <p className="hero-subtitle mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience the difference as we meticulously select and roast the finest 
              beans to create a truly unforgettable cup of coffee. Join us on a journey of 
              taste and awaken your senses, one sip at a time.
            </p>

            <div className="hero-buttons mb-12">
              <Link to="/menu" className="btn btn-primary">
                Order Now <FaArrowRight className="ml-2" />
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">1K+</div>
                <div className="stat-label">Reviews</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3K+</div>
                <div className="stat-label">Best Sell</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">150K+</div>
                <div className="stat-label">Menu</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="coffee-cup-visual">
              <FaCoffee className="coffee-icon" />
              <div className="coffee-splash"></div>
            </div>
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[12rem] font-bold text-primary/5 select-none pointer-events-none font-playfair">
              Coffee
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-text-dark text-center mb-16 font-playfair">
            OUR DELICIOUS SERVICES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="premium-service-card">
              <div className="service-icon">☕</div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Premium Quality</h3>
              <p className="text-text-light">Sourced from the finest coffee beans around the world, roasted to perfection.</p>
            </div>

            <div className="premium-service-card">
              <div className="service-icon">🏠</div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Cozy Environment</h3>
              <p className="text-text-light">A warm, welcoming space perfect for meetings, work, or relaxation.</p>
            </div>

            <div className="premium-service-card">
              <div className="service-icon">👨‍🍳</div>
              <h3 className="text-xl font-bold mb-3 text-text-dark">Expert Baristas</h3>
              <p className="text-text-light">Our experienced baristas are passionate about creating the perfect cup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text-dark mb-4">What Our Customers Say</h2>
            <p className="text-text-light max-w-2xl mx-auto">Don't just take our word for it - hear from our happy customers!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="premium-testimonial-card">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-secondary" />
                  ))}
                </div>
                <p className="text-text-dark mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-text-dark">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for the Perfect Cup?</h2>
          <p className="text-xl mb-8 opacity-90">Visit us today and discover why we're the neighborhood's favorite coffee spot.</p>
          <Link to="/contact" className="btn btn-secondary">
            Visit Us Today <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Home;
