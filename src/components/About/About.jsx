import './About.css';
import Photo from '../../image/DSCF9791.jpg';
import SectionMainTitle from '../UI/SectionMainTitle/SectionMainTitle';
import { motion } from 'framer-motion';
import { textAnim } from '../../utils/constants';


function About() {
  return (
    <motion.div 
      className='about' 
      id='about'
      initial='hidden'
      whileInView='visible'
      viewport={{amount: 0.3, once: true}}
    >
      <SectionMainTitle title={'Обо мне'}/> 
        <div className='about__wrapper'>
            <motion.p className='about__text' variants={textAnim}>
              Я практикующий психолог (по базовому образованию педагог-психолог, по переквалификации - клинический психолог).
              В профессии более 20 лет. Работаю со взрослыми людьми: с переживаниями, эмоциями, тревогами, межличностными отношениями, профессиональной и личностной самореализацией.
              Я понимаю, что решиться на обращение к психологу бывает не просто и очень волнительно (и это НОРМАЛЬНО!). Сама когда-то прошла через это. И сейчас, регулярно бывая в кресле клиента 
              (прохожу личную терапию), понимаю, что чувствует человек на консультации у психолога и, что очень важно, после нее (инсайты, открытия, прозрения).
            </motion.p>
            <motion.img className='about__img' src={Photo} alt="Я" variants={textAnim}/>
        </div>
    </motion.div>
  );
}

export default About;
