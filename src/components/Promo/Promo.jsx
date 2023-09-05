import './Promo.css';
import Photo from '../../image/DSCF9843.jpg'

function Promo() {
    return (
      <section className='promo'>
        <div className='promo__content'>
          <div className='promo__wrapper'>
            <h1 className='promo__subtitle'>Психолог</h1>
            <h2 className='promo__title'>Юлия Тимошенко</h2>
            <button className='promo__btn'>Записаться</button>
          </div>
          <img className='promo__img' src={Photo} alt="Я" />
        </div>
      </section>
    );
}

export default Promo;