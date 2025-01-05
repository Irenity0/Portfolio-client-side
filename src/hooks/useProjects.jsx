import { useEffect, useState } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("./projects.json")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data.projects); 
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
