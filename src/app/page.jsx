"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Homepage = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/contact");
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-full flex flex-col lg:flex-row lg:gap-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* IMAGE CONTAINER */}
                <div className="h-[100%] lg:4/4 lg:w-1/2 relative bottom-[100px] z-0">
                    <Image
                        src="/hero1.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>
                {/* TEXT CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                    {/* TITLE */}
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Madhesh Medasani | Frontend Developer
                    </h1>
                    {/* DESC */}
                    <p className="md:text-xl">
                        I specialize in creating dynamic, user-focused web
                        applications with clean, maintainable code. From
                        responsive designs to interactive features, I bring
                        ideas to life using modern tools like Next, React,
                        JavaScript and CSS.
                    </p>
                    {/* BUTTONS */}
                    <div className="w-full flex gap-4">
                        <button
                            className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
                            onClick={handleClick}
                        >
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Homepage;
