import './Faq.css';
import { useState } from 'react';
import { FaqData } from '../../utils/FaqData';
import Photo from '../../image/DSCF9885.jpg';
import Accordion from '../Accordion/Accordion';
import SectionMainTitle from '../SectionMainTitle/SectionMainTitle';


function Faq() {
    const [opened, setOpened] = useState(null);

    return (
    <div className='faq' id='faq'>
        <SectionMainTitle title={'FAQ'}/>
        <div className='faq__content'>
            <div className='faq__question'>*eсли остались вопросы, можете задать их в любой удобной для Вас социальной сети</div>
            <img className='faq__img' src={Photo} alt="z" />
            <div className='faq_accordion'>
                {FaqData.map((item, i) => 
                    <Accordion 
                        item={item}
                        key={item.id}
                        opened={i === opened}
                        toggle = {setOpened.bind(null, i === opened ? null : i)}
                    />
                )}
            </div>
        </div>
    </div>
  );
}

export default Faq;