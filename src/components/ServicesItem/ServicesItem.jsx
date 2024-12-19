import './ServicesItem.css';
import {forwardRef} from 'react';
import {motion} from 'framer-motion';

export const ServicesItem = forwardRef(({card, onClick}, ref) => {
    return (
        <div className='services-item' ref={ref}>
            <h3 className='services-item__title'>{card.title}</h3>
            <ul className='services-item__list'>
                <li className='services-item__duration'>длительность: {card.duration} мин</li>
                <li className='services-item__place'>{card.place}</li>
                <li className='services-item__btn-wrapper'>
                    <button className='services-item__enroll-btn' onClick={onClick}>Записаться &rarr;</button>
                </li>
                <li className='services-item__coast'>{card.coast} руб</li>
            </ul>
        </div>
    );
})

export const MServicesItem = motion(ServicesItem)