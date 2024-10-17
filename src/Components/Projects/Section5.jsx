// Section5.jsx
import React from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import PrintLab from "../../assets/PrintLab.png";
import GlowingButton from "../GlowingButton/GlowingButton";

const Section5 = ({ scrollYProgress }) => {
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const borderRadius = useTransform(smoothScroll, [0.99, 1], ["100%", "0%"]);
  const width = useTransform(smoothScroll, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      style={{ borderRadius, width }}
      className="mx-auto sticky w-full top-0 h-auto bg-foreground text-2xl flex items-center justify-center text-textSecondary2 py-[20%] overflow-hidden"
    >
      <div className="w-10/12 mx-auto bg-background rounded-lg py-6 px-4 md:px-6 shadow-2xl shadow-secondary mt-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-6/12 md:p-4 flex flex-col items-center overflow-hidden">
            <img
              src={PrintLab}
              alt="LMS"
              height={400}
              width={400}
              className="mb-8 border-foreground3 border-2 rounded-md shadow-md object-cover object-center"
            />
            <h1 className="text-base md:text-4xl my-2 md:my-6 font-extrabold text-textSecondary2">
              Custom Web Software
            </h1>
            <p className="text-sm md:text-lg">
              An integrated platform designed to streamline the process of
              managing, delivering and enhancing user experiences.
            </p>
          </div>
          <div className="md:w-6/12 mt-0 md:mt-8 py-4 md:p-4 md:space-y-3 flex flex-col justify-center">
            <div className="space-y-1 md:space-y-4">
              <h2 className="text-base md:text-3xl font-bold text-textSecondary2">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-sm md:text-base">
                <li>
                  <span className="font-semibold">Orders Management:</span> Easy
                  creation, management, and delivery tracking of orders.
                </li>
                <li>
                  <span className="font-semibold">Notifying Tools:</span>{" "}
                  Notifications, ALerts and Warning features.
                </li>
                <li>
                  <span className="font-semibold">Progress Tracking:</span>{" "}
                  Monitoring and reporting tools for each delivery.
                </li>
                <li>
                <span className="font-semibold">Analytics:</span>{" "} Detailed insights and analytics for performance evaluation.
                </li>
                <li>
                  <span className="font-semibold">Customization:</span>{" "} Personalization options to enhance experience with custom settings.
                </li>
                <li>
                  <span className="font-semibold">:</span>{" "}
                </li>
              </ul>
            </div>

            <div className="space-y-1 md:space-y-3 hidden md:block">
              <h2 className="text-3xl font-bold text-textSecondary2">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2 text-base">
                <span className="bg-foreground text-textPrimary2  rounded-full px-4 py-2">
                  PHP
                </span>
                <span className="bg-foreground text-textPrimary2  rounded-full px-4 py-2">
                  MySQL
                </span>
                <span className="bg-foreground text-textPrimary2  rounded-full px-4 py-2">
                  JavaScript
                </span>
                <span className="bg-foreground text-textPrimary2  rounded-full px-4 py-2">
                  Bootstrap
                </span>
              </div>
            </div>
            <div className="flex justify-start space-x-4">
              <GlowingButton
                className={
                  "md:text-base text-xs bg-transparent text-textPrimary2 border-secondary2"
                }
              >
                <a
                  href="https://app.printlab.stepwaysoftwares.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </GlowingButton>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section5;
