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
    <div className="group bg-neutral-900 rounded-lg shadow:md hover:shadow-lg transition-all duration-200 mt-5 mb-5">
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
            className="rounded-t-lg w-full h-[250px] object-cover object-center group-hover:scale-110 transition-all duration-300 border-white border"
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
        			className="text-neutral-200 font-medium text-2xl hover:text-neutral-400 transition-colors duration-200 block"
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