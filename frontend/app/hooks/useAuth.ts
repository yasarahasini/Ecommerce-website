// app/hooks/useAuth.ts
"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check localStorage for a token (replace with your auth logic)
    const token = localStorage.getItem("authToken")
    if (token) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [])

  const protectRoute = () => {
    if (!isLoggedIn) {
      router.push("/signin") // redirect to signup if not logged in
    }
  }

  return { isLoggedIn, protectRoute, setIsLoggedIn }
}
