// import React from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
// import { useState } from "react";
// import HeroAnimate from "./HeroAnimate";
import { ScrollTrigger } from 'gsap/all';
import ButtonDev from './ButtonDev';
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {

    const getVidSrc = "./src/assets/videos/HERO.mp4";
    const handleContextMenu = (e) => {
        e.preventDefault(); // Prevent the default context menu
    };
    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(0 0, 100% 0, 80% 72%, 20% 72%)",
            borderRadius: "0% 0% 40% 10%",
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            },
        });
    });
    return (
        <section id="hero" className="relative h-dvh w-screen overflow-x-hidden">
            <div
                id="video-frame"
                className="relative z-10 h-dvh w-screen overflow-hidden bg-blue-75 contrast-100"
            >
                <video
                    src={getVidSrc}
                    loop
                    autoPlay
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center"
                    onContextMenu={handleContextMenu}
                />
                <ButtonDev />
            </div>
            {/* <h1 className="flex flex-col special-font hero-landing text-9xl absolute top-60 left-60 z-40 text-green-600 font-extrabold">NMIT <br></br> HACKS<span className="text-green-400 text-5xl origin-top">2025</span></h1> */}
        </section>
    );
};

export default Hero;

// <section id="hero" className="h-screen flex items-center justify-center bg-[#3B1E54] text-white">
//     <div className="text-center">
//         <HeroAnimate />
//     </div>
// </section>
