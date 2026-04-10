import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description');

  const product = products.find((p) => p.id === id);
  const relatedProducts = products
    .filter((p) => p.category === product?.category && p.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😔</div>
          <h1 className="text-3xl font-display font-bold text-jewel mb-4">
            Product not found
          </h1>
          <Link to="/products" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <main className="min-h-screen bg-lightBg pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex gap-2 text-sm">
            <Link to="/" className="text-gold hover:text-darkGold">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gold hover:text-darkGold">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden h-96 md:h-[500px] flex items-center justify-center">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === idx
                        ? 'border-gold'
                        : 'border-gray-200 hover:border-gold'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="bg-white rounded-lg p-8 space-y-6">
            {/* Category */}
            <span className="inline-block text-xs font-bold text-gold uppercase tracking-wider">
              {product.category}
            </span>

            {/* Name */}
            <h1 className="text-4xl font-display font-bold text-jewel">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 text-xl' : 'text-gray-300 text-xl'}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-gold">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <span className="bg-gold text-white px-3 py-1 rounded-full text-sm font-bold">
                      Save {discount}%
                    </span>
                  </>
                )}
              </div>
              <p className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">{product.description}</p>

            {/* Specs */}
            <div className="border-t border-b border-gray-200 py-4 space-y-3">
              {product.material && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Material:</span>
                  <span className="font-semibold text-jewel">{product.material}</span>
                </div>
              )}
              {product.weight && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Weight:</span>
                  <span className="font-semibold text-jewel">{product.weight}</span>
                </div>
              )}
              {product.dimensions && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Dimensions:</span>
                  <span className="font-semibold text-jewel">{product.dimensions}</span>
                </div>
              )}
            </div>

            {/* Add to Cart */}
            {product.inStock ? (
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gold hover:bg-lightBg transition"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                      className="w-16 text-center border-l border-r border-gray-300 py-2"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gold hover:bg-lightBg transition"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 btn py-3 font-bold text-lg transition ${
                      isAdded ? 'bg-green-500 text-white' : 'btn-primary'
                    }`}
                  >
                    {isAdded ? '✓ Added to Cart' : '🛍️ Add to Cart'}
                  </button>
                </div>

                {/* Wishlist & Share */}
                <div className="flex gap-4">
                  <button className="flex-1 btn btn-outline py-3">
                    ❤️ Add to Wishlist
                  </button>
                  <button className="flex-1 btn btn-outline py-3">
                    📤 Share
                  </button>
                </div>
              </div>
            ) : (
              <button className="w-full btn bg-gray-300 text-gray-600 cursor-not-allowed py-3 font-bold">
                Out of Stock
              </button>
            )}

            {/* Trust Badges */}
            <div className="bg-lightBg p-4 rounded-lg space-y-2">
              <p className="flex items-center gap-2 text-sm">
                <span>✓</span> Free shipping on orders over $100
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span>✓</span> 30-day money-back guarantee
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span>✓</span> Authentic certified jewellery
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg overflow-hidden mb-12">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200">
            {(['description', 'details', 'reviews'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 font-semibold transition capitalize border-b-2 ${
                  activeTab === tab
                    ? 'text-gold border-gold bg-lightBg'
                    : 'text-gray-600 border-transparent hover:text-gold'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'description' && (
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{product.details || product.description}</p>
                <p className="text-gray-600">
                  Each piece is crafted with meticulous attention to detail, showcasing the finest
                  materials and expert craftsmanship. Perfect for collectors and those seeking premium luxury.
                </p>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="space-y-4">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-semibold text-jewel w-1/3">Category</td>
                      <td className="py-2 text-gray-700">{product.category}</td>
                    </tr>
                    {product.material && (
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-semibold text-jewel">Material</td>
                        <td className="py-2 text-gray-700">{product.material}</td>
                      </tr>
                    )}
                    {product.weight && (
                      <tr className="border-b border-gray-200">
                        <td className="py-2 font-semibold text-jewel">Weight</td>
                        <td className="py-2 text-gray-700">{product.weight}</td>
                      </tr>
                    )}
                    {product.dimensions && (
                      <tr>
                        <td className="py-2 font-semibold text-jewel">Dimensions</td>
                        <td className="py-2 text-gray-700">{product.dimensions}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-bold">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-jewel">John Doe</span>
                      <span className="flex gap-1 text-yellow-400">
                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">Verified Purchase</p>
                    <p className="text-gray-700">Absolutely stunning piece! Exceeded my expectations.</p>
                  </div>
                </div>

                {/* Add Review Button */}
                <button className="btn btn-primary">
                  Write a Review
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-display font-bold text-jewel mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetails;
