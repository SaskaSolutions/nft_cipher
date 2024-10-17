import React from 'react';
import Cards from './Cards';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import AlexJohnson from '../../assets/AlexJohnson.png';
import EmilyDavis from '../../assets/EmilyDavis.png';
import MichaelBrown from '../../assets/MichealBrown.png';
import SarahWilson from '../../assets/SarahWilson.png';

const HorizontalScroll = () => {
    const testimonials = [
        {
            quote:
                "This service has completely transformed the way we operate. The team is professional and always goes the extra mile.",
            author: "Alex Johnson",
            role: "Marketing Expert",
            img: AlexJohnson,
            altText: "Alex Johnson"
        },
        {
            quote:
                "Their innovative solutions have streamlined our processes, saving us both time and money. Highly recommend!",
            author: "Emily Davis",
            role: "Product Manager",
            img: EmilyDavis,
            altText: "Emily Davis"
        },
        {
            quote:
                "Working with this company has been a game-changer for us. Their expertise and dedication are unmatched.",
            author: "Michael Brown",
            role: "CTO",
            img: MichaelBrown,
            altText: "Michael Brown"
        },
        {
            quote:
                "The results we’ve seen from their work have exceeded our expectations. We couldn’t be happier with the partnership.",
            author: "Sarah Wilson",
            role: "Marketing Director",
            img: SarahWilson,
            altText: "Sarah Wilson"
        },
    ];

    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const smoothScroll = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 20,
        restDelta: 0.001,
    });
    const x = useTransform(smoothScroll, [0, 1], ["50%", "-50%"]);

    return (
        <section ref={ref} className='relative h-[300vh]'>
            <div className='sticky top-0 flex h-screen items-center justify-center overflow-hidden'>
                <motion.div style={{ x }} className='flex space-x-8'>
                    {testimonials.map((test, index) => (
                        <Cards key={index} {...test} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HorizontalScroll;