
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { reseaux } from '../constants';
import { fadeIn, zoomIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ReseauLogo = ({ title, icon, href }) => {
  return (

    <img
      src={icon}
      alt={title}
      className='w-16 h16 object-contain cursor-pointer hover:scale-105'
      onClick={() => window.open(href, "_blank")}
    />

  )
}

const Hero = () => {
  return (
    <>
      <section className='relative w-full h-screen mx-auto overflow-hidden'>
        <div className={'absolute inset-0 top-[100px] max-w-7xl mx-auto '}>
          <div className={`flex flex-row items-start gap-5`}>
            {/* <div className='flex flex-col justify-center items-center '>
              <div className='w-5 h-5 rounded-full bg-[#915eff]' />
              <div className='w-1 sm:h-80 h-40 violet-gradient' />
            </div> */}
            <div className='flex flex-col  items-center justify-center'>
              <motion.div
                variants={zoomIn( 2.2, 3)}>
                <h1 className={`${styles.heroHeadText} text-white`}>Bienvenue,</h1>
              </motion.div>
              <motion.div
                variants={zoomIn(5, 3)}
                className='text-center'
              >
                <p className={`${styles.heroSubText} mt-2 text-white-100 `}><br className='sm:block hidden' />Je suis passionnée par le web et j'ai pu acquérir un certain nombre de compétences depuis le début de ma reconversion. <br className='sm:block hidden' /> Je vous laisse les découvrir !</p>
              </motion.div>
              <motion.div
                variants={zoomIn(8, 3)}
                className='mt-10 flex flex-wrap items-end gap-5'>
                {reseaux.map((reseau, index) => (
                  <ReseauLogo key={reseau.title} index={index} {...reseau} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>


        <motion.div
           variants={fadeIn("bottom","",8, 3)}
        >
          <div className='absolute xs:bottom-24 bottom-32 w-full flex justify-center items-center '>
            <a href='#about'>
              <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className='w-3 h-3 rounded-full bg-secondary mb-1'
                />
              </div>
            </a>
          </div>
        </motion.div>

      </section >
    </>
  )
}

export default SectionWrapper(Hero, "") 