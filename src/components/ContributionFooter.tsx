"use client";

// Components
import Image from "next/image";
import { motion } from "framer-motion";

// Export Component
export default function RiotIntro() {
    return (
        <motion.div
            className="absolute text-center text-sm font-semibold bottom-4 left-1/2 -translate-x-1/2 w-screen"
            id="contribution-footer"
        >
            <p>© 2024 Riot Games, Inc. All rights reserved.</p>
        </motion.div>
    );
}
