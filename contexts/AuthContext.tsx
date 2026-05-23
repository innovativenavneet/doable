/**
 * Auth context placeholder — wire to firebase authService when ready.
 */
import { createContext, ReactNode, useContext } from 'react';

interface AuthContextValue {
  userId: string | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextValue>({
  userId: null,
  isLoading: false,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={{ userId: null, isLoading: false }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
