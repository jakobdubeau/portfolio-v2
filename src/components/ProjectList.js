import ProjectCard from "./ui/ProjectCard";

export default function ProjectList({ projects }) {
    return (
        <div className="grid grid-cols-1 gap-4">
            {projects.map((project) => (
                <ProjectCard key={project.name} {...project} />
            ))}
        </div>
    )
}