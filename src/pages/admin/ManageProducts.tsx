import React, { useState } from 'react';
import { products } from '../../data/products';
import { Product } from '../../types';

const ManageProducts: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: 0,
    description: '',
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProductList(productList.filter(p => p.id !== id));
    }
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description,
    });
  };

  const handleSave = () => {
    if (editingId) {
      setProductList(
        productList.map(p =>
          p.id === editingId
            ? { ...p, ...formData }
            : p
        )
      );
    } else {
      setProductList([
        ...productList,
        {
          id: `p-${Date.now()}`,
          ...formData,
          image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500',
          images: [],
          rating: 0,
          reviews: 0,
          inStock: true,
        },
      ]);
    }
    resetForm();
  };

  const resetForm = () => {
    setIsAddingNew(false);
    setEditingId(null);
    setFormData({ name: '', category: '', price: 0, description: '' });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-display font-bold text-jewel mb-2">Manage Products</h1>
          <p className="text-gray-600">Total Products: {productList.length}</p>
        </div>
        <button
          onClick={() => setIsAddingNew(true)}
          className="btn btn-primary"
        >
          + Add New Product
        </button>
      </div>

      {/* Add/Edit Form */}
      {(isAddingNew || editingId) && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="font-display font-bold text-xl text-jewel mb-4">
            {editingId ? 'Edit Product' : 'Add New Product'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
              className="border border-gray-300 rounded-lg px-4 py-2"
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="md:col-span-2 border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div className="flex gap-2 mt-4">
            <button onClick={handleSave} className="btn btn-primary py-2">
              Save
            </button>
            <button onClick={resetForm} className="btn btn-outline py-2">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Product</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Category</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Price</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Stock</th>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <span className="font-medium text-gray-900">{product.name.substring(0, 30)}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-700">{product.category}</td>
                  <td className="py-4 px-6 text-gold font-semibold">${product.price.toLocaleString()}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                  <td className="py-4 px-6 space-x-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Delete
                    </button>
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

export default ManageProducts;
