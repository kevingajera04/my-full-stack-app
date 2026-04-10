import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1600&h=900&fit=crop)',
            filter: 'brightness(0.4)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-jewel via-jewel to-gold opacity-70" />

        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <div className="text-6xl md:text-8xl mb-6 animate-pulse-gold">✨</div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Elegance Personified
          </h1>
          <p className="text-lg md:text-2xl text-gray-100 mb-8 max-w-xl mx-auto">
            Discover our exquisite collection of premium jewellery crafted for the most discerning tastes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/products" className="btn btn-primary btn-lg">
              Shop Now
            </Link>
            <button className="btn btn-outline btn-lg text-white hover:bg-white hover:text-gold">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white text-2xl">
          ↓
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center mb-4 text-jewel">
          Browse by Category
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Explore our diverse collection of luxury jewellery
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.name}`}
              className="card card-hover text-center p-6 group"
            >
              <img 
                src={category.icon} 
                alt={category.name}
                className="w-20 h-20 mx-auto mb-3 object-cover rounded-lg group-hover:scale-125 transition duration-300"
              />
              <h3 className="font-display font-bold text-lg text-jewel group-hover:text-gold transition">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1 hidden md:block">
                Explore {category.name.toLowerCase()}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center mb-4 text-jewel">
          Featured Jewellery
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Handpicked pieces for the modern luxury enthusiast
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn btn-primary btn-lg">
            View All Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-lightBg py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-12 text-jewel">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: '🚚', title: 'Fast Shipping', desc: 'Free delivery on orders over $100' },
              { icon: '🛡️', title: 'Secure & Safe', desc: '100% secure payment processing' },
              { icon: '💎', title: 'Authentic', desc: 'Certified authentic jewellery' },
              { icon: '↩️', title: 'Easy Returns', desc: '30-day hassle-free returns' },
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="font-display font-bold text-xl mb-2 text-jewel">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-jewel to-gold py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-display font-bold mb-4">
            Subscribe for Exclusive Offers
          </h2>
          <p className="text-lg mb-8 text-gray-200">
            Get 15% off your first order and exclusive access to new collections.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg text-jewel focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="btn bg-white text-gold hover:bg-gray-100 font-bold">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-center mb-12 text-jewel">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Emily Roberts',
              role: 'Verified Customer',
              text: 'Exceptional quality and beautiful design. The customer service was outstanding!',
              rating: 5,
            },
            {
              name: 'Michael Chen',
              role: 'Verified Customer',
              text: 'Premium jewellery at reasonable prices. Highly recommended for engagement rings.',
              rating: 5,
            },
            {
              name: 'Sarah Williams',
              role: 'Verified Customer',
              text: 'Fast shipping and perfect packaging. My wife absolutely loves her necklace!',
              rating: 5,
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="card p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-jewel">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
