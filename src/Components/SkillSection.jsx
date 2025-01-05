import useSkills from "../hooks/useSkills";

const SkillSection = () => {
    const { skills, loading } = useSkills(); // Destructure `skills` and `loading`

    if (loading) {
        return <p>Loading...</p>; // Handle loading state
    }

    const { core, learning, learnt } = skills; // Destructure skills data

    return (
        <section id="skills" className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
                <h1 className="text-5xl text-right text-accent font-semibold font-playfair underline">
                    My Skills
                </h1>
                <p className="text-secondary text-right">
                    A breakdown of my expertise, current learning journey, and past experience with tools and technologies.
                </p>
            </div>

            {/* Skill Cards */}
            <div className="flex flex-col items-end gap-8">
                {/* Core Skills */}
                <div className="lg:w-2/3 p-6 shadow-lg rounded-lg bg-secondary/10 border border-secondary">
                    <h2 className="text-3xl font-playfair font-bold text-accent mb-4">Core Skills</h2>
                    <ul className="space-y-2">
                        {core.map((skill) => (
                            <li key={skill.name} className="flex items-center space-x-3 text-secondary font-rosario text-lg">
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    className="w-10 h-10 rounded-md"
                                />
                                <span>
                                    <strong className="text-accent">{skill.name}:</strong> {skill.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Learning */}
                <div className="lg:w-2/3 p-6 shadow-lg rounded-lg bg-secondary/10 border border-secondary">
                    <h2 className="text-3xl font-playfair font-bold text-accent mb-4">Currently Learning</h2>
                    <ul className="space-y-2">
                        {learning.map((skill) => (
                            <li key={skill.name} className="flex items-center space-x-3 text-secondary font-rosario text-lg">
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    className="w-10 h-10 rounded-md"
                                />
                                <span>
                                    <strong className="text-accent">{skill.name}:</strong> {skill.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Learnt */}
                <div className="lg:w-2/3 p-6 shadow-lg rounded-lg bg-secondary/10 border border-secondary">
                    <h2 className="text-3xl font-playfair font-bold text-accent mb-4">Previously Learnt</h2>
                    <ul className="space-y-2">
                        {learnt.map((skill) => (
                            <li key={skill.name} className="flex items-center space-x-3 text-secondary font-rosario text-lg">
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    className="w-10 h-10 rounded-md"
                                />
                                <span>
                                    <strong className="text-accent">{skill.name}:</strong> {skill.description}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SkillSection;
