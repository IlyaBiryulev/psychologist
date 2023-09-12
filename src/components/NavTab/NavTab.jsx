import './NavTab.css';

function NavTab() {
  return (
    <ul className='navtab'>
        <li className='navtab__item'><a href="#about" className='navtab__link'>Обо мне</a></li>
        <li className='navtab__item'><a href="#faq" className='navtab__link'>FAQ</a></li>
        <li className='navtab__item'><a href="#services" className='navtab__link'>Услуги</a></li>
        <li className='navtab__item'><a href="#reviews" className='navtab__link'>Отзывы</a></li>
        <li className='navtab__item'><a href="#register-block" className='navtab__link'>Запись</a></li>
    </ul>
  );
}

export default NavTab;