import './Accordion.css';
import { motion } from 'framer-motion';


function Accordion({item, opened, toggle}) {
  return (
    <article className={opened ? 'accordion accordion_opened' : 'accordion'}>
        <div className='accordion__card' onClick={toggle}>
            <p className='accordion__title'>{item.title}</p>
            <div className={opened ? 'accordion__arrow accordion__arrow_opened' : 'accordion__arrow'}></div>
        </div>
        {opened && 
            <motion.p 
              className='accordion__content'
              initial={{ opacity: 0}}
              animate={{ opacity: 1, transition: {duration: 0.5}}}
              exit={{ opacity: 0}}
            >
              {item.content1}
            </motion.p>
        }
    </article>
  );
}

export default Accordion;