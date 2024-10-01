'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const skills = [
  { name: 'JavaScript', logo: 'https://th.bing.com/th/id/OIP.A8veaTo5HsPq7HpTWmtCMQHaHa?rs=1&pid=ImgDetMain' },
  { name: 'React', logo: 'https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain' },
  { name: 'Node.js', logo: 'https://cdn-images-1.medium.com/max/1600/1*4VBxaeHaxTxjZiPbI7g3kw.jpeg' },
  { name: 'NextJS', logo: 'https://www.drupal.org/files/project-images/nextjs-drupal.jpg' },
  { name: 'React Redux', logo: 'https://miro.medium.com/v2/resize:fit:1358/1*-SEJ0Yo6hJueWc4R-nnU5A.jpeg' },
  { name: 'Python', logo: 'https://images.hdqwalls.com/wallpapers/python-logo-4k-i6.jpg' },
  { name: 'TensorFlow', logo: 'https://th.bing.com/th/id/OIP.6KCPLGo2bNDJs_JlXs6fZQHaFj?rs=1&pid=ImgDetMain' },
  { name: 'Keras', logo: 'https://play-lh.googleusercontent.com/cbdF22KnscKlTSKzc2_CToPg9ul8rODTS_zwftbtedv7WU_SBAZyD15PDmfUvu7uI6I' },
  { name: 'Figma', logo: 'https://s3-alpha.figma.com/hub/file/2714591175/e1906d9b-540d-4ebd-b432-a8cf00472848-cover.png' },
  { name: 'Git', logo: '/download.png' },
  { name: 'Github', logo: 'https://assets-global.website-files.com/65cbac6798dc23ce8810aeea/65cbac6798dc23ce8810af5a_github-logo-black-p-500.png' },
  { name: 'Docker', logo: 'https://www.dascase.com/wp-content/uploads/2020/01/container-consulting-image-2.jpg' },
  { name: 'Postman', logo: '/postman.png' },
  { name: 'MongoDB', logo: '/mongo.png' },
  { name: 'OracleDB', logo: '/oracle.png' },

];

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| My Skills" />
        <TitleText title={<>Technologies and Tools</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4  rounded-lg shadow-md"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-center text-white font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
