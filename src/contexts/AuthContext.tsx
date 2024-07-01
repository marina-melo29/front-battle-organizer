// src/contexts/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { isAuthenticated } from '../services/userService';

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthContextType>({
    isAuthenticated: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authStatus = await isAuthenticated();
        setAuth({
          isAuthenticated: authStatus,
          loading: false,
          error: null,
        });
      } catch (error) {
        let errorMessage = 'Unknown error';
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        setAuth({
          isAuthenticated: false,
          loading: false,
          error: errorMessage,
        });
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
