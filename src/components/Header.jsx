"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import useSound from "use-sound"
import { Volume2, VolumeX } from "lucide-react"
import { useAudio } from "@/context/SoundContext"

export default function Header() {
  const pathname = usePathname()
  const { muted, toggleMuted } = useAudio()

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
            onClick={() => !muted && play()}
            className={`text-stone-400 hover:text-neutral-200 duration-200 transition-all ${link.isActive ? "font-bold" : ""}`}
          >
            {link.name}
          </Link>
        ))}
        <button
          onClick={toggleMuted}
          className="p-2 rounded-lg text-stone-400 hover:bg-stone-800 transition-colors cursor-pointer"
          aria-label="Toggle Mute"
          aria-pressed={muted}
        >
          {muted ? <VolumeX className="h-4 w-4"/> : <Volume2 className="h-4 w-4"/>}
        </button>
			</div>
    </div>
  )
}