// Section3.jsx
import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import LMS from '../../assets/LMS.png';
import GlowingButton from '../GlowingButton/GlowingButton';

const Section3 = ({ scrollYProgress }) => {
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });
    const opacity = useTransform(smoothScroll, [0, 1], [0, 1]);

    return (
        <motion.div style={{ opacity }} className='sticky w-full top-0 h-auto bg-foreground4 text-2xl flex items-center text-textSecondary4 py-[20%] overflow-hidden'>
            <div className='w-10/12 mx-auto bg-background4 rounded-lg py-6 px-4 md:px-6 shadow-2xl shadow-secondary4 mt-auto'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-6/12 md:p-4 flex flex-col items-center overflow-hidden'>
                        <img src={LMS} alt='LMS' height={400} width={400} className='mb-8 border-foreground3 border-2 rounded-md shadow-md object-cover object-center' />
                        <h1 className='text-base md:text-4xl my-2 md:my-6 font-extrabold text-textSecondary4'>Learning Management System</h1>
                        <p className='text-sm md:text-lg'>An integrated platform designed to streamline the process of learning and education management, enhancing both teaching and learning experiences.</p>
                    </div>
                    <div className='md:w-6/12 mt-0 md:mt-8 py-4 md:p-4 md:space-y-3 flex flex-col justify-center'>
                        <div className='space-y-1 md:space-y-4'>
                            <h2 className='text-base md:text-3xl font-bold text-textSecondary4'>Key Features</h2>
                            <ul className='list-disc list-inside text-sm md:text-base'>
                                <li><span className='font-semibold'>Course Management:</span> Easy creation, management, and delivery of courses.</li>
                                <li><span className='font-semibold'>User Management:</span> Role-based access for students, teachers, and administrators.</li>
                                <li><span className='font-semibold'>Assessment Tools:</span> Quizzes, tests, and assignment submission features.</li>
                                <li><span className='font-semibold'>Progress Tracking:</span> Monitoring and reporting tools for student progress.</li>
                                <li><span className='font-semibold'>Communication Tools:</span> Forums, messaging, and announcements.</li>
                                <li><span className='font-semibold'>Content Management:</span> Support for multimedia content and interactive materials.</li>
                            </ul>
                        </div>

                        <div className='space-y-1 md:space-y-3 hidden md:block'>
                            <h2 className='text-3xl font-bold text-textSecondary4'>Technologies Used</h2>
                            <div className='flex flex-wrap gap-2 text-base'>
                                <span className='bg-foreground4 text-textPrimary4  rounded-full px-4 py-2'>PHP</span>
                                <span className='bg-foreground4 text-textPrimary4  rounded-full px-4 py-2'>MySQL</span>
                                <span className='bg-foreground4 text-textPrimary4  rounded-full px-4 py-2'>JavaScript</span>
                                <span className='bg-foreground4 text-textPrimary4  rounded-full px-4 py-2'>Bootstrap</span>
                            </div>
                        </div>
                        <div className='flex justify-start space-x-4'>
                            <GlowingButton className={'md:text-base text-xs bg-transparent text-textPrimary2 border-secondary2'}>
                                <a href='https://lms.emaan.edu.pk' target='_blank' rel='noopener noreferrer'>View Project</a>
                            </GlowingButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Section3;
