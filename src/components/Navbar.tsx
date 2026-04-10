import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import SearchIcon from '../icons/SearchIcon';
import MenuIcon from '../icons/MenuIcon';
import CloseIcon from '../icons/CloseIcon';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/products?search=${searchQuery}`);
    setSearchQuery('');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-3xl font-display font-bold text-gradient">✨</div>
            <span className="hidden sm:inline text-xl font-display font-bold text-jewel group-hover:text-gold transition">
              Jewellery Elegance
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-jewel hover:text-gold font-medium transition">
              Home
            </Link>
            <Link to="/products" className="text-jewel hover:text-gold font-medium transition">
              Products
            </Link>
            <Link to="/about" className="text-jewel hover:text-gold font-medium transition">
              About
            </Link>
            <Link to="/contact" className="text-jewel hover:text-gold font-medium transition">
              Contact
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden lg:flex items-center bg-lightBg rounded-full px-4 py-2 flex-shrink">
            <input
              type="text"
              placeholder="Search jewellery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none w-40 text-sm"
            />
            <button type="submit" className="text-gold hover:text-darkGold transition">
              <SearchIcon />
            </button>
          </form>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Cart */}
            <Link to="/cart" className="relative group">
              <div className="text-2xl">🛍️</div>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            {/* Auth */}
            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm font-medium text-jewel">{user?.firstName}</span>
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="hidden md:inline-block btn btn-sm btn-primary">
                Sign In
              </Link>
            )}

            {/* Admin Link */}
            {isAuthenticated && user?.isAdmin && (
              <Link to="/admin/dashboard" className="hidden md:inline-block text-sm font-medium text-gold hover:text-darkGold transition">
                Admin
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 border-t border-gray-200 pt-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="flex items-center bg-lightBg rounded-lg px-4 py-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none flex-1 text-sm"
              />
              <button type="submit" className="text-gold">
                <SearchIcon />
              </button>
            </form>

            {/* Mobile Links */}
            <Link to="/" className="block text-jewel hover:text-gold font-medium transition py-2">
              Home
            </Link>
            <Link to="/products" className="block text-jewel hover:text-gold font-medium transition py-2">
              Products
            </Link>
            <Link to="/about" className="block text-jewel hover:text-gold font-medium transition py-2">
              About
            </Link>
            <Link to="/contact" className="block text-jewel hover:text-gold font-medium transition py-2">
              Contact
            </Link>

            {/* Mobile Auth */}
            {isAuthenticated ? (
              <>
                <div className="text-sm font-medium text-jewel py-2">
                  {user?.firstName} {user?.lastName}
                </div>
                {user?.isAdmin && (
                  <Link to="/admin/dashboard" className="block text-gold font-medium py-2">
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="btn btn-sm btn-outline w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="btn btn-sm btn-primary w-full">
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
