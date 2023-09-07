import './NavTab.css';

function NavTab() {
  return (
    <ul className='navtab'>
        <li className='navtab__item'>Обо мне</li>
        <li className='navtab__item'>FAQ</li>
        <li className='navtab__item'>Услуги</li>
        <li className='navtab__item'>Отзывы</li>
        <li className='navtab__item'>Контакты</li>
    </ul>
  );
}

export default NavTab;