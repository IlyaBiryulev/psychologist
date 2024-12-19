import './Promo.css';
import Photo from '../../image/DSCF9843.jpg';
import {motion} from 'framer-motion';
import {textAnim} from '../../utils/constants';

function Promo({onClick}) {
    return (
        <motion.section
            className='promo'
            initial='hidden'
            whileInView='visible'
            viewport={{once: true}}
        >
            <div className='promo__content'>
                <div className='promo__wrapper'>
                    <motion.h1 className='promo__subtitle' variants={textAnim} custom={1}>Психолог</motion.h1>
                    <motion.h2 className='promo__title' variants={textAnim} custom={1}>Юлия Тимошенко</motion.h2>
                    <motion.button className='promo__btn' variants={textAnim} custom={2} onClick={onClick}>Записаться
                    </motion.button>
                </div>
                <motion.img className='promo__img' src={Photo} alt="Я" variants={textAnim} custom={3}/>
            </div>
        </motion.section>
    );
}

export default Promo;