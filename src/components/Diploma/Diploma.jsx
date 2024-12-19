import React, {useState} from 'react';
import './Diploma.css';
import {motion} from 'framer-motion';
import {DiplomData} from '../../utils/DiplomData';
import SectionMainTitle from '../UI/SectionMainTitle/SectionMainTitle';
import DiplomaCards from '../DiplomaCards/DiplomaCards';
import Accordion from '../UI/Accordion/Accordion';
import {textAnim} from '../../utils/constants';

function Diploma() {
    const [opened, setOpened] = useState(null);

    return (
        <motion.div
            className='diploma'
            id='faq'
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.3, once: true}}
        >
            <SectionMainTitle title={'Дипломы и сертификаты'}/>
            <motion.div className='diploma__content' variants={textAnim}>
                {DiplomData.map((item, i) =>
                    <Accordion
                        title={item.title}
                        key={i}
                        opened={i === opened}
                        toggle={setOpened.bind(null, i === opened ? null : i)}
                    >
                        <DiplomaCards item={item}/>
                    </Accordion>
                )}
            </motion.div>
        </motion.div>
    );
}

export default Diploma;