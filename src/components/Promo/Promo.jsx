import './Promo.css';
import { useRef } from 'react';
import Photo from '../../image/DSCF9843.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import { textAnim } from '../../utils/constants';

function Promo() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '100%']
  )

    return (
      <motion.section 
        className='promo'
        initial='hidden'
        whileInView='visible'
        viewport={{once: true}}
        ref={ref}
      >
        <motion.div className='promo__content' style={{y: backgroundY}}>
          <div className='promo__wrapper'>
            <motion.h1 className='promo__subtitle' variants={textAnim} custom={1}>Психолог</motion.h1>
            <motion.h2 className='promo__title' variants={textAnim} custom={1}>Юлия Тимошенко</motion.h2>
            <motion.button className='promo__btn' variants={textAnim} custom={2}>Записаться</motion.button>
          </div>
          <motion.img className='promo__img' src={Photo} alt="Я" variants={textAnim} custom={3}/>
        </motion.div>
      </motion.section>
    );
}

export default Promo;