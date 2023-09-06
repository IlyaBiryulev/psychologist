import './Accordion.css';


function Accordion({item, opened, toggle}) {
  return (
    <article className={opened ? 'accordion accordion_opened' : 'accordion'}>
        <div className='accordion__card' onClick={toggle}>
            <p className='accordion__title'>{item.title}</p>
            <div className={opened ? 'accordion__arrow accordion__arrow_opened' : 'accordion__arrow'}></div>
        </div>
        {opened && 
            <div className='accordion__content'>{item.content1}</div>
        }
    </article>
  );
}

export default Accordion;