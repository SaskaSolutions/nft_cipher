// Section1.jsx
import React from 'react';
import Gstep from '../../assets/Go-Step.png';
import { motion, useSpring, useTransform } from 'framer-motion';
import GlowingButton from '../GlowingButton/GlowingButton';

const Section1 = ({ scrollYProgress }) => {
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });
    const scale = useTransform(smoothScroll, [0, 1], [1, 0.4]);
    const rotate = useTransform(smoothScroll, [0, 1], [0, -10]);

    return (
        <motion.div style={{ scale, rotate }} className='sticky top-0 h-auto bg-primary text-2xl flex justify-center text-textPrimary pb-[20%] overflow-hidden'>
            <div className='w-10/12 mx-auto bg-primary rounded-lg py-6 px-4 md:px-6 shadow-2xl shadow-accent '>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-6/12 md:p-4 flex flex-col items-center overflow-hidden'>
                        <img src={Gstep} alt='Go-Step' height={400} width={400} className=' mb-4 md:mb-8 border-white border-2 rounded-md shadow-md object-cover object-center' />
                        <h1 className='text-base md:text-4xl my-2 md:my-8 font-extrabold text-textPrimary'>BUSINESS WEBSITE</h1>
                        <p className='text-sm md:text-lg'>A custom-built website for marketing and advertising Go-Step's work to their clients and customers. Using minimalistic and professional design and development.</p>
                    </div>
                    <div className='md:w-6/12 mt-0 md:mt-6 py-4 md:p-4 md:space-y-6 flex flex-col justify-center'>
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
                            <h2 className='text-lg md:text-3xl my-2 font-bold text-textPrimary'>Technologies Used</h2>
                            <div className='flex flex-wrap gap-2 text-base'>
                                <span className='bg-secondary text-textPrimary font-semibold rounded-full px-4 py-2'>WordPress</span>
                                <span className='bg-secondary text-textPrimary font-semibold rounded-full px-4 py-2'>PHP</span>
                                <span className='bg-secondary text-textPrimary font-semibold rounded-full px-4 py-2'>ThemeForest</span>
                            </div>
                        </div>
                        <div className='flex justify-start space-x-4'>
                            <GlowingButton className={'md:text-base text-xs bg-transparent text-textPrimary border-secondary'}>
                                <a href='https://go-step.de/' target='_blank' rel='noopener noreferrer'>View Project</a>
                            </GlowingButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Section1;
