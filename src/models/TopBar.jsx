import '../static/css/topBar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TopBar(props) {
  return (
    <header className='header' id='header'>
      <NavLink className='topBarTitle' to='/store'>
        QPICK
      </NavLink>
      <div className='headerMenu'>
        <NavLink className='headerImageContainer' to='/store/likes'>
          <img className='headerImage' src='./online-shop/images/icons/like.png' alt='like' />
          <div className='headerCounterImage'>{props.likesCount}</div>
        </NavLink>
        <NavLink className='headerImageContainer' to='/store/cart'>
          <img className='headerImage' src='./online-shop/images/icons/cart.png' alt='cart' />
          <div className='headerCounterImage'>{props.purchasedProductsCount}</div>
        </NavLink>
      </div>
    </header>
  );
}
