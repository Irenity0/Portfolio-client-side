import { useEffect, useState } from "react";

const useExperience = () => {
    const [experience, setExperience] = useState([]); // Set as an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        fetch("./experiences.json")
            .then((res) => res.json())
            .then((data) => {
                setExperience(data.experience); // Ensure you're accessing the correct property
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching experience:", error);
                setError("Failed to load experience data.");
                setLoading(false);
            });
    }, []);

    return { experience, loading, error }; // Return error as well
};

export default useExperience;
