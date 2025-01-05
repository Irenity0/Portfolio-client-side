import { motion } from "framer-motion";
import Tag from "./Tag";

const Banner = () => {
    return (
        <div id="home" className="bg-neutral text-primary py-16">
            <div className="flex mt-10 flex-col justify-between md:flex-row items-center gap-8">
                {/* Left Column: text */}
                <div className="md:w-1/2">
                    <div className="space-y-3">
                        <h4 className="space-x-3">
                            <Tag name={'Web Developer'}></Tag>
                            <Tag name={'Writer'}></Tag>
                            <Tag name={'Literature enthusiast'}></Tag>
                        </h4>
                        <motion.h1
                            className="md:text-5xl text-4xl font-bold text-accent"
                            initial={{ opacity: 0, y: -50 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            transition={{ duration: 1 }}
                        >
                            Hi, I am <span className="rounded-full font-playfair underline">Afra Anjum</span>
                        </motion.h1>
                        <motion.p
                            className="py-6 text-lg font-rosario text-secondary"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dignissimos tenetur esse officia harum similique, tempora culpa impedit ducimus eveniet necessitatibus alias totam quos vero magnam ut enim nihil! Veritatis.
                            <br /><br />
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, dicta! Sapiente quam temporibus quasi veniam sint similique tenetur cumque nobis, repudiandae odit, iusto in dicta illum maiores, officia possimus soluta?
                        </motion.p>
                        <div>
                            <p className="text-lg text-accent font-bold">
                                Let&apos;s connect <span className="underline">
                                    <a target="_blank" href="https://www.linkedin.com/in/afra-anjum-653153329/">Linkedin</a>
                                </span> <span className="underline">
                                    <a target="_blank" href="https://github.com/Irenity0">Github</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="md:w-1/2">
                    <motion.img
                        src="https://i.pinimg.com/474x/40/41/d5/4041d50a4e3b3de55f9fa644c22f27d1.jpg"
                        alt="FAQ Illustration"
                        className="max-w-sm mx-auto rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
