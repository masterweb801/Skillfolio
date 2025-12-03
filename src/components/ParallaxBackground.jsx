import { motion as Motion, useScroll, useTransform, useSpring } from "motion/react"


const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress, { damping: 30 });
    const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
    const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
    const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

    return (
        <section className='absolute inset-0 overflow-y-hidden'>
            <div className="relative h-screen overflow-y-hidden">
                {/* Sky */}
                <div
                    className='absolute inset-0 w-full h-screen -z-50'
                    style={{
                        backgroundImage: "url(/assets/sky.jpg)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover"
                    }}
                />

                {/* Mountain 3 */}
                <Motion.div
                    className='absolute inset-0 -z-40'
                    style={{
                        backgroundImage: "url(/assets/mountain-3.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain3Y
                    }}
                />

                {/* Plannets */}
                <Motion.div
                    className='absolute inset-0 -z-30'
                    style={{
                        backgroundImage: "url(/assets/planets.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        x: planetsX
                    }}
                />

                {/* Mountain 2 */}
                <Motion.div
                    className='absolute inset-0 -z-20'
                    style={{
                        backgroundImage: "url(/assets/mountain-2.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain2Y
                    }}
                />

                {/* Mountain 1 */}
                <Motion.div
                    className='absolute inset-0 -z-10'
                    style={{
                        backgroundImage: "url(/assets/mountain-1.png)",
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                        y: mountain1Y
                    }}
                />
            </div>
        </section>
    )
}

export default ParallaxBackground