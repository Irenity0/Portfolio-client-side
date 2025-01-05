import { useEffect, useState } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with the actual path to your JSON file or an API endpoint
        fetch("./projects.json")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data.projects); // Assuming your JSON structure has a 'projects' key
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setLoading(false);
            });
    }, []);

    return { projects, loading };
};

export default useProjects;
