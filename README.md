# Jewellery Elegance - Premium E-Commerce Website

A complete, fully functional jewellery e-commerce website built with React, Vite, TypeScript, and Tailwind CSS.

## 📋 Features

### User Features
- **Homepage**: Hero banner, featured products, categories, testimonials
- **Product Catalog**: Browse all jewellery with advanced filtering (category, price, rating)
- **Product Details**: Detailed product information, images, specifications, reviews
- **Shopping Cart**: Add/remove items, update quantities, view summary
- **Checkout**: Multi-step checkout with form validation
- **User Authentication**: Login and signup with demo credentials
- **Order History**: View and track orders
- **Contact & About**: Contact form with validation, company information

### Admin Features
- **Protected Dashboard**: Admin-only access with authentication
- **Dashboard Analytics**: Order trends, revenue charts, key metrics
- **Product Management**: Add, edit, delete products
- **Order Management**: View/update order status
- **User Management**: View users, manage admin roles
- **Reports & Analytics**: Sales by category, monthly trends, regional performance

### Design Features
- **Premium UI**: Luxury jewellery theme with gold, black, and white colors
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UX**: Smooth animations, hover effects, clean layouts
- **Form Validation**: Email, password, checkout form validation
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback for async operations
- **Accessibility**: Semantic HTML, proper contrast ratios

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **CSS Framework**: Tailwind CSS
- **Routing**: React Router DOM
- **Charts**: Recharts
- **State Management**: React Context API
- **Styling**: Tailwind CSS + Custom CSS

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── CategoryFilter.tsx
│   ├── AdminSidebar.tsx
│   └── ...
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Products.tsx
│   ├── ProductDetails.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Orders.tsx
│   ├── Contact.tsx
│   ├── About.tsx
│   ├── Login.tsx
│   ├── Signup.tsx
│   └── admin/          # Admin pages
│       ├── Dashboard.tsx
│       ├── ManageProducts.tsx
│       ├── ManageOrders.tsx
│       ├── ManageUsers.tsx
│       └── Reports.tsx
├── context/            # React Context
│   ├── CartContext.tsx
│   └── AuthContext.tsx
├── types/              # TypeScript types
│   └── index.ts
├── data/               # Dummy data
│   └── products.ts
├── styles/             # CSS files
│   └── globals.css
├── icons/              # Icon components
│   ├── SearchIcon.tsx
│   ├── MenuIcon.tsx
│   └── CloseIcon.tsx
├── App.tsx             # Main app component with routing
└── main.tsx            # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or navigate to project directory**
```bash
cd c:\Users\Kevin\Desktop\pr2
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview
```

## 🔐 Demo Credentials

### Regular User
- Email: `any@email.com`
- Password: `password123`

### Admin User
- Email: `admin@jewellery.com`
- Password: `admin123`

## 🎨 Design System

### Colors
- **Primary Gold**: `#D4AF37`
- **Dark Gold**: `#AA8C2C`
- **Jewel (Dark)**: `#1a1a1a`
- **Light Background**: `#F5F5F5`
- **Accent Gold**: `#FFD700`

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: Inter (body text)

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📦 Features Breakdown

### Authentication
- ✅ Login with email validation
- ✅ Signup with password confirmation
- ✅ Password show/hide toggle
- ✅ Protected admin routes
- ✅ User profile information

### Product Management
- ✅ Product filtering by category, price, rating
- ✅ Product search functionality
- ✅ Product details with images
- ✅ Related products suggestions
- ✅ Product reviews section
- ✅ In-stock indicators

### Shopping Cart
- ✅ Add/remove items
- ✅ Update quantities
- ✅ Calculate totals (subtotal, tax, shipping)
- ✅ Free shipping threshold
- ✅ Cart persistence

### Checkout
- ✅ Multi-step checkout process
- ✅ Shipping address form
- ✅ Payment information
- ✅ Order review
- ✅ Form validation
- ✅ Order confirmation

### Admin Panel
- ✅ Dashboard with analytics
- ✅ Charts and statistics
- ✅ Product CRUD operations
- ✅ Order status management
- ✅ User role management
- ✅ Sales reports
- ✅ Revenue analytics

## 🎯 Pages & Routes

### User Routes
- `/` - Home page
- `/products` - Product listing
- `/products/:id` - Product details
- `/cart` - Shopping cart
- `/checkout` - Checkout process
- `/orders` - Order history
- `/contact` - Contact page
- `/about` - About us
- `/login` - Login page
- `/signup` - Signup page

### Admin Routes
- `/admin/dashboard` - Admin dashboard
- `/admin/products` - Manage products
- `/admin/orders` - Manage orders
- `/admin/users` - Manage users
- `/admin/reports` - Analytics & reports

## 📱 Responsive Features

- Mobile-first design approach
- Hamburger menu for mobile navigation
- Responsive product grid (1, 2, or 3 columns)
- Touch-friendly buttons and inputs
- Optimized images for all screen sizes
- Flexible layouts using Tailwind CSS

## 🔒 Security Features

- Protected admin routes
- Form validation on client side
- Secure payment form
- User authentication context
- Admin-only access control

## 🎭 UI Components

- Product cards with hover effects
- Shopping cart summary
- Form validation with error messages
- Status badges and indicators
- Charts and graphs (Recharts)
- Tabs for product details
- Accordion for FAQs
- Breadcrumb navigation
- Modal dialogs for confirmations

## 💡 Key Features Implementation

### State Management
- Cart state with Context API
- Authentication state with localStorage
- Form state with useState hooks

### Data Fetching
- Mock data for products, orders, users
- Simulated API calls with async/await
- Error handling and loading states

### Form Handling
- Email validation
- Password strength checks
- Card number formatting
- Real-time form validation

## 🎨 Styling Highlights

- Premium gold color scheme
- Smooth transitions and animations
- Hover effects on interactive elements
- Gradient backgrounds
- Shadow effects for depth
- Glass morphism effects
- Responsive grid layouts

## 📚 Components Library

### Layout Components
- Navbar with search and mobile menu
- Footer with links and newsletter signup
- AdminSidebar for navigation

### Feature Components
- ProductCard for product display
- CategoryFilter for filtering
- Shopping cart display

### Page Components
- 10+ full-page components
- 5 admin dashboard pages

## 🚦 Getting Started with Development

1. Review the folder structure
2. Check `src/data/products.ts` for dummy data structure
3. Explore `src/context/` for state management patterns
4. Look at `src/types/index.ts` for TypeScript interfaces
5. Customize colors in `tailwind.config.js`
6. Add your own styles in `src/styles/globals.css`

## 🔗 Dependencies

### Main Dependencies
- react@^18.2.0
- react-dom@^18.2.0
- react-router-dom@^6.20.0
- recharts@^2.10.3
- tailwindcss@^3.4.1

### Dev Dependencies
- typescript@^5.2.2
- vite@^5.0.8
- @vitejs/plugin-react@^4.2.1
- autoprefixer@^10.4.16
- postcss@^8.4.32

## 📝 Notes

- All data is mock data stored in context
- No backend API is required (can be added later)
- For production, integrate with real backend
- Images use Unsplash URLs (can be replaced)
- Payment processing is simulated
- Email is not actually sent

## 🎓 Learning Resources

This project demonstrates:
- React hooks (useState, useContext, useEffect)
- TypeScript usage in React
- Routing with React Router
- Context API for state management
- Tailwind CSS utility classes
- Form validation patterns
- Component composition
- Responsive design
- Authentication flow

## 📞 Support

For issues or questions:
1. Check the documentation above
2. Review the code structure
3. Verify demo credentials are correct
4. Check browser console for errors
5. Ensure all dependencies are installed

## ✨ Future Enhancements

- Backend API integration
- Real payment processing
- Email notifications
- Wishlist functionality
- Advanced search/filters
- User reviews and ratings
- Inventory management
- Multi-language support
- Dark mode toggle
- Performance optimization

## 📄 License

This project is provided as-is for educational and commercial use.

---

**Built with ❤️ - Premium Jewellery E-Commerce Platform**
