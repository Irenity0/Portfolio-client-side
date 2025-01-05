import { motion } from "framer-motion";

const AboutWebDev = () => {
    return (
        <section id="about">
            <motion.h1
                className="text-5xl underline text-left text-accent font-semibold font-playfair"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                How I got into WebDev
            </motion.h1>
            <br />
            <motion.p
                className="text-secondary font-rosario text-lg lg:w-2/3"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                It happened on a random day in 2017-2018, I stumbled upon <i>web development</i>. I was 8 at the time and I was (still am) a really creative child. I started to make stuff with html and css only at that time. Then, I lost my <i>flow</i> due to school and some personal problems (Average Asian situation)
                <br /><br />
                However, after 2021, I got back to web design again and started making random side projects. It was like a side quest to me (now it&apos;s my <strong>main quest</strong>). After school resumed, I again lost my flow and didn&apos;t return until 2023. And hopefully it was my last break from web development.
                <br /><br />
                Now here I am, learning full-stack development. I am always open to learning new technologies, I love it!
            </motion.p>
        </section>
    );
};

export default AboutWebDev;
