import './Accordion.css';
import { motion } from 'framer-motion';


function Accordion({title, opened, toggle, children}) {
  return (
    <article className={opened ? 'accordion accordion_opened' : 'accordion'}>
        <div className='accordion__card' onClick={toggle}>
          <p className='accordion__title'>{title}</p>
          <div className={opened ? 'accordion__arrow accordion__arrow_opened' : 'accordion__arrow'}></div>
        </div>
        {opened && 
          <div>
            {children}
          </div>
        }
    </article>
  );
}

export default Accordion;