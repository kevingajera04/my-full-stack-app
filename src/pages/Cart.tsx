import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  const tax = Math.round(totalPrice * 0.1 * 100) / 100;
  const cartTotal = totalPrice + tax + (totalPrice > 100 ? 0 : 15);
  const shipping = totalPrice > 100 ? 0 : 15;

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-lightBg py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-16 text-center">
            <div className="text-6xl mb-4">🛍️</div>
            <h1 className="text-3xl font-display font-bold text-jewel mb-2">
              Your Cart is Empty
            </h1>
            <p className="text-gray-600 mb-8">
              Add some beautiful jewellery to your cart and come back to checkout.
            </p>
            <Link to="/products" className="btn btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-lightBg pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-display font-bold text-jewel mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 flex gap-6 hover:shadow-lg transition"
              >
                {/* Product Image */}
                <Link
                  to={`/products/${item.product.id}`}
                  className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-lightBg"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </Link>

                {/* Product Details */}
                <div className="flex-1">
                  <Link
                    to={`/products/${item.product.id}`}
                    className="text-xl font-semibold text-jewel hover:text-gold transition"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-gray-600 text-sm mb-2">{item.product.category}</p>
                  <p className="text-gold text-lg font-bold mb-3">
                    ${item.product.price.toLocaleString()}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-3 py-1 text-gray-600 hover:text-gold transition"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.product.id,
                          Math.max(1, parseInt(e.target.value) || 1)
                        )
                      }
                      className="w-12 text-center border-l border-r border-gray-300 py-1"
                    />
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-3 py-1 text-gray-600 hover:text-gold transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="flex flex-col items-end justify-between">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <p className="text-2xl font-bold text-gold">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:text-red-700 font-semibold transition"
                  >
                    ✕ Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 space-y-4">
              <h2 className="text-2xl font-display font-bold text-jewel">Order Summary</h2>

              <div className="space-y-3 border-b border-gray-200 pb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax (10%)</span>
                  <span>${tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-semibold">FREE</span>
                    ) : (
                      `$${shipping.toLocaleString()}`
                    )}
                  </span>
                </div>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-green-600">
                  🎉 Free shipping on orders over $100
                </p>
              )}

              <div className="flex justify-between text-xl font-bold text-gold">
                <span>Total</span>
                <span>${cartTotal.toLocaleString()}</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full btn btn-primary py-3 font-bold text-lg"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={() => navigate('/products')}
                className="w-full btn btn-outline py-3"
              >
                Continue Shopping
              </button>

              {/* Trust Badges */}
              <div className="bg-lightBg p-4 rounded-lg space-y-2 text-xs">
                <p className="flex items-center gap-2">
                  <span>✓</span> Secure checkout
                </p>
                <p className="flex items-center gap-2">
                  <span>✓</span> Money-back guarantee
                </p>
                <p className="flex items-center gap-2">
                  <span>✓</span> Free returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
