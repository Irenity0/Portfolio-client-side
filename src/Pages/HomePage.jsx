import AboutHobbies from "../Components/AboutHobbies";
import AboutWebDev from "../Components/AboutWebDev";
import Banner from "../Components/Banner";
import ContactSection from "../Components/Contact";
import ExperienceSection from "../Components/ExperienceSection";
import ProjectSection from "../Components/Projects";
import SkillSection from "../Components/SkillSection";

const HomePage = () => {
    return (
        <section className="mx-auto w-11/12 lg:w-10/12 space-y-20">
            <Banner/>
            <AboutWebDev/>
            <AboutHobbies/>
            <ExperienceSection/>
            <SkillSection/>
            <ProjectSection/>
            <ContactSection/>
        </section>
    );
};

export default HomePage;