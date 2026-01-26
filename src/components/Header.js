"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  const links = [
    {
      name: "about",
      href: "/",
      isActive: pathname === "/"
    },
    {
      name: "projects",
      href: "/projects",
      isActive: pathname === "/projects"
    },
  ]

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-red-500 font-extrabold">
        <Link href="/">Jakob Dubeau</Link>
      </h1>
    </div>
  )
}