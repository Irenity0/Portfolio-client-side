import useExperience from "../hooks/useExperience";

const ExperienceSection = () => {
    const { experience, loading, error } = useExperience(); // Destructure experience, loading, and error

    if (loading) {
        return <p>Loading...</p>; // Handle loading state
    }

    if (error) {
        return <p className="text-red-500">{error}</p>; // Display error message if fetching fails
    }

    return (
        <section id="experience" className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
                <h1 className="text-5xl  text-accent font-semibold font-playfair underline">
                    My Experience
                </h1>
                <p className="text-secondary ">
                    A breakdown of my professional journey, including past roles and responsibilities.
                </p>
            </div>

            {/* Experience Cards */}
            <div className="flex flex-col gap-8 items-start">
                {experience.map((job, index) => (
                    <div key={index} className="lg:w-2/3 p-6 shadow-2xl border-b-2 border-l-2 border-secondary">
                        <h2 className="text-3xl  font-playfair font-bold text-accent mb-4">{job.title}</h2>
                        <h3 className="text-xl   text-secondary mb-2">{job.client}</h3>
                        <p className="text-secondary  mb-4"><strong>Duration:</strong> {job.duration}</p>
                        <ul className="space-y-2 ">
                            {job.description.map((task, i) => (
                                <li key={i} className="text-secondary font-rosario text-lg">
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;
