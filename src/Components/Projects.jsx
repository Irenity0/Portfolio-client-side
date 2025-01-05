import { Link } from "react-router-dom"; // Import Link for navigation
import useProjects from "../hooks/useProjects";

const ProjectSection = () => {
    const { projects, loading } = useProjects(); // Fetching projects using a custom hook

    if (loading) {
        return <p>Loading...</p>; // Handle loading state
    }

    return (
        <section id="projects" className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
                <h1 className="text-5xl text-accent font-semibold font-playfair underline">
                    My Projects
                </h1>
                <p className="text-secondary">
                    A showcase of the projects I&apos;ve worked on, with detailed information on each.
                </p>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/projects/${project.id}`} // Navigate to project details page
                    >
                        <div className="relative rounded-lg shadow-lg bg-secondary/10 overflow-hidden group">
                            <img
                                src={project.banner}
                                alt={project.name}
                                className="w-full h-96 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                                <h3 className="text-3xl text-white font-bold">{project.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
