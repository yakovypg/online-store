import '../static/css/bottomBar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function BottomBar() {
  return (
    <footer>
      <div className='bottomBarTitle'>QPICK</div>
      <div className='linksColumn'>
        <NavLink className='linksColumnItem' to='/store/likes'>
          Избранное
        </NavLink>
        <NavLink className='linksColumnItem' to='/store/cart'>
          Корзина
        </NavLink>
        <NavLink className='linksColumnItem' to='/store/contacts'>
          Контакты
        </NavLink>
      </div>
      <div className='optionsColumn'>
        <NavLink className='linksColumnItem' to='/store/terms'>
          Условия сервиса
        </NavLink>
        <div className='languagesColumn'>
          <img className='internetImage' src='/images/icons/internet.png' alt='earth' />
          <span className='languagesColumnSelectedItem'>Рус</span>
          <span className='languagesColumnItem'>Eng</span>
        </div>
      </div>
      <div className='contactsColumn'>
        <img className='contactsColumnItem' src='/images/icons/vk.png' alt='vk' />
        <img className='contactsColumnItem' src='/images/icons/telegram.png' alt='telegram' />
        <img className='contactsColumnItem' src='/images/icons/whatsapp.png' alt='whatsApp' />
      </div>
    </footer>
  );
}
