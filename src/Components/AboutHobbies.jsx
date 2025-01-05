import { motion } from "framer-motion";
import book from '../assets/book.png';
import read from '../assets/coffee.png';

const AboutHobbies = () => {
    return (
        <section className="about-hobbies mx-auto">
            <motion.h1
                className="text-5xl text-right text-accent font-semibold font-playfair underline"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                When I am not Coding
            </motion.h1>
            <div className="mt-8 flex flex-col gap-12">
                {/* Reading Section (Text and Image Layout) */}
                <motion.div
                    className="flex flex-col md:flex-row lg:flex-row-reverse gap-8 items-start"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Text */}
                    <div className="md:w-2/3 lg:w-2/3">
                        <h2 className="text-2xl lg:text-right text-accent font-playfair mb-2">My Reading Hobbies~ ✨</h2>
                        <p className="text-secondary text-lg font-rosario lg:text-right">
                            Reading has always been a source of inspiration and knowledge for me. From diving into thrilling mysteries to exploring logical fantasy worlds, I find joy in books that challenge my mind and expand my imagination. Some of my favorite genres include literature, psychological thrillers, and horror, which often influence how I approach creative problem-solving in coding. My current favorite webnovel is <em className="font-bold">Omniscient Reader&apos;s Viewpoint</em>, which inspires my life&apos;s gamification system. And my favorite novel is <em className="font-bold">No Longer Human</em> by Dazai Osamu.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="md:w-1/3 lg:w-1/3 flex justify-center items-center">
                        <img
                            src={read}
                            alt="Reading Illustration"
                            className="rounded-lg max-w-sm"
                        />
                    </div>
                </motion.div>

                {/* Writing Section (Text and Image Layout) */}
                <motion.div
                    className="flex flex-col md:flex-row-reverse gap-8 items-end"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    {/* Text */}
                    <div className="md:w-2/3 lg:w-2/3">
                        <h2 className="text-2xl text-right text-accent font-playfair mb-2">And My Love for Writing ✒️</h2>
                        <p className="text-secondary text-lg text-right font-rosario">
                            Writing is my way of weaving creativity with structure. My writing habits range from maintaining a commonplace book to penning down blogs and mini-essays. My commonplace writing is a blend of reflective thoughts, ideas, and curated knowledge, often serving as a foundation for deeper exploration. 
                            <br /><br />
                            I also enjoy blogging about my interests, whether it&apos;s technology, books, or personal insights. Mini-essays help me organize my ideas and critically analyze diverse topics. Occasionally, I engage in content writing, focusing on delivering engaging and meaningful narratives that align with my technical and creative skills. While content writing is more relevant to my professional experience, it complements my love for storytelling and connecting with audiences.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="md:w-1/3 lg:w-1/3 flex justify-center items-center">
                        <img
                            src={book}
                            alt="Writing Illustration"
                            className="rounded-lg max-w-sm"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHobbies;
