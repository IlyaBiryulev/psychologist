import './Header.css';
import { useState } from 'react';
import NavTab from '../NavTab/NavTab';
import SocialLinks from '../SocialLinks/SocialLinks';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function Header() {
  const [ isOpened, setIsOpened ] = useState(false);

  const handleOpenMenu = () => {
    if(!isOpened) {
      setIsOpened(true);
    } else {
      setIsOpened(false);
    }
  }

  return (
    <div className='header'>
      <div className='header__logo'></div>
      <div className='header__navbar'>
        <NavTab />
      </div>
      <div className='header__social'>
        <SocialLinks />
      </div>
      <HamburgerMenu isOpened={isOpened}/>
      <div className='header__burger-btn'>
          <input className="header__checkbox" type="checkbox" onClick={handleOpenMenu}/>
          <div className="header__burger-lines">
            <span className="header__burger-line header__burger-line_first"></span>
            <span className="header__burger-line header__burger-line_second"></span>
            <span className="header__burger-line header__burger-line_third"></span>
          </div>
        </div>
    </div>
  );
}

export default Header;
