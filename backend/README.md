# Jewellery Management System - Backend

Complete Node.js + Express + MongoDB backend for Jewellery Management System.

## Project Structure

```
backend/
├── server.js           # Main entry point
├── package.json        # Dependencies
├── models/             # Database schemas
│   ├── User.js         # User model (authentication)
│   ├── Jewellery.js    # Jewellery items model
│   ├── Category.js     # Categories model
│   └── Order.js        # Orders model
├── routes/             # API routes
│   ├── auth.js         # Login & Signup endpoints
│   ├── jewellery.js    # Jewellery CRUD endpoints
│   ├── category.js     # Category CRUD endpoints
│   └── orders.js       # Orders CRUD endpoints
└── .gitignore          # Git ignore file
```

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Starting MongoDB

### Windows (Using Command Prompt/PowerShell):
Make sure MongoDB is installed, then run:
```bash
mongod
```

MongoDB will start on `mongodb://127.0.0.1:27017`

## Running the Backend Server

Start the development server:
```bash
npm run dev
```

You should see:
```
MongoDB connected successfully
Jewellery Management Backend running at http://localhost:5000
API Base URL: http://localhost:5000/api
```

## API Endpoints

### Authentication
- **POST** `/api/auth/signup` - Create new user
- **POST** `/api/auth/login` - Login user

### Jewellery (CRUD)
- **GET** `/api/jewellery` - Get all jewellery
- **GET** `/api/jewellery/:id` - Get single jewellery
- **POST** `/api/jewellery` - Create new jewellery (Admin)
- **PUT** `/api/jewellery/:id` - Update jewellery (Admin)
- **DELETE** `/api/jewellery/:id` - Delete jewellery (Admin)

### Categories
- **GET** `/api/category` - Get all categories
- **GET** `/api/category/:id` - Get single category
- **POST** `/api/category` - Create new category (Admin)
- **PUT** `/api/category/:id` - Update category (Admin)
- **DELETE** `/api/category/:id` - Delete category (Admin)

### Orders
- **GET** `/api/orders` - Get all orders (Admin)
- **GET** `/api/orders/:id` - Get single order
- **GET** `/api/orders/user/:userId` - Get user's orders
- **POST** `/api/orders` - Create new order
- **PUT** `/api/orders/:id` - Update order status (Admin)
- **DELETE** `/api/orders/:id` - Delete order

## Example API Requests

### Signup
```bash
POST http://localhost:5000/api/auth/signup
Body: { "username": "john", "password": "pass123" }
```

### Login
```bash
POST http://localhost:5000/api/auth/login
Body: { "username": "john", "password": "pass123" }
```

### Get All Jewellery
```bash
GET http://localhost:5000/api/jewellery
```

## Frontend Integration

Use `fetch` or `axios` to connect from your React frontend. The API runs on `http://localhost:5000`.
