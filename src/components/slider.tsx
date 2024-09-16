"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";

export function Slider() {
    const images = [
        "https://nppgadarpur.in/wp-content/uploads/slider/cache/7ec2454dc110f59f1388fe655047e94c/WhatsApp-Image-2023-03-31-at-5.54.01-PM.jpg",
        "https://nppgadarpur.in/wp-content/uploads/slider/cache/7ec2454dc110f59f1388fe655047e94c/WhatsApp-Image-2023-03-31-at-5.54.01-PM.jpg",
        "https://nppgadarpur.in/wp-content/uploads/slider/cache/7ec2454dc110f59f1388fe655047e94c/WhatsApp-Image-2023-03-31-at-5.54.01-PM.jpg",
        "https://nppgadarpur.in/wp-content/uploads/slider/cache/7ec2454dc110f59f1388fe655047e94c/WhatsApp-Image-2023-03-31-at-5.54.01-PM.jpg",

    ];
    return (
        <ImagesSlider className="min-h-screen" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className=" flex flex-col justify-center items-center"
            >
            </motion.div>
        </ImagesSlider>
    );
}
