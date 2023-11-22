import './Services.css';
import SectionMainTitle from '../UI/SectionMainTitle/SectionMainTitle';
import { MServicesItem } from '../ServicesItem/ServicesItem';
import { ServicesData } from '../../utils/ServicesData';
import { motion } from 'framer-motion';
import { textAnim } from '../../utils/constants';


function Services() {
    return (
    <div 
      className='services' 
      id='services'
    >
      <SectionMainTitle title={'Услуги и стоимость'}/>
      <motion.div  
        className='services__content'
        initial='hidden'
        whileInView='visible'
        viewport={{amount: 0.3, once: true}}
      >
        {
          ServicesData.map((item) => 
            <MServicesItem
              variants={textAnim}
              custom={item.id}
              card={item}
              key={item.id}
            />
          )
        }
      </motion.div>
    </div>
  );
}

export default Services;