import './HamburgerMenu.css';
import NavTab from '../NavTab/NavTab';
import SocialLinks from '../SocialLinks/SocialLinks';


function HamburgerMenu({isOpened, onClick}) {
    return (
        <div className={!isOpened ? 'hamburger-menu' : 'hamburger-menu hamburger-menu_active'}>
            <div className='hamburger-menu__container'>
                <div className='hamburger-menu__cls-btn' onClick={onClick}>
                    <div className='hamburger-menu__cross-lines'>
                        <span className='hamburger-menu__cross-line hamburger-menu__cross-line_first'></span>
                        <span className='hamburger-menu__cross-line hamburger-menu__cross-line_second'></span>
                    </div>
                </div>
                <div className='hamburger-menu__navtab'>
                    <NavTab onClick={onClick}/>
                </div>
                <SocialLinks/>
            </div>
        </div>
    );
}

export default HamburgerMenu;