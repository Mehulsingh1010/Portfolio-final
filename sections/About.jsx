'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Myself" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Passionate</span> about
        crafting digital experiences, I'm an aspiring
        <span className="font-extrabold text-white"> Software Developer
        </span>{' '}
        with a blend of {' '}
        <span className="font-extrabold text-white">full-stack </span> and
        <span className="font-extrabold text-white"> AIML</span> expertise. Armed
        with the MERN stack and a dash of machine learning magic, I'm on a quest
        for internships and freelancing work that'll push my limits with. With
        12 + months of of full-stack flair, I'm ready to turn ideas into
        reality. Let's collaborate on groundbreaking projects and bring some
        coding madness to life! Scroll down to explore my journey and see what I
        can bring to your team's table.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
