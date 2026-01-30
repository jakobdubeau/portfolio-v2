"use client"
import ProjectList from "../../components/ProjectList"
import Link from "next/link"

import DiscoverDailyImage from "../../../public/projects/discoverdaily.png"
import LitematicaImage from "../../../public/projects/litematicamateriallistvisualizer.png"
import Soon from "../../../public/projects/soon.png"

import { useState } from "react"
import { Search } from "lucide-react"
import useSound from "use-sound"
import { useAudio } from "@/context/SoundContext"

export default function Home() {
	const projects = [
		{
			title: "Discover Daily",
			href: "https://discover-daily-seven.vercel.app/",
			description: "a spotify playlist generator that makes discovering new music easy, stuff you'll actually like.",
			image: DiscoverDailyImage,
			imageAlt: "Discover Daily",
			technologies: [
				"JavaScript",
				"React",
				"Next.js",
				"TailwindCSS",
				"Supabase",
				"OAuth",
			],
			github: "https://github.com/jakobdubeau/discover-daily",
		},
		{
			title: "Litematica Visualizer",
			href: "https://litematica-material-list-visualizer.vercel.app/",
			description: "a better way to view litematica material lists when planning your next build.",
			image: LitematicaImage,
			imageAlt: "Litematica Material List Visualizer",
			technologies: [
				"JavaScript",
				"React",
				"Next.js",
				"TailwindCSS",
			],
			github: "https://github.com/jakobdubeau/litematica-material-list-visualizer",
		},
		{
			title: "Kora",
			href: "https://github.com/jakobdubeau/kora",
			description: "a study & focus timer app inspired by those korean study apps.",
			image: Soon,
			imageAlt: "Kora",
			technologies: [
				"Swift",
				"SwiftUI",
				"Supabase",
				"Xcode",
			],
			github: "https://github.com/jakobdubeau/kora",
		},
		{
			title: "Art Gallery",
			href: "https://github.com/jakobdubeau/art-gallery",
			description: "a way to showcase all my touchdesigner animations and cool stuff, wip.",
			image: Soon,
			imageAlt: "Art Gallery",
			technologies: [
				"JavaScript",
				"Three.js",
			],
			github: "https://github.com/jakobdubeau/art-gallery",
		},
	]

	const [search, setSearch] = useState("")
    const { muted } = useAudio()

	const [key] = useSound("/sfx/creamy_key.mp3", { volume: 0.7, interrupt: true })
	
	return (
		<div className="sm:pt-4 sm:mx-16 flex flex-col flex-1 min-h-0">
			<div className="relative mb-3">
				<Search className="absolute top-2 sm:top-2.5 left-3 size-6 text-stone-400" />
				<input
					type="text"
					placeholder="search for a project, technology, etc."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					onKeyDown={(e) => {
						if (e.key.length === 1) {
							!muted && key()
						}
					}}
					className="w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-600 pl-10 sm:pl-12 text-sm sm:text-base tracking-tighter sm:tracking-tight"
				/>
			</div>
			<div className="flex-1 min-h-0 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				<ProjectList
					projects={projects.filter(
						(project) =>
							project.title.toLowerCase().includes(search.toLowerCase()) ||
							project.description.toLowerCase().includes(search.toLowerCase()) ||
							project.technologies.some((technology) =>
								technology.toLowerCase().includes(search.toLowerCase())
							)
					)}
				/>
			<p className="text-stone-400 mt-3 mx-2 sm:mx-4">
				You can check out my other projects{" "}
				<Link
					href="https://github.com/jakobdubeau?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
					className="underline underline-offset-2 hover:text-neutral-200 transition-all duration-200"
				>
					here
				</Link>
			</p>
			</div>
		</div>
	)
}