export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  details?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  material?: string;
  weight?: string;
  dimensions?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  isAdmin?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminStats {
  totalOrders: number;
  totalRevenue: number;
  totalProducts: number;
  totalUsers: number;
  ordersTrend: {
    date: string;
    orders: number;
    revenue: number;
  }[];
}

export interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  material?: string;
  sortBy?: 'newest' | 'price-low' | 'price-high' | 'rating';
}
