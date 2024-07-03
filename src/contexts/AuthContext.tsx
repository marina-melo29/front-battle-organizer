import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { isAuthenticated } from '../services/userService';

interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
  error: null,
  setIsAuthenticated: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthContextType>({
    isAuthenticated: false,
    loading: true,
    error: null,
    setIsAuthenticated: () => {}
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authStatus = await isAuthenticated();
        setAuth({
          isAuthenticated: authStatus,
          loading: false,
          error: null,
          setIsAuthenticated: setIsAuthenticatedHandler,
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
          setIsAuthenticated: setIsAuthenticatedHandler,
        });
      }
    };

    checkAuth();
  }, []);

  const setIsAuthenticatedHandler: React.Dispatch<React.SetStateAction<boolean>> = (value) => {
    setAuth(prevAuth => ({
      ...prevAuth,
      isAuthenticated: typeof value === 'function' ? value(prevAuth.isAuthenticated) : value,
    }));
  };

  return (
    <AuthContext.Provider value={{ ...auth, setIsAuthenticated: setIsAuthenticatedHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
