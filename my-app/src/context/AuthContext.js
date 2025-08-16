"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // simple mock login system (firebase se connect karna hai to yahan auth check lagao)
  useEffect(() => {
    if (!user) {
      router.push("/signup"); // by default signup pe bhejo
    }
  }, [user, router]);

  const login = (userData) => {
    setUser(userData);
    router.push("/"); // login ke baad home
  };

  const logout = () => {
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
