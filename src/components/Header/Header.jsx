import './Header.css';
import NavTab from '../NavTab/NavTab';
import SocialLinks from '../SocialLinks/SocialLinks';

function Header() {
  return (
    <div className='header'>
      <div className='header__content'>
      <div className='header__logo'></div>
      <NavTab />
      </div>
      <div className='header__contact'>
        <SocialLinks />
        <p className='header__number'>+7 (981)-686-92-94</p>
      </div>
    </div>
  );
}

export default Header;
