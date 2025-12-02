import { FlipWords } from './FlipWords'
import { motion as Motion } from 'motion/react';

const HeroText = () => {
    const words = ["Modern", "Secure", "Scalable"];
    const varients = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text'>
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <Motion.h1
                    className='text-4xl font-medium'
                    variants={varients}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi I'm Mobashshirul
                </Motion.h1>
                <div className="flex flex-col items-start">
                    <Motion.p
                        className='text-5xl font-medium text-neutral-300'
                        variants={varients}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        A Developer <br /> Dedicated to Crafting
                    </Motion.p>
                    <Motion.div
                        variants={varients}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords words={words} className="font-black text-white text-8xl" />
                    </Motion.div>
                    <Motion.p
                        className="text-4xl font-medium text-nutral-300"
                        variants={varients}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Web Solutions
                    </Motion.p>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col space-y-6 md:hidden">
                <Motion.p
                    className='text-4xl font-medium'
                    variants={varients}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi I'm Mobashshirul
                </Motion.p>
                <div>
                    <Motion.p
                        className='text-5xl font-black text-neutral-300'
                        variants={varients}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        Building
                    </Motion.p>
                    <Motion.div
                        variants={varients}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords words={words} className="font-bold text-white text-7xl" />
                    </Motion.div>
                    <Motion.p
                        className="text-4xl font-black text-neutral-300"
                        variants={varients}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Web Applications
                    </Motion.p>
                </div>
            </div>
        </div>
    )
}

export default HeroText