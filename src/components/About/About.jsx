import './About.css';
import Photo from '../../image/DSCF9791.jpg';
import SectionMainTitle from '../SectionMainTitle/SectionMainTitle';

function About({onAboutRef}) {
  return (
    <div className='about' ref={onAboutRef}>
      <SectionMainTitle title={'Обо мне'}/> 
        <div className='about__wrapper'>
            <p className='about__text'>
                Я практикующий психолог (по базовому образованию педагог-психолог, по переквалификации - клинический психолог).
                В профессии более 20 лет. Работаю со взрослыми людьми: с переживаниями, эмоциями, тревогами, межличностными отношениями, профессиональной и личностной самореализацией.
                Я понимаю, что решиться на обращение к психологу бывает не просто и очень волнительно (и это НОРМАЛЬНО!). Сама когда-то прошла через это. И сейчас, регулярно бывая в кресле клиента 
                (прохожу личную терапию), понимаю, что чувствует человек на консультации у психолога и, что очень важно, после нее (инсайты, открытия, прозрения).
            </p>
            <img className='about__img' src={Photo} alt="Я" />
        </div>
    </div>
  );
}

export default About;
