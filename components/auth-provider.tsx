"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type UserRole = "student" | "teacher"

interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string, role: UserRole) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setIsAuthenticated(true)
    }
  }, [])

  const login = async (email: string, password: string) => {
    // This is a mock implementation
    // In a real app, you would call an API endpoint

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock user data
    const mockUser: User = {
      id: "user-1",
      name: email.split("@")[0],
      email,
      role: email.includes("teacher") ? "teacher" : "student",
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem("user", JSON.stringify(mockUser))
  }

  const signup = async (name: string, email: string, password: string, role: UserRole) => {
    // This is a mock implementation
    // In a real app, you would call an API endpoint

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock user data
    const mockUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role,
    }

    setUser(mockUser)
    setIsAuthenticated(true)
    localStorage.setItem("user", JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
