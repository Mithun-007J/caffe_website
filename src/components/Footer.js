import React from 'react';
import { Link } from 'react-router-dom';
import { FaCoffee, FaFacebook, FaInstagram, FaTwitter, FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-white"
      style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, #2C3E50 100%)',
        color: 'var(--accent)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <FaCoffee className="text-secondary text-2xl" />
              <span className="font-bold text-xl" style={{ color: 'var(--accent)' }}>Brew & Bean Café</span>
            </div>
            <p className="mb-4 max-w-md" style={{ color: 'var(--cream)' }}>
              Your neighborhood coffee shop serving premium coffee, fresh pastries, 
              and creating memorable experiences since 2015. We're not just serving 
              coffee – we're brewing connections.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-secondary text-primary p-2 rounded-full hover:bg-opacity-80 transition-colors duration-200"
                aria-label="Facebook"
                style={{ color: 'var(--primary)' }}
              >
                <FaFacebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-secondary text-primary p-2 rounded-full hover:bg-opacity-80 transition-colors duration-200"
                aria-label="Instagram"
                style={{ color: 'var(--primary)' }}
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="#" 
                className="bg-secondary text-primary p-2 rounded-full hover:bg-opacity-80 transition-colors duration-200"
                aria-label="Twitter"
                style={{ color: 'var(--primary)' }}
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--secondary)' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="footer-link"
                  style={{ color: 'var(--cream)', transition: 'color 0.3s' }}
                  onMouseOver={e => e.target.style.color = 'var(--secondary)'}
                  onMouseOut={e => e.target.style.color = 'var(--cream)'}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="footer-link"
                  style={{ color: 'var(--cream)', transition: 'color 0.3s' }}
                  onMouseOver={e => e.target.style.color = 'var(--secondary)'}
                  onMouseOut={e => e.target.style.color = 'var(--cream)'}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/menu" 
                  className="footer-link"
                  style={{ color: 'var(--cream)', transition: 'color 0.3s' }}
                  onMouseOver={e => e.target.style.color = 'var(--secondary)'}
                  onMouseOut={e => e.target.style.color = 'var(--cream)'}
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className="footer-link"
                  style={{ color: 'var(--cream)', transition: 'color 0.3s' }}
                  onMouseOver={e => e.target.style.color = 'var(--secondary)'}
                  onMouseOut={e => e.target.style.color = 'var(--cream)'}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="footer-link"
                  style={{ color: 'var(--cream)', transition: 'color 0.3s' }}
                  onMouseOver={e => e.target.style.color = 'var(--secondary)'}
                  onMouseOut={e => e.target.style.color = 'var(--cream)'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary mt-1" size={16} />
                <div className="text-gray-300 text-sm">
                  123 Coffee Street, Brew District<br />
                  Mumbai, Maharashtra 400001
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary" size={16} />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" size={16} />
                <span className="text-gray-300 text-sm">hello@brewbeancafe.com</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">Opening Hours</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Mon - Fri: 7:00 AM - 10:00 PM</p>
                <p>Sat - Sun: 8:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Brew & Bean Café. All rights reserved.
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-500 mx-1" size={14} />
              <span>for coffee lovers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
