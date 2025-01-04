import { useState, useEffect } from "react";

const useSkills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("./skills.json")
            .then((res) => res.json())
            .then((data) => {
                setSkills(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching skills:", error);
                setLoading(false);
            });
    }, []);

    return { skills, loading }; // Return an object for easier destructuring
};

export default useSkills;
