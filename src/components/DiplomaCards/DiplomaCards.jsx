import React from 'react';
import './DiplomaCards.css'

function DiplomaCards({item}) {
    return (
        <div className='diploma-card'>
            <img src={item.img} alt={item.title} className='diploma-card__img'/>
        </div>
    );
}

export default DiplomaCards;