import './Faq.css';
import { useState } from 'react';
import { FaqData } from '../../utils/FaqData';
import Photo from '../../image/DSCF9885.jpg';
import Accordion from '../Accordion/Accordion';
import SectionMainTitle from '../SectionMainTitle/SectionMainTitle';
import { motion } from 'framer-motion';
import { textAnim } from '../../utils/constants';


function Faq() {
    const [opened, setOpened] = useState(null);

    return (
    <motion.div 
        className='faq' 
        id='faq'
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.3, once: true}}
    >
        <SectionMainTitle title={'FAQ'}/>
        <div 
            className='faq__content'
        >
            <motion.div className='faq__question' variants={textAnim} custom={1}>*eсли остались вопросы, можете задать их в любой удобной для Вас социальной сети</motion.div>
            <motion.img className='faq__img' src={Photo} alt="z" variants={textAnim} custom={1}/>
            <motion.div className='faq_accordion' variants={textAnim} custom={2}>
                {FaqData.map((item, i) => 
                    <Accordion 
                        item={item}
                        key={item.id}
                        opened={i === opened}
                        toggle = {setOpened.bind(null, i === opened ? null : i)}
                    />
                )}
            </motion.div>
        </div>
    </motion.div>
  );
}

export default Faq;