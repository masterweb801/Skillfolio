import { easing } from "maath";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import Loader from "../components/Loader";
import HeroText from "../components/HeroText"
import Astronaut from "../components/Astronaut"
import { useMediaQuery } from "react-responsive";
import { Canvas, useFrame } from "@react-three/fiber"
import ParallaxBackground from "../components/ParallaxBackground"

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 853 });

    return (
        <section
            className="c-space min-h-screen flex items-start justify-center md:items-start md:justify-start overflow-hidden"
        >
            <HeroText />
            <ParallaxBackground />
            <figure className="absolute inset-0 w-screen h-screen">
                <Canvas camera={{ position: [0, 1, 3] }}>
                    <Suspense fallback={<Loader />}>
                        <Float>
                            <Astronaut
                                scale={isMobile && 0.23}
                                position={isMobile && [0, -1.5, 0]}
                            />
                        </Float>
                        <Rig />
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    )
}

function Rig() {
    return useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
            0.5,
            delta
        );
    });
}

export default Hero