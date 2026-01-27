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
        <div className="group bg-neutral-900 rounded-lg hover:shadow-lg transition-all duration-200">
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
                        className="rounded-t-lg w-full h-[250px] object-cover object-center"
                    />
                </div>
            </a>

        </div>
    )
}