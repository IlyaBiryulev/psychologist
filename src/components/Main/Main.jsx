import './Main.css';
import Promo from '../Promo/Promo';
import About from '../About/About';
import InfoTopic from '../InfoTopic/InfoTopic';
import Faq from '../Faq/Faq';

function Main() {
  return (
    <div className='main'>
        <Promo />
        <InfoTopic />
        <About />
        <Faq />
    </div>
  );
}

export default Main;
