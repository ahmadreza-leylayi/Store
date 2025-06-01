'use client'

import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import Cookie from "js-cookie"
import ShoppingCardContextProvider, { useShoppingCardContext } from "@/context/ShoppingCardContext"
import { useEffect } from "react"

function Navbar() {
  const pathname = usePathname()
  const { cardTotalQty, checkCookie } = useShoppingCardContext()

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Store", href: "/store" },
    { title: "Dashboard", href: "/dashboard" },
    { title: "Login", href: "/login" },
  ]

  return (
    <nav className="bg-orange-100 shadow-md border-b-2 border-orange-200 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* بخش لینک‌های منو */}
        <div className="flex flex-wrap gap-4 md:gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`text-gray-700 hover:text-orange-600 transition-colors duration-200 ${
                pathname === item.href ? "text-orange-600 font-semibold" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* بخش سبد خرید و خروج */}
        <div className="flex items-center gap-4 mt-4 md:mt-0 justify-center">
          <Link href="/card" className="flex items-center gap-2 hover:text-orange-600 transition-colors duration-200">
            <span className="bg-red-500 text-white rounded-full px-2 py-1 text-sm">{cardTotalQty}</span>
            <span>Shopping Basket</span>
          </Link>
          {checkCookie && (
            <button
              onClick={() => {
                Cookie.remove("token")
                redirect('/login')
              }}
              className="text-red-500 hover:text-red-700 transition-colors duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar