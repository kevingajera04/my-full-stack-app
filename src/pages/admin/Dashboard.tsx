import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Orders', value: '1,234', icon: '📦', color: 'bg-blue-100 text-blue-800' },
    { label: 'Revenue', value: '$125,340', icon: '💰', color: 'bg-green-100 text-green-800' },
    { label: 'Products', value: '156', icon: '💎', color: 'bg-gold/10 text-gold' },
    { label: 'Users', value: '2,547', icon: '👥', color: 'bg-purple-100 text-purple-800' },
  ];

  const orderTrend = [
    { date: 'Mon', orders: 45, revenue: 2400 },
    { date: 'Tue', orders: 52, revenue: 2210 },
    { date: 'Wed', orders: 48, revenue: 2290 },
    { date: 'Thu', orders: 61, revenue: 2000 },
    { date: 'Fri', orders: 55, revenue: 2181 },
    { date: 'Sat', orders: 67, revenue: 2500 },
    { date: 'Sun', orders: 48, revenue: 2100 },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Doe', amount: '$2,499', status: 'Delivered', date: '2024-01-20' },
    { id: 'ORD-002', customer: 'Jane Smith', amount: '$3,899', status: 'Shipped', date: '2024-01-19' },
    { id: 'ORD-003', customer: 'Mike Johnson', amount: '$1,899', status: 'Processing', date: '2024-01-18' },
    { id: 'ORD-004', customer: 'Sarah Williams', amount: '$899', status: 'Pending', date: '2024-01-17' },
    { id: 'ORD-005', customer: 'Emily Brown', amount: '$4,299', status: 'Delivered', date: '2024-01-16' },
  ];

  const topProducts = [
    { id: 1, name: 'Diamond Solitaire Ring', sales: 156, revenue: '$312,000' },
    { id: 2, name: 'Pearl Drop Earrings', sales: 143, revenue: '$128,557' },
    { id: 3, name: 'Sapphire Tennis Bracelet', sales: 98, revenue: '$186,102' },
    { id: 4, name: 'Gold Necklace', sales: 87, revenue: '$52,113' },
    { id: 5, name: 'Emerald Ring', sales: 76, revenue: '$189,924' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold text-jewel mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-600">{stat.label}</h3>
              <span className="text-3xl">{stat.icon}</span>
            </div>
            <p className="text-3xl font-bold text-jewel">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Orders Trend */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-display font-bold text-xl text-jewel mb-4">Orders Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={orderTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="orders"
                stroke="#D4AF37"
                strokeWidth={2}
                dot={{ fill: '#D4AF37', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-display font-bold text-xl text-jewel mb-4">Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={orderTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#D4AF37" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="font-display font-bold text-xl text-jewel mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Order ID</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Customer</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-semibold text-gold">{order.id}</td>
                  <td className="py-3 px-4 text-gray-700">{order.customer}</td>
                  <td className="py-3 px-4 text-gray-700">{order.amount}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : order.status === 'Shipped'
                          ? 'bg-blue-100 text-blue-800'
                          : order.status === 'Processing'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="font-display font-bold text-xl text-jewel mb-4">Top Selling Products</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Product</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Sales</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {topProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-700">{product.name}</td>
                  <td className="py-3 px-4">
                    <span className="font-semibold text-jewel">{product.sales}</span>
                  </td>
                  <td className="py-3 px-4 text-gold font-semibold">{product.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
