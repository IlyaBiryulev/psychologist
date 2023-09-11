import './HamburgerMenu.css';
import NavTab from '../NavTab/NavTab';
import SocialLinks from '../SocialLinks/SocialLinks';


function HamburgerMenu({ isOpened }) {
  return (
    <div className={!isOpened ? 'hamburger-menu' : 'hamburger-menu hamburger-menu_active'}>
        <div className='hamburger-menu__container'>
            <div className='hamburger-menu__navtab'>
                <NavTab />
            </div>
            <SocialLinks />
        </div>
    </div>
  );
}

export default HamburgerMenu;