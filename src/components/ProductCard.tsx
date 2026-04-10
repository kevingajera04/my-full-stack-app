import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="card card-hover group overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden h-64 md:h-72 bg-lightBg">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </Link>

        {/* Badge */}
        {discount > 0 && (
          <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">
            -{discount}%
          </div>
        )}

        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Category */}
        <span className="inline-block text-xs font-bold text-gold uppercase tracking-wider">
          {product.category}
        </span>

        {/* Name */}
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-lg font-display font-bold text-jewel group-hover:text-gold transition line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-gold">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        {product.inStock ? (
          <div className="flex gap-2">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-16 px-3 py-2 border border-gray-300 rounded-lg text-center"
            />
            <button
              onClick={handleAddToCart}
              className={`flex-1 btn btn-sm transition ${
                isAdded
                  ? 'bg-green-500 text-white'
                  : 'btn-primary'
              }`}
            >
              {isAdded ? '✓ Added' : 'Add to Cart'}
            </button>
          </div>
        ) : (
          <button className="w-full btn btn-sm bg-gray-300 text-gray-600 cursor-not-allowed">
            Out of Stock
          </button>
        )}

        {/* View Details */}
        <Link
          to={`/products/${product.id}`}
          className="block w-full text-center py-2 text-gold font-medium hover:text-darkGold transition border border-gold rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
