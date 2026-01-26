import { Github, Linkedin, Mail, CodeXml } from "lucide-react"

export default function Footer() {
	const links = [
		{
			name: "github",
			href: "https://github.com/jakobdubeau",
			icon: Github,
		},
		{
			name: "linkedin",
			href: "https://www.linkedin.com/in/jakobdubeau",
			icon: Linkedin,
		},
		{
			name: "email",
			href: "mailto:jakobdubeau@gmail.com",
			icon: Mail,
		},
		{
			name: "repo",
			href: "https://github.com/jakobdubeau/portfolio-v2",
			icon: CodeXml,
		},
	]

	return (
		<footer className="flex flex-col gap-4 text-sm text-stone-400">
			<hr className="border-b border-neutral-800" />
			<div className="flex flex-row justify-between gap-4">
				<div className="flex flex-wrap gap-4">
					{links.map((link) => (
						<a
							key={link.name}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							<link.icon className="w-5 h-5 hover:scale-105 hover:text-neutral-200 transition-all duration-200" />
						</a>
					))}
				</div>
			</div>
			<p className="text-red-500">
				{new Date().getFullYear()} &copy; Jakob Dubeau
			</p>
		</footer>
	)
}