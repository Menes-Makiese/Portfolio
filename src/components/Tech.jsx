import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, comportments } from "../constants";
import { motion } from 'framer-motion';

import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <section className="w-full  relative mx-auto">
        <motion.div
          variants={textVariant()}>
          <p className={styles.sectionSubText}>Ce que je maitrise..</p>
          <p className={styles.sectionHeadText}>Techniques</p>
        </motion.div>

        <div className="flex flex-row max-lg:flex-col w-full justify-between items-center flex-wrap mt-16">

          <motion.div className="flex flex-col flex-wrap w-1/2 items-center max-lg:w-full">
            <h2 className={styles.sectionSubText}>Hard skill</h2>
            <div className="flex flex-row flex-wrap items-center justify-center w-4/5">
              {technologies.map((technology) => (
                <div className="w-28 h-28 cursor-grab" key={technology.name}>
                  <BallCanvas icon={technology.icon} />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="flex flex-col flex-wrap w-1/2 items-center max-lg:w-full max-lg:mt-10">
            <h2 className={styles.sectionSubText}>Soft skill</h2>
            <div className="flex flex-row flex-wrap items-center justify-center w-4/5">
              {comportments.map((comportment) => (
                <div className="w-28 h-28 cursor-grab" key={comportment.name}>
                  <BallCanvas icon={comportment.icon} />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default SectionWrapper(Tech, "")