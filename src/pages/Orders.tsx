import React from 'react';
import { Link } from 'react-router-dom';
import { mockOrders } from '../data/products';
import { useAuth } from '../context/AuthContext';

const Orders: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-lightBg flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔐</div>
          <h1 className="text-3xl font-display font-bold text-jewel mb-4">
            Sign in to View Orders
          </h1>
          <p className="text-gray-600 mb-8">
            You need to be logged in to view your orders.
          </p>
          <Link to="/login" className="btn btn-primary">
            Sign In
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-lightBg py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-jewel mb-2">My Orders</h1>
        <p className="text-gray-600 text-lg mb-8">
          View and manage your orders
        </p>

        {mockOrders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-16 text-center">
            <div className="text-6xl mb-4">📦</div>
            <h2 className="text-2xl font-display font-bold text-jewel mb-2">
              No Orders Yet
            </h2>
            <p className="text-gray-600 mb-8">
              You haven't placed any orders yet. Start shopping now!
            </p>
            <Link to="/products" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {mockOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                {/* Order Header */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-gray-200 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="font-semibold text-jewel">{order.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold text-jewel">{order.createdAt}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="font-semibold text-gold text-lg">
                      ${order.totalPrice.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p
                      className={`font-semibold text-sm px-3 py-1 rounded-full w-fit ${
                        order.status === 'delivered'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </p>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                  <h3 className="font-display font-bold text-jewel mb-4">Items</h3>
                  <div className="space-y-3">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 pb-3 border-b border-gray-100 last:border-0"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-jewel">{item.product.name}</p>
                          <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-gold">
                          ${(item.product.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-lightBg rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 mb-1">Shipping Address</p>
                  <p className="text-jewel font-medium">{order.shippingAddress}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-4 flex-wrap">
                  <button className="btn btn-outline py-2">Track Order</button>
                  <button className="btn btn-outline py-2">View Invoice</button>
                  <button className="btn btn-outline py-2">Return Items</button>
                  <Link to="/products" className="btn btn-secondary py-2">
                    Reorder
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Orders;
