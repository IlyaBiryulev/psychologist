import './Header.css';
import {useState} from 'react';
import NavTab from '../NavTab/NavTab';
import SocialLinks from '../SocialLinks/SocialLinks';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

function Header() {
    const [isOpened, setIsOpened] = useState(false);

    const handleOpenAndCloseMenu = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div className='header'>
            <div className='header__logo'></div>
            <div className='header__navbar'>
                <NavTab/>
            </div>
            <div className='header__social'>
                <SocialLinks/>
            </div>
            <HamburgerMenu isOpened={isOpened} onClick={handleOpenAndCloseMenu}/>
            <div className='header__burger-btn' onClick={handleOpenAndCloseMenu}>
                <div className="header__burger-lines">
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                    <span className="header__burger-line"></span>
                </div>
            </div>
        </div>
    );
}

export default Header;
