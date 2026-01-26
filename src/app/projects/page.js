"use client"
import ProjectList from "../../components/ProjectList"
import Link from "next/link"

import { useState } from "react"
import { Search } from "lucide-react"

export default function Home() {
	const projects = [
		{
			title: "Discover Daily",
			href: "https://discover-daily-seven.vercel.app/",
			description: "a spotify playlist generator that makes discovering new music easy, stuff you'll actually like",
			image: "/",
			imageAlt: "Discover Daily",
			technologies: [
				"React",
				"Next.js",
			],
			github: "",
		},
	]

	const [search, setSearch] = useState("")
		
	return (
		<div className="pt-6 mx-16">
			<div className="relative">
				<Search className="absolute top-2.5 left-3 size-6 text-stone-400" />
				<input
					type="text"
					placeholder="search for a project, technology, etc."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full py-2 lx-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-600 pl-12"
				/>
			</div>
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
			<p className="text-stone-400">
				You can check out my other projects{" "}
				<Link
					href="https://github.com/jakobdubeau?tab=repositories"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:text-neutral-200 transition-all duration-200"
				>
					here
				</Link>
			</p>
		</div>
	)
}