import './ServicesItem.css';

function ServicesItem({card}) {
    return (
    <div className='services-item'>
        <h3 className='services-item__title'>{card.title}</h3>
        <ul className='services-item__list'>
            <li className='services-item__description'>{card.description}</li>
            <li className='services-item__duration'>длительность: {card.duration} мин</li>
            <li className='services-item__place'>{card.place}</li>
            <li className='services-item__btn-wrapper'><button className='services-item__enroll-btn'>Записаться &rarr;</button></li>
            <li className='services-item__coast'>{card.coast} руб</li>
        </ul>
    </div>
  );
}

export default ServicesItem;