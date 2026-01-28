"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import useSound from "use-sound"

export default function Header() {
  const pathname = usePathname()

  const links = [
    {
      name: "[about]",
      href: "/",
      isActive: pathname === "/"
    },
    {
      name: "[projects]",
      href: "/projects",
      isActive: pathname === "/projects"
    },
  ]
  
  const [play] = useSound("/sfx/click_general.mp3", { volume: 0.2 })

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-neutral-200 hover:text-white duration-200 transition-all font-semibold">
        <Link href="/">jakob dubeau</Link>
      </h1>
			<div className="flex items-center gap-2 text-sm md:gap-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => play()}
            className={`text-stone-400 hover:text-neutral-200 duration-200 transition-all ${link.isActive ? "font-bold" : ""}`}
          >
            {link.name}
          </Link>
        ))}
			</div>
    </div>
  )
}