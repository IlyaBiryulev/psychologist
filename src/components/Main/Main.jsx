import './Main.css';
import Promo from '../Promo/Promo';
import About from '../About/About';
import InfoTopic from '../InfoTopic/InfoTopic';

function Main() {
  return (
    <div className='main'>
        <Promo />
        <InfoTopic />
        <About />
    </div>
  );
}

export default Main;
