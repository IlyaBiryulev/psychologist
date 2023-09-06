import './Faq.css';
import { useState } from 'react';
import { FaqData } from '../../utils/FaqData';
import Photo from '../../image/DSCF9885.jpg';
import Accordion from '../Accordion/Accordion';
import Diploma from '../Diploma/Diploma';


function Faq() {
    const [opened, setOpened] = useState(null);

    return (
    <div className='faq'>
        <h1 className='faq__title'>FAQ</h1>
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
        {/* <Diploma /> */}
    </div>
  );
}

export default Faq;