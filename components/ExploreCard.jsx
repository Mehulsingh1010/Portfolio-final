/* eslint-disable react/button-has-type */
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, description, customImgUrl, index, active, handleClick, projectUrl }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden rounded-3xl`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover"
    />
    {active !== id ? (
      <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.7)]">
        <img
          src={customImgUrl}
          alt={`${title} logo`}
          className="w-12 h-12 object-contain mb-2"
        />
        <h3 className="font-semibold sm:text-[20px] text-[16px] text-white">
          {title}
        </h3>
      </div>
    ) : (
      <div className="absolute bottom-0 p-4 sm:p-6 lg:p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.7)] rounded-b-[24px]">
        <img
          src={customImgUrl}
          alt={`${title} logo`}
          className="w-16 h-16 object-contain mb-4"
        />
        <h2 className="font-semibold sm:text-[28px] text-[24px] text-white">
          {title}
        </h2>
        <p className="mt-[8px] font-normal sm:text-[14px] text-[12px] text-secondary-white">
          {description}
        </p>
        <button
          onClick={(e) => {
            e.stopPropagation();
            window.open(projectUrl, '_blank');
          }}
          className="mt-[16px] py-4 px-6 bg-[#25618B] rounded-[32px] text-white text-[14px] font-semibold hover:bg-[#1A4B6D] transition-colors duration-300"
        >
          Check it out
        </button>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
