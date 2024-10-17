import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Mount from '../../assets/Mount.png';
import Stars from '../../assets/Stars1.jpg';
import Cloud1 from '../../assets/Cloud1.png';
import Cloud2 from '../../assets/Cloud2.png';
import { FaFacebook, FaGlobe, FaInstagram } from 'react-icons/fa6';

const ParallaxSocials = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['end end', 'start end'],
    });
    const smoothScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });

    const backgroundY = useTransform(smoothScrollYProgress, [0, 1], ['0%', '-10%']);
    const textY = useTransform(smoothScrollYProgress, [0, 1], ['-60%', '-250%']);
    const cloud1Y = useTransform(smoothScrollYProgress, [0, 1], ['0%', '-80%']);
    const cloud2Y = useTransform(smoothScrollYProgress, [0, 1], ['0%', '-80%']);
    const mountY = useTransform(smoothScrollYProgress, [0, 1], ['0%', '30%']);
    const linksY = useTransform(smoothScrollYProgress, [0, 1], ['0%', '350%']);

    return (
        <div
            ref={ref}
            className='bg-primary w-full h-[60vh] md:h-screen overflow-hidden relative'>
            <motion.div
                style={{ y: textY }}
                className='w-10/12 md:w-6/12 mx-auto relative z-10 inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm font-poppins text-center rounded-lg p-4 md:p-10 shadow-lg top-[25%]'>
                <motion.h1
                    initial={{ opacity: 0.3, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
                    className='text-4xl md:text-7xl font-bold text-white'>FIND US AT
                </motion.h1>
            </motion.div>
            <motion.div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `url(${Stars})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    y: backgroundY,
                }}
            />
            <motion.div
                className='absolute w-[50%] h-[30%] right-[80%] md:h-[20%] md:w-[25%] top-[20%] md:top-[50%] left-[4%] bottom-0 z-30'
                style={{
                    backgroundImage: `url(${Cloud1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y: cloud1Y,
                }}
            />
            <motion.div
                className='absolute w-[50%] h-[20%] right-[-4%] md:right-[4%] md:h-[20%] md:w-[20%] top-[0%] md:top-[40%] md:left-[65%] bottom-0 z-30'
                style={{
                    backgroundImage: `url(${Cloud2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y: cloud2Y,
                }}
            />
            <motion.div
                style={{ y: linksY }}
                className='w-10/12 md:w-6/12 mx-auto relative z-30 inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm font-poppins text-center rounded-lg p-4 md:p-10 shadow-lg top-[20%]'>
                <div className='flex justify-around'>
                    <motion.a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-accent3 border-2 border-accent3 p-2 rounded cursor-pointer">
                        < FaFacebook className='text-6xl' />
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-accent3 border-2 border-accent3 p-2 rounded cursor-pointer">
                        < FaInstagram className='text-6xl' />
                    </motion.a>
                    <motion.a
                        href="https://www.yourwebsite.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-accent3 border-2 border-accent3 p-2 rounded cursor-pointer">
                        < FaGlobe className='text-6xl' />
                    </motion.a>
                </div>
            </motion.div>
            <motion.div
                className='absolute bottom-0 md:bottom-[-30%] top-0 right-0 left-0 z-20'
                style={{
                    backgroundImage: `url(${Mount})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'bottom',
                    backgroundRepeat: 'no-repeat',
                    y: mountY,
                }}
            />
        </div>
    );
};

export default ParallaxSocials;
