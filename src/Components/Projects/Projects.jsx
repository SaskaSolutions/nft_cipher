import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';

const Projects = () => {
    const container = useRef();
    const container1 = useRef();
    const container2 = useRef();

    const scroll1 = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    const scroll2 = useScroll({
        target: container1,
        offset: ['start start', 'center center'],
    });
    const scroll3 = useScroll({
        target: container2,
        offset: ['start center', 'center end'],
    });


    return (
        <main>
<div className='bg-primary w-full p-1 md:py-2 flex justify-center sticky top-0 z-20'>
                <h1 className='text-xl md:text-3xl font-extrabold font-poppins text-white'>OUR PROJECTS</h1>
            </div>
<div ref={container} className='relative min-h-[300vh] bg-black'>
                <Section1 scrollYProgress={scroll1.scrollYProgress} />
                <Section2 scrollYProgress={scroll1.scrollYProgress} />
            </div>
            <div ref={container1} className='min-h-[300vh] bg-black relative'>
                <Section3 scrollYProgress={scroll2.scrollYProgress} />      <Section4 scrollYProgress={scroll2.scrollYProgress} />
            </div>
            <motion.div ref={container2} className='min-h-[150vh] bg-black relative items-center justify-center'>
                <Section5 scrollYProgress={scroll3.scrollYProgress}/>
            </motion.div>
        </main>
    );
};

export default Projects;
