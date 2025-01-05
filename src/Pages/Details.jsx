// Details.js
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useProjects from "../hooks/useProjects"; 

const Details = () => {
    const { id } = useParams(); 
    const { projects, loading } = useProjects(); 
    const [project, setProject] = useState(null);

    useEffect(() => {
        if (!loading) {
           
            const foundProject = projects.find((project) => project.id === parseInt(id));
            setProject(foundProject);
        }
    }, [id, loading, projects]); 

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!project) {
        return <p>Project not found</p>; 
    }

    return (
        <section id="project-details" className="space-y-8">
            {/* Project Banner */}
            <div className="relative">
                <img
                    src={project.banner}
                    alt={project.name}
                    className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-80">
                    <h1 className="text-5xl text-white font-bold">{project.name}</h1>
                </div>
            </div>

            {/* Project Information */}
            <div className="space-y-6">
                <h2 className="text-3xl font-semibold">Description</h2>
                <p>{project.description}</p>

                <h3 className="text-2xl font-semibold">Lore</h3>
                <p>{project.lore}</p>

                <h3 className="text-2xl font-semibold">Technologies Used</h3>
                <ul className="list-disc pl-5">
                    {project.tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>

                <h3 className="text-2xl font-semibold">Challenges Faced</h3>
                <ul className="list-disc pl-5">
                    {project.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                    ))}
                </ul>

                <h3 className="text-2xl font-semibold">Things Missing</h3>
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
