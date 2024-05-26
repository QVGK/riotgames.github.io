"use client";

// Components
import Image from "next/image";
import { motion } from "framer-motion";

// Export Component
export default function RiotIntro() {
    return (
        <motion.div
            animate={{
                y: -320,
            }}
            transition={{
                delay: 3,
                duration: 1,
            }}
            className="flex mt-[42vh] justify-center items-center mx-2 my-2 select-none"
            id="riot"
        >
            <div className="flex flex-row items-center gap-6">
                <motion.span
                    animate={{
                        x: 0,
                    }}
                    initial={{
                        x: 120,
                    }}
                    transition={{
                        delay: 1,
                        duration: 0.2,
                        type: "tween",
                    }}
                >
                    <Image
                        src="/RiotPunch.png"
                        height={200}
                        width={200}
                        alt="RiotPunch"
                        className="h-auto w-[80px] md:w-[120px]"
                    />
                </motion.span>
                <div className="flex flex-col text-5xl font-bold gap-3">
                    <motion.span
                        animate={{
                            opacity: 1,
                        }}
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            delay: 1.2,
                            duration: 0,
                        }}
                    >
                        <Image
                            src="/RiotH1.png"
                            height={200}
                            width={200}
                            alt="RiotH1"
                            className="h-auto w-[120px] md:w-[150px]"
                        />
                    </motion.span>
                    <motion.span
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{
                            delay: 1.4,
                            duration: 0,
                        }}
                    >
                        <Image
                            src="/RiotH2.png"
                            height={200}
                            width={200}
                            alt="RiotH2"
                            className="h-auto w-[220px] md:w-[260px]"
                        />
                    </motion.span>
                </div>
            </div>
        </motion.div>
    );
}
