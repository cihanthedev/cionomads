'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row"
  >
    <div className="overflow-hidden rounded-[32px] bg-blue-400">
      <img
        src={imgUrl}
        alt="planet-01"
        className="w-full object-cover mix-blend-multiply hue-rotate-30"
      />
    </div>
    <div className="flex w-full items-center justify-between">
      <div className="flex max-w-[650px] flex-1 flex-col md:ml-[62px]">
        <h4 className="text-[26px] font-normal text-white lg:text-[42px]">
          {title}
        </h4>
        <p className="mt-[16px] text-[14px] font-normal text-secondary-white lg:text-[20px]">
          {subtitle}
        </p>
      </div>

      <div className="hidden h-[100px] w-[100px] items-center justify-center rounded-full border-[1px] border-white bg-transparent lg:flex">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="h-[40%] w-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
