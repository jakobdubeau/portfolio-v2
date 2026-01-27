import Image from "next/image"
import { Github, SquareArrowOutUpRight } from "lucide-react"

export default function ProjectCard({
  title,
  description,
  href,
  image,
  imageAlt,
  technologies,
  github,
}) {
  return (
    <div className="group bg-neutral-900/50 rounded-lg shadow:md hover:shadow-lg hover:scale-103 transition-all duration-500 mt-5 mb-5 border border-white/10">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden"
      >
        <div className="relative">
          <Image
            src={image}
            placeholder="blur"
            alt={imageAlt}
            className="rounded-t-lg w-full h-62.5 object-cover object-center"
          />
        </div>
      </a>
      <div className="p-5">
        <div className="flex justify-between items-start gap-4">
					<div>
						<a
							href={href}
        			target="_blank"
        			rel="noopener noreferrer"
        			className="text-neutral-200 font-medium text-2xl hover:text-neutral-400 transition-colors duration-200 block tracking-tight"
						>
							{title}
						</a>
						<p className="text-neutral-400 mt-2 leading-relaxed tracking-tight">
							{description}
						</p>
					</div>
					<div className="flex gap-2">
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-lg text-neutral-400 hover:bg-neutral-700 transition-colors"
						>
							<Github className="w-5 h-5" />
						</a>
						<a
							href={href}
							target="_blank"
							rel="noopener noreferrer"
							className="p-2 rounded-lg text-neutral-400 hover:bg-neutral-700 transition-colors"
						>
							<SquareArrowOutUpRight className="w-5 h-5" />
						</a>
					</div>
        </div>
      </div>
    </div>
  )
}