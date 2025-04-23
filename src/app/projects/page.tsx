import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    title: "How I built this website with AI Agents",
    description: "Coming Soon...",
    techStack: ["AI", "React", "TypeScript", "Next.js"],
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {project.imageUrl && (
        <div className="relative h-48">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              View Source
            </Link>
          )}
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}