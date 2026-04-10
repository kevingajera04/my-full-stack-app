import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, firstName: string, lastName: string) => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const stored = localStorage.getItem('auth');
    return stored ? JSON.parse(stored).authenticated : false;
  });
  
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('auth');
    return stored ? JSON.parse(stored).user : null;
  });

  const login = async (email: string, password: string) => {
    // Simulate API call with validation
    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    // Mock admin user
    if (email === 'admin@jewellery.com' && password === 'admin123') {
      const adminUser: User = {
        id: 'user-3',
        email: 'admin@jewellery.com',
        firstName: 'Admin',
        lastName: 'User',
        isAdmin: true,
      };
      setUser(adminUser);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify({ authenticated: true, user: adminUser }));
      return;
    }

    // Mock regular user
    if (email && password === 'password123') {
      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        firstName: 'John',
        lastName: 'Doe',
        isAdmin: false,
      };
      setUser(newUser);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify({ authenticated: true, user: newUser }));
      return;
    }

    throw new Error('Invalid email or password');
  };

  const signup = async (email: string, password: string, firstName: string, lastName: string) => {
    if (!email || !password || !firstName || !lastName) {
      throw new Error('All fields are required');
    }

    const newUser: User = {
      id: `user-${Date.now()}`,
      email,
      firstName,
      lastName,
      isAdmin: false,
    };

    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('auth', JSON.stringify({ authenticated: true, user: newUser }));
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        signup,
        isAdmin: user?.isAdmin ?? false,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
