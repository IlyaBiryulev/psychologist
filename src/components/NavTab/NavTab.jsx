import './NavTab.css';

function NavTab({ onClick }) {
  return (
    <ul className='navtab'>
        <li className='navtab__item'><a href="#about" className='navtab__link' onClick={onClick}>Обо мне</a></li>
        <li className='navtab__item'><a href="#faq" className='navtab__link' onClick={onClick}>FAQ</a></li>
        <li className='navtab__item'><a href="#services" className='navtab__link' onClick={onClick}>Услуги</a></li>
        <li className='navtab__item'><a href="#reviews" className='navtab__link' onClick={onClick}>Отзывы</a></li>
        <li className='navtab__item'><a href="#register-block" className='navtab__link' onClick={onClick}>Запись</a></li>
    </ul>
  );
}

export default NavTab;