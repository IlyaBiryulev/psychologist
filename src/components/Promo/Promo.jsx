import './Promo.css';
import Photo from '../../image/DSCF9843.jpg'

function Promo() {
    return (
      <section className='promo'>
        <div className='promo__content'>
        <h2 className='promo__subtitle'>психолог</h2>
        <h1 className='promo__title'>Юлия Тимошенко</h1>
        </div>
        <img className='promo__img' src={Photo} alt="Я" />
      </section>
    );
}

export default Promo;