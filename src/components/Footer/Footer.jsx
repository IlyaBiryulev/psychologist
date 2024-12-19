import './Footer.css';
import NavTab from '../NavTab/NavTab';
import SocialLinks from '../SocialLinks/SocialLinks';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__info'>
                <div className='footer__logo'></div>
                <div className='footer__copyright'>&copy;️2023 Бирюлев Илья</div>
            </div>
            <NavTab/>
            <SocialLinks/>
        </div>
    );
}

export default Footer;
