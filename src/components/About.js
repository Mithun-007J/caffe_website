import React from 'react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Brew & Bean Café
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our story began with a simple passion: to serve the perfect cup of coffee 
              in a space where community thrives and connections are made.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2015, Brew & Bean Café started as a small neighborhood coffee shop 
                with big dreams. Our founders, passionate coffee enthusiasts and community lovers, 
                wanted to create more than just a place to grab your morning caffeine fix.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We envisioned a space where people could connect, work, relax, and enjoy 
                exceptional coffee made from carefully sourced beans. Today, we're proud to 
                be a cornerstone of our community, serving hundreds of happy customers every day.
              </p>
              <p className="text-lg text-gray-600">
                Every cup we serve is a testament to our commitment to quality, sustainability, 
                and creating memorable experiences for our guests.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  2015 - Opened our first location
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  2017 - Introduced specialty roasts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  2019 - Launched loyalty program
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  2021 - Became carbon neutral
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                  2023 - Serving 50K+ customers annually
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from sourcing our beans 
              to serving our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally responsible practices, from bean sourcing 
                to waste reduction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                Every bean is carefully selected and every cup is crafted with precision 
                and passion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in fostering connections and supporting local initiatives 
                that make our neighborhood stronger.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            To create exceptional coffee experiences that bring people together, 
            support sustainable practices, and contribute positively to our community. 
            We're not just serving coffee – we're brewing connections, one cup at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
