import './Main.css';
import Promo from '../Promo/Promo';
import About from '../About/About';
import InfoTopic from '../InfoTopic/InfoTopic';
import Faq from '../Faq/Faq';
import Services from '../Coast/Services';
import Reviews from '../Reviews/Reviews';

function Main() {
  return (
    <div className='main'>
        <Promo />
        <InfoTopic />
        <About />
        <Faq />
        <Services />
        <Reviews />
    </div>
  );
}

export default Main;
