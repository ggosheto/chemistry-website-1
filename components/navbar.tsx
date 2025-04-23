"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { useAuth } from "@/components/auth-provider"
import { UserNav } from "@/components/user-nav"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { user, isAuthenticated } = useAuth()

  const routes = [
    { href: "/", label: "Начало" },
    { href: "/forum", label: "Форум" },
    { href: "/blog", label: "Блог за рециклиране" },
    { href: "/calculator", label: "Калкулатор" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-600">ChemCycle</span>
          </Link>
        </div>
        <nav className="hidden md:flex md:gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`text-sm font-medium transition-colors hover:text-green-600 ${
                pathname === route.href ? "text-green-600" : "text-foreground/60"
              }`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <UserNav user={user} />
          ) : (
            <div className="hidden md:flex md:gap-2">
              <Button variant="outline" asChild>
                <Link href="/login">Вход</Link>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="/signup">Регистрация</Link>
              </Button>
            </div>
          )}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="flex flex-col gap-4 px-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <span className="text-xl font-bold text-green-600">ChemCycle</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-sm font-medium transition-colors hover:text-green-600 ${
                        pathname === route.href ? "text-green-600" : "text-foreground/60"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
                {!isAuthenticated && (
                  <div className="flex flex-col gap-2 pt-4">
                    <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                      <Link href="/login">Вход</Link>
                    </Button>
                    <Button asChild className="bg-green-600 hover:bg-green-700" onClick={() => setIsOpen(false)}>
                      <Link href="/signup">Регистрация</Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
