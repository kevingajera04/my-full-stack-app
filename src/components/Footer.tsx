import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-jewel text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">✨</span>
              <span className="text-xl font-display font-bold">Jewellery Elegance</span>
            </div>
            <p className="text-gray-400">
              Premium luxury jewellery collection for every occasion.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition">📘</a>
              <a href="#" className="hover:text-gold transition">📷</a>
              <a href="#" className="hover:text-gold transition">𝕏</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Quick Links</h4>
            <nav className="space-y-2 flex flex-col">
              <Link to="/" className="text-gray-400 hover:text-gold transition">Home</Link>
              <Link to="/products" className="text-gray-400 hover:text-gold transition">Products</Link>
              <Link to="/about" className="text-gray-400 hover:text-gold transition">About</Link>
              <Link to="/contact" className="text-gray-400 hover:text-gold transition">Contact</Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Customer Service</h4>
            <div className="space-y-2 flex flex-col">
              <a href="#" className="text-gray-400 hover:text-gold transition">Shipping Info</a>
              <a href="#" className="text-gray-400 hover:text-gold transition">Returns</a>
              <a href="#" className="text-gray-400 hover:text-gold transition">FAQ</a>
              <a href="#" className="text-gray-400 hover:text-gold transition">Privacy Policy</a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm">
              Subscribe for exclusive offers and updates.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-gold focus:outline-none text-white placeholder-gray-500"
              />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Jewellery Elegance. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gold transition text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-gold transition text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-gold transition text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
