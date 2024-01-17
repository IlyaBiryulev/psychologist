import './SocialLinks.css';
import Vk from '../../image/Vkontakte.png';
import TG from '../../image/Telegram.png';
import WA from '../../image/Whatsapp.png';


function SocialLinks() {
  return (
    <ul className='social-links'>
        <li className='social-links__item'><a className='social-links__vk' href='https://vk.com/psychologist_yuliyaftim' target='_blanck'><img className='social-links__img' src={Vk} alt="ВКОНТАКТЕ" /></a></li>
        {/* <li className='social-links__item'><a className='social-links__tg' href='#'><img className='social-links__img' src={TG} alt="ТЕЛЕГРАМ" /></a></li>
        <li className='social-links__item'><a className='social-links__wa' href='#'><img className='social-links__img' src={WA} alt="WhatsApp" /></a></li> */}
    </ul>
  );
}
 
export default SocialLinks;