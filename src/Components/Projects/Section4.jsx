// Section4.jsx
import React from 'react';
import { motion, useInView } from 'framer-motion';
import EmaanEdu from '../../assets/EmaanEdu.png';
import GlowingButton from '../GlowingButton/GlowingButton';

const Section4 = () => {

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div ref={ref} className='absolute w-full top-0 h-[110vh] bg-primary text-2xl flex items-center text-textPrimary py-[20%] overflow-hidden'>
            <motion.div
                initial={{ opacity: 0.3, y: -100 }}
                animate={{ opacity: isInView ? 1 : 0.3, y: isInView ? 0 : -100 }}
                transition={{ duration: 0.5 }}
                className='w-10/12 mx-auto bg-primary rounded-lg md:py-6 md:px-6 shadow-2xl shadow-accent'
            >
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-6/12 p-4 flex flex-col items-center overflow-hidden'>
                        <img src={EmaanEdu} alt='EmaanEdu' height={400} width={400} className='mb-8 border-white border-2 rounded-md shadow-md object-cover object-center' />
                        <h1 className='text-base md:text-3xl my-2 md:my-6 font-extrabold text-textPrimary'>EDUCATION INSTITUTE WEB</h1>
                        <p className='text-sm md:text-lg'>Professional showcasing and marketing website of the EMAAN Institue. Using catchy design and vibrant colors.</p>
                    </div>
                    <div className='md:w-6/12 mt-0 md:mt-8 p-4 md:p-4 md:space-y-3 flex flex-col justify-center'>
                        <div className='space-y-1 md:space-y-3'>
                            <h2 className='text-base md:text-3xl font-bold text-textPrimary'>Key Features</h2>
                            <ul className='list-disc list-inside text-sm md:text-base'>
                                <li><span className='font-semibold'>Static Website:</span> Built with Wordpress and ThemeForest.</li>
                                <li><span className='font-semibold'>Responsive Design:</span> Ensures optimal viewing experience across various devices.</li>
                                <li><span className='font-semibold'>Interactive Content:</span> Engaging elements like sliders, galleries, and animations.</li>
                                <li><span className='font-semibold'>Contact Forms:</span> Integration of forms for inquiries and client communication.</li>
                                <li><span className='font-semibold'>SEO Optimization:</span> Strategies implemented to improve search engine rankings.</li>
                                <li><span className='font-semibold'>Analytics Integration:</span> Tools to monitor website performance and visitor behavior.</li>
                            </ul>
                        </div>
                        <div className='space-y-1 md:space-y-3 hidden md:block'>
                            <h2 className='text-3xl font-bold text-textPrimary'>Technologies Used</h2>
                            <div className='flex flex-wrap gap-2 text-base'>
                                <span className='bg-secondary text-textPrimary font-semibold rounded-full px-4 py-2'>React</span>
                                <span className='bg-secondary text-textPrimary font-semibold rounded-full px-4 py-2'>Tailwind CSS</span>
                                <span className='bg-secondary text-textPrimary font-semibold rounded-full px-4 py-2'>Framer Motion</span>
                                <span className='bg-secondary text-textPrimary font-semibold rounded-full px-4 py-2'>Node.js</span>
                            </div>
                        </div>
                        <div className='flex justify-start space-x-4'>
                            <GlowingButton className={'md:text-base text-xs bg-transparent text-secondary border-secondary'}>
                                <a href='https://emaan.edu.pk' target='_blank' rel='noopener noreferrer'>View Project</a>
                            </GlowingButton>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Section4;
