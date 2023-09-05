import './InfoTopic.css';

function InfoTopic() {
  return (
    <div className='info-topic'>
        <ul className='info-topic__list'>
            <li className='info-topic__item info-topic__item_main'><h1 className='info-topic__title'>Ко мне вы можете обратиться</h1></li>
            <li className='info-topic__item info-topic__item_first'><p className='info-topic__text'>с переживаниями и тревогами</p></li>
            <li className='info-topic__item info-topic__item_second'><p className='info-topic__text'>с межличностными отношениями</p></li>
            <li className='info-topic__item info-topic__item_third'><p className='info-topic__text'>с профессиональной и личностной самореализацией</p></li>
        </ul>
    </div>
  );
}

export default InfoTopic;
