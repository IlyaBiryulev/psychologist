import './Main.css';
import Promo from '../Promo/Promo';
import About from '../About/About';
import InfoTopic from '../InfoTopic/InfoTopic';
import Faq from '../Faq/Faq';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import RegisterForm from '../RegisterForm/RegisterForm';

function Main() {
  return (
    <div className='main'>
        <Promo />
        <InfoTopic />
        <About />
        <Faq />
        <Services />
        <Reviews />
        <RegisterForm />
    </div>
  );
}

export default Main;
