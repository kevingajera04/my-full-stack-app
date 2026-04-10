import React, { useState } from 'react';
import { FilterOptions } from '../types';
import { categories } from '../data/products';

interface CategoryFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  activeFilters: FilterOptions;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onFilterChange, activeFilters }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'rating'>('newest');

  const handleCategoryChange = (categoryName: string) => {
    onFilterChange({
      ...activeFilters,
      category: activeFilters.category === categoryName ? undefined : categoryName,
    });
  };

  const handlePriceChange = () => {
    onFilterChange({
      ...activeFilters,
      priceRange: [minPrice, maxPrice],
    });
  };

  const handleSortChange = (sort: 'newest' | 'price-low' | 'price-high' | 'rating') => {
    setSortBy(sort);
    onFilterChange({
      ...activeFilters,
      sortBy: sort,
    });
  };

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-display font-bold text-lg mb-4 text-jewel">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={activeFilters.category === cat.name}
                onChange={() => handleCategoryChange(cat.name)}
                className="w-5 h-5 accent-gold cursor-pointer"
              />
              <img 
                src={cat.icon} 
                alt={cat.name}
                className="w-6 h-6 object-cover rounded"
              />
              <span className="text-gray-700 group-hover:text-gold transition">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-display font-bold text-lg mb-4 text-jewel">Price Range</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Min Price: ${minPrice}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={minPrice}
              onChange={(e) => setMinPrice(parseInt(e.target.value))}
              onMouseUp={handlePriceChange}
              onTouchEnd={handlePriceChange}
              className="w-full accent-gold"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Max Price: ${maxPrice}</label>
            <input
              type="range"
              min="0"
              max="10000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              onMouseUp={handlePriceChange}
              onTouchEnd={handlePriceChange}
              className="w-full accent-gold"
            />
          </div>
          <div className="text-sm font-medium text-gold">
            ${minPrice} - ${maxPrice}
          </div>
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-display font-bold text-lg mb-4 text-jewel">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value as any)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-gold focus:ring-gold"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>

      {/* Reset Filters */}
      {(activeFilters.category || activeFilters.priceRange || activeFilters.sortBy) && (
        <button
          onClick={() => {
            setMinPrice(0);
            setMaxPrice(10000);
            setSortBy('newest');
            onFilterChange({});
          }}
          className="w-full btn btn-sm btn-outline"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;
