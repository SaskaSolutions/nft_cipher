// Section2.jsx
import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import rein from '../../assets/REIN.png';
import GlowingButton from '../GlowingButton/GlowingButton';

const Section2 = ({ scrollYProgress }) => {
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });
    const scale = useTransform(smoothScroll, [0, 0.8], [0.4, 1]);
    const rotate = useTransform(smoothScroll, [0, 0.8], [-10, 0]);

    return (
        <motion.div style={{ scale, rotate, zIndex: 2 }} className='sticky top-0 h-auto bg-foreground4 text-2xl flex items-center text-textPrimary4 overflow-hidden py-[10%]'>
            <div className='w-10/12 mx-auto bg-background4 rounded-lg p-4 md:py-6 md:px-6 shadow-2xl shadow-secondary4'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-6/12 md:p-4 flex flex-col items-center overflow-hidden'>
                        <img src={rein} alt='SERVICE PROVIDER WEB' height={400} width={400} className='mb-8 border-border2 border-2 rounded-md shadow-md object-cover object-center' />
                        <h1 className='text-base md:text-4xl my-2 md:my-6 font-extrabold text-textSecondary4'>SERVICE PROVIDER WEB</h1>
                        <p className='text-sm md:text-lg'>A professional website showcasing cleaning services tailored to meet residential and commercial needs, ensuring cleanliness and hygiene standards are met efficiently.</p>
                    </div>
                    <div className='md:w-6/12 mt-0 md:mt-8 py-4 md:p-4 md:space-y-3 flex flex-col justify-center'>
                        <div className='space-y-1 md:space-y-4'>
                            <h2 className='text-base md:text-3xl font-bold text-textSecondary4'>Key Features</h2>
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
                            <h2 className='text-3xl font-bold text-textSecondary4'>Technologies Used</h2>
                            <div className='flex flex-wrap gap-2 text-base'>
                                <span className='bg-foreground4 text-textPrimary4 rounded-full px-4 py-2'>WordPress</span>
                                <span className='bg-foreground4 text-textPrimary4 rounded-full px-4 py-2'>PHP</span>
                                <span className='bg-foreground4 text-textPrimary4 rounded-full px-4 py-2'>Theme Forest</span>
                            </div>
                        </div>
                        <div className='flex justify-start space-x-4'>
                            <GlowingButton className={'md:text-base text-xs bg-transparent text-textPrimary2 border-secondary2'}>
                                <a href='https://reinigungsservice-nrw.de' target='_blank' rel='noopener noreferrer'>View Project</a>
                            </GlowingButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Section2;
