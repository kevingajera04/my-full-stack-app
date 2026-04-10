import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Reports: React.FC = () => {
  const categoryData = [
    { name: 'Rings', value: 256, fill: '#D4AF37' },
    { name: 'Necklaces', value: 189, fill: '#AA8C2C' },
    { name: 'Bracelets', value: 142, fill: '#FFD700' },
    { name: 'Earrings', value: 198, fill: '#FFA500' },
    { name: 'Brooches', value: 87, fill: '#DAA520' },
  ];

  const monthlyData = [
    { month: 'Jan', sales: 45000, orders: 120 },
    { month: 'Feb', sales: 52000, orders: 135 },
    { month: 'Mar', sales: 48000, orders: 125 },
    { month: 'Apr', sales: 61000, orders: 155 },
    { month: 'May', sales: 55000, orders: 142 },
    { month: 'Jun', sales: 67000, orders: 168 },
  ];

  const topRegions = [
    { region: 'North America', percentage: 35, sales: '$87,500' },
    { region: 'Europe', percentage: 28, sales: '$70,000' },
    { region: 'Asia', percentage: 22, sales: '$55,000' },
    { region: 'Others', percentage: 15, sales: '$37,500' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-display font-bold text-jewel mb-2">Reports & Analytics</h1>
        <p className="text-gray-600">Detailed business analytics and insights</p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="font-display font-bold text-xl text-jewel mb-4">
            Sales by Category
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} (${value})`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="font-display font-bold text-xl text-jewel mb-4">
            Monthly Sales Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#D4AF37" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Average Order Value', value: '$450', change: '+12%', icon: '💰' },
          { label: 'Conversion Rate', value: '3.2%', change: '+0.4%', icon: '📊' },
          { label: 'Customer Retention', value: '78%', change: '+5%', icon: '👥' },
          { label: 'Avg. Review Score', value: '4.7/5', change: '+0.2', icon: '⭐' },
        ].map((metric, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-600 text-sm">{metric.label}</p>
              <span className="text-2xl">{metric.icon}</span>
            </div>
            <p className="text-3xl font-bold text-jewel">{metric.value}</p>
            <p className="text-green-600 text-sm font-semibold mt-2">{metric.change}</p>
          </div>
        ))}
      </div>

      {/* Regional Performance */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="font-display font-bold text-xl text-jewel mb-6">
          Regional Performance
        </h2>
        <div className="space-y-4">
          {topRegions.map((region, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-900">{region.region}</span>
                <span className="text-gold font-bold">{region.sales}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gold rounded-full h-2"
                    style={{ width: `${region.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-gray-700">{region.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Table */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="font-display font-bold text-xl text-jewel mb-4">
          Product Performance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold">Product</th>
                <th className="text-left py-3 px-4 font-semibold">Units Sold</th>
                <th className="text-left py-3 px-4 font-semibold">Revenue</th>
                <th className="text-left py-3 px-4 font-semibold">ROI</th>
                <th className="text-left py-3 px-4 font-semibold">Trend</th>
              </tr>
            </thead>
            <tbody>
              {[
                { product: 'Diamond Ring', units: 156, revenue: '$312,000', roi: '45%', trend: '↑' },
                { product: 'Pearl Earrings', units: 143, revenue: '$128,557', roi: '38%', trend: '↑' },
                { product: 'Sapphire Bracelet', units: 98, revenue: '$186,102', roi: '32%', trend: '→' },
                { product: 'Gold Necklace', units: 87, revenue: '$52,113', roi: '28%', trend: '↓' },
                { product: 'Emerald Ring', units: 76, revenue: '$189,924', roi: '41%', trend: '↑' },
              ].map((item, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">{item.product}</td>
                  <td className="py-3 px-4">{item.units}</td>
                  <td className="py-3 px-4 font-semibold text-gold">{item.revenue}</td>
                  <td className="py-3 px-4">{item.roi}</td>
                  <td className="py-3 px-4">
                    <span className={`font-bold ${
                      item.trend === '↑' ? 'text-green-600' : item.trend === '↓' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {item.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
