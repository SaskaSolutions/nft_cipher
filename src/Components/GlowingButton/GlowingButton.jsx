// src/components/GlowingButton.js

import React from 'react';
import './GlowingButton.css';

const GlowingButton = ({ children, link, className, ...props }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`shiny-button px-6 py-3 text-lg font-semibold border-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
            {...props}
        >
            {children}
            <div className="shine"></div>
        </a>
    );
};

export default GlowingButton;
