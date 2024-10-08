'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { socials } from '../constants';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => {
  const [copyMessage, setCopyMessage] = useState(''); // State to manage the copy message

  const handleMailCopy = () => {
    const email = 'mehulsingh076@gmail.com'; // Your email address
    navigator.clipboard.writeText(email) // Copy email to clipboard
      .then(() => {
        setCopyMessage('Mail copied to your clipboard!'); // Set the copy message
        setTimeout(() => setCopyMessage(''), 2000); // Clear message after 2 seconds
      })
      .catch(() => {
        setCopyMessage('Failed to copy email.'); // Handle errors
      });
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Lets Connect on Socials
          </h4>
          <span type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
            <img
              src="people-03.png"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Enter My World
            </span>
          </span>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              MeHuLSiNgH
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2024 - 2027 MeHuLSiNgH. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.name === 'Mail' ? undefined : social.link} // Prevent default behavior for Mail
                  onClick={social.name === 'Mail' ? handleMailCopy : undefined} // Handle copy for Mail
                  target={social.name !== 'Mail' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                >
                  <img
                    src={social.url}
                    alt={social.name}
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Display the copy message */}
      {copyMessage && (
        <div className="absolute bottom-0 right-0 mb-4 mr-4 p-2 bg-gray-800 text-white rounded-lg">
          {copyMessage}
        </div>
      )}
    </motion.footer>
  );
};

export default Footer;
