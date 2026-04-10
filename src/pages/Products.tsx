import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { products } from '../data/products';
import { FilterOptions } from '../types';

const Products: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState<FilterOptions>({});
  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category');

  // Initialize filters from URL params
  React.useEffect(() => {
    const newFilters: FilterOptions = {};
    if (categoryParam) {
      newFilters.category = categoryParam;
    }
    setFilters(newFilters);
  }, [categoryParam]);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Search filter
    if (searchQuery) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price filter
    if (filters.priceRange && filters.priceRange.length === 2) {
      result = result.filter(
        (p) =>
          p.price >= filters.priceRange![0] && p.price <= filters.priceRange![1]
      );
    }

    // Sorting
    if (filters.sortBy) {
      switch (filters.sortBy) {
        case 'price-low':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          result.sort((a, b) => b.rating - a.rating);
          break;
        default:
          result.sort((a, b) => a.id.localeCompare(b.id));
      }
    }

    return result;
  }, [searchQuery, filters]);

  return (
    <main className="min-h-screen bg-lightBg pb-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-jewel to-gold py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-white">
          <h1 className="text-4xl font-display font-bold mb-2">
            {searchQuery ? `Search: "${searchQuery}"` : 'Our Collection'}
          </h1>
          <p className="text-gray-200">
            {filteredProducts.length} products found
          </p>
        </div>
      </section>

      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filters */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <CategoryFilter
                  onFilterChange={setFilters}
                  activeFilters={filters}
                />
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-lg p-16 text-center">
                  <div className="text-6xl mb-4">🔍</div>
                  <h2 className="text-2xl font-display font-bold text-jewel mb-2">
                    No products found
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or search terms
                  </p>
                  <button
                    onClick={() => setFilters({})}
                    className="btn btn-primary"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
