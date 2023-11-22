import './Main.css';
import { useRef } from 'react';
import Promo from '../Promo/Promo';
import About from '../About/About';
import InfoTopic from '../InfoTopic/InfoTopic';
import Faq from '../Faq/Faq';
import Diploma from '../Diploma/Diploma';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import RegisterForm from '../RegisterForm/RegisterForm';

function Main() {
  const RegisterRef = useRef()

  const handleClickRegisterBtn = () => {
    RegisterRef.current.scrollIntoView({
      behavior: 'smooth',
      inline: 'start'
    })
  }
  return (
    <div className='main'>
        <Promo onClick={handleClickRegisterBtn}/>
        <InfoTopic />
        <About />
        <Faq />
        <Diploma />
        <Services />
        <Reviews />
        <RegisterForm onRef={RegisterRef} />
    </div>
  );
}

export default Main;
