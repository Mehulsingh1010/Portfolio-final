'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| My Background" />
        <TitleText title={<>Get to know my journey</>} />
        <div className="mt-[31px] flex flex-col gap-[24px]">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white">Education</h3>
            <p className="text-white">B.Tech in Computer Science</p>
            <p className="text-gray-200">VIT University, 2022 - 2026</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white">Experience Timeline</h3>
            <ul className="list-disc pl-5 text-gray-200">
              <li>
                <strong>Web Development:</strong> Started in 2022 - Present
              </li>
              <li>
                <strong>UI/UX Design:</strong> Started in 2023
              </li>
              <li>
                <strong>AIML:</strong> Started in 2024 - Present
              </li>
            </ul>
          </div>
          {/* Resume Download Section */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-white">Download My Resume</h3>
            <p className="text-gray-200">Click the button below to download my resume.</p>
            <a
              href="https://drive.google.com/uc?export=download&id=1GbWCYF_U1w29XoL_w_FLnfVRrINRDmdp" // Direct download link to your resume file
              className="mt-4 inline-block bg-white text-purple-600 font-semibold py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
