import './Services.css';
import SectionMainTitle from '../SectionMainTitle/SectionMainTitle';
import ServicesItem from '../ServicesItem/ServicesItem';
import { ServicesData } from '../../utils/ServicesData'; 


function Services() {
    return (
    <div className='services' id='services'>
      <SectionMainTitle title={'Услуги и стоимость'}/>
      <div className='services__content'>
        {
          ServicesData.map((item) => 
            <ServicesItem 
              card={item}
              key={item.id}
            />
          )
        }
      </div>
    </div>
  );
}

export default Services;