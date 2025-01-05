import AboutHobbies from "../Components/AboutHobbies";
import AboutWebDev from "../Components/AboutWebDev";
import Banner from "../Components/Banner";
import ExperienceSection from "../Components/ExperienceSection";
import SkillSection from "../Components/SkillSection";

const HomePage = () => {
    return (
        <section className="mx-auto w-11/12 lg:w-10/12 space-y-20">
            <Banner/>
            <AboutWebDev/>
            <AboutHobbies/>
            <ExperienceSection/>
            <SkillSection/>
        </section>
    );
};

export default HomePage;