import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-title span", {
                y: 100,
                opacity: 0,
                delay: 0.1,
                duration: 1,
                stagger: 0.05,
                ease: "power4.out",
            });

            tl.from(".hero-sub", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power2.out",
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={heroRef}
            className="h-screen flex flex-col items-center justify-center bg-black text-white"
        >
            <h1 className="text-6xl md:text-8xl font-extrabold hero-title flex gap-2">
                {"MOBASHSHIR".split("").map((c, i) => (
                    <span key={i}>{c}</span>
                ))}
            </h1>

            <motion.p
                className="mt-6 text-xl opacity-70 hero-sub"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                Full Throttle Web Developer 🚀
            </motion.p>
        </section>
    );
}
