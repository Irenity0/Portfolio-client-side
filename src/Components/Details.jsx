import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the projects JSON data
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => {
                // Find the project based on the ID
                const foundProject = data.projects.find(
                    (project) => project.id === parseInt(id)
                );
                setProject(foundProject);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!project) {
        return <p className="w-96">Project not found.</p>;
    }

    return (
        <section id="project-details" className="space-y-8 w-11/12 mx-auto">
            {/* Project Banner */}
            <div className="pt-20">
                <img
                    src={project.banner}
                    alt={project.name}
                    className="w-full rounded-xl h-96 object-cover mb-3"
                />
                <div className="flex items-center justify-center opacity-80">
                    <h1 className="text-5xl text-secondary font-playfair font-bold">{project.name}</h1>
                </div>
            </div>

            {/* Project Information */}
            <div className="space-y-6">
                <h2 className="text-3xl font-semibold font-playfair">Description</h2>
                <p>{project.description}</p>

                <h3 className="text-2xl font-semibold font-playfair">Story</h3>
                <p>{project.lore}</p>

                <h3 className="text-2xl font-semibold font-playfair">Technologies Used</h3>
                <ul className="list-disc pl-5">
                    {project.tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>

                <h3 className="text-2xl font-semibold font-playfair">Challenges I Faced</h3>
                <ul className="list-disc pl-5">
                    {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                    ))}
                </ul>

                <h3 className="text-2xl font-semibold font-playfair">Things Lackings</h3>
                <ul className="list-disc pl-5">
                    {project.lackings.map((lack, index) => (
                        <li key={index}>{lack}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Details;
