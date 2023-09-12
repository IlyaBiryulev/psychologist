import './InfoTopic.css';
import { textAnim } from '../../utils/constants';
import { motion } from 'framer-motion';

function InfoTopic() {

  return (
    <motion.div 
      className='info-topic'
    >
      <motion.ul 
        className='info-topic__list' 
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.2, once: true}}
      >
        <motion.li className='info-topic__item info-topic__item_main' variants={textAnim}><h1 className='info-topic__title'>Ко мне вы можете обратиться</h1></motion.li>
        <motion.li className='info-topic__item info-topic__item_first' variants={textAnim}><p className='info-topic__text'>с переживаниями и тревогами</p></motion.li>
        <motion.li className='info-topic__item info-topic__item_second' variants={textAnim}><p className='info-topic__text'>с межличностными отношениями</p></motion.li>
        <motion.li className='info-topic__item info-topic__item_third' variants={textAnim}><p className='info-topic__text'>с профессиональной и личностной самореализацией</p></motion.li>
      </motion.ul>
    </motion.div>
  );
}

export default InfoTopic;
