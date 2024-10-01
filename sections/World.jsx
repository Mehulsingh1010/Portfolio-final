'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="| Let's Collaborate!" textStyles="text-center" />
      <TitleText
        title={(
          <>Explore my portfolio and hire me for your next freelance project!</>
        )}
        textStyles="text-center"
      />
      {/* New Line for Global Collaboration */}
      <p className="text-center text-gray-300 mt-4">
        Collaborating with talented individuals from all over the world.
      </p>

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        {/* Avatars to Fill the Map */}
        {/* Avatar 1 */}
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        {/* Avatar 2 */}
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        {/* Avatar 3 */}
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        {/* Additional Avatars */}
        <div className="absolute top-1/4 left-[30%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute bottom-10 left-[60%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[20%] right-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        {/* New Avatar for India (7th person) */}
        <div className="absolute top-[35%] left-[62%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" /> {/* Change the image source as needed */}
        </div>

        <div className="absolute top-[40%] left-[40%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute bottom-40 left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute bottom-20 left-[35%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default World;
