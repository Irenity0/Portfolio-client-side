import useSkills from "../hooks/useSkills";
import SkillCard from "./SkillCard";

const SkillSection = () => {
    const { skills, loading } = useSkills(); // Destructure both skills and loading

    if (loading) {
        return (
            <div className="text-center text-secondary">
                <p>Loading skills...</p>
            </div>
        );
    }

    return (
        <section id="skills" className="space-y-8">
            {/* Title Section */}
            <div className="space-y-4">
                <h1 className="text-5xl text-accent font-semibold font-playfair underline">My Skills</h1>
                <p className="text-secondary">
                    Here are some of my skills that I&apos;ve learned or am currently learning!
                </p>
            </div>

            {/* Skill Names */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill}></SkillCard>
                ))}
            </div>
        </section>
    );
};

export default SkillSection;

