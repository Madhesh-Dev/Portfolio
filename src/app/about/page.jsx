"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const skills = [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "SCSS",
    "HTML",
    "Redux",
    "Webpack",
    "Docker",
    "C++",
    "AI/ML",
    "AWS",
];

const AboutPage = () => {
    const containerRef = useRef();

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef();
    // const isSkillRefInView = useInView(skillRef, {once:true});
    const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, {
        margin: "-100px",
    });

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* TEXT CONTAINER */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* BIOGRAPHY IMAGE */}
                        <Image
                            src={"/about.jpg"}
                            alt="Me"
                            width={112}
                            height={112}
                            className="w-28 h-28 rounded-full object-cover"
                        />
                        {/* BIOGRAPHY TITLE */}
                        {/* <h1 className="font-bold text-2xl">BIOGRAPHY</h1> */}
                        {/* BIOGRAPHY DESC */}
                        <p className="text-lg">
                            I'm a skilled frontend developer with a strong
                            background in web development, specializing in
                            creating interactive and user-friendly interfaces.
                            Currently working at Sustainability Economics, has
                            experience in building and refactoring web
                            applications using modern technologies like React,
                            Redux, and Typescript. Previously, at Cogoport, I
                            have contributed significantly to the development of
                            a real-time sales tracking dashboard and improved
                            user engagement. B.Tech in Computer Science from the
                            Indian Institute of Information Technology, Sri
                            City, specialized in AI & ML. Passionate about
                            problem-solving, dedicated to apply my expertise to
                            innovative projects.
                        </p>
                        {/* BIOGRAPHY QUOTE */}
                        <span className="italic">Frontend Developer</span>

                        {/* BIOGRAPHY SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut",
                            }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M12 6V14"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* SKILLS CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center"
                        ref={skillRef}
                    >
                        {/* SKILL TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* SKILL LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isSkillRefInView ? { x: 0 } : {}}
                            className="flex gap-4 flex-wrap"
                        >
                            {skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
                                >
                                    {skill}
                                </div>
                            ))}
                        </motion.div>
                        {/* SKILL SCROLL SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut",
                            }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M12 6V14"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    {/* EXPERIENCE CONTAINER */}
                    <div
                        className="flex flex-col gap-12 justify-center pb-48"
                        ref={experienceRef}
                    >
                        {/* EXPERIENCE TITLE */}
                        <motion.h1
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* EXPERIENCE LIST */}
                        <motion.div
                            initial={{ x: "-300px" }}
                            animate={isExperienceRefInView ? { x: "0" } : {}}
                            className=""
                        >
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Frontend Engineer
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        I worked on the website, marketplace,
                                        and several internal modules{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        Feb 2024 - Present
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Sustainability Economics
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 "></div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        SDE-1
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        Worked on developing real-time sales
                                        activity tracking dashboard, public
                                        leaderboard{" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        July 2023 - Dec 2023{" "}
                                    </div>
                                    {/* JOB COMPANY */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Cogoport
                                    </div>
                                </div>
                            </div>
                            {/* EXPERIENCE LIST ITEM */}
                            <div className="flex justify-between h-48">
                                {/* LEFT */}
                                <div className="w-1/3 ">
                                    {/* JOB TITLE */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        SDE-Intern{" "}
                                    </div>
                                    {/* JOB DESC */}
                                    <div className="p-3 text-sm italic">
                                        Worked mainly on Cogo Academy (Test
                                        Module and Course Module){" "}
                                    </div>
                                    {/* JOB DATE */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">
                                        Jan 2023 - June 2023{" "}
                                    </div>

                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                                        Cogoport
                                    </div>
                                </div>
                                {/* CENTER */}
                                <div className="w-1/6 flex justify-center">
                                    {/* LINE */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* LINE CIRCLE */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* RIGHT */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* SVG CONTAINER */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
