'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} pl-6 sm:pl-16`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <div className="relative z-10 flex flex-col items-center justify-center">
        <motion.div
          variants={textVariant(1.1)}
          className="flex items-center justify-center"
        >
          <div className={styles.heroDText} />
          <h1 className={styles.heroHeading}>igital</h1>
        </motion.div>
        <motion.h1 variants={textVariant(1.2)} className={styles.heroHeading}>
          Madness
        </motion.h1>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="relative -mt-[12px] w-full md:-mt-[20px]"
      >
        <div className="hero-gradient absolute -top-[30px] z-[0] h-[300px] w-full rounded-tl-[140px]" />
        <img
          src="/cover.png"
          alt="hero_cover"
          className="relative z-10 h-[350px] w-full rounded-tl-[140px] object-cover sm:h-[500px]"
        />
        <a href="#explore">
          <div className="relative z-10 -mt-[50px] flex w-full justify-end pr-[40px] sm:-mt-[70px]">
            <img
              src="/stamp.png"
              alt="stamp"
              className="h-[100px] w-[100px] object-contain sm:h-[155px] sm:w-[155px]"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
