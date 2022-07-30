import '../static/css/topBar.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function TopBar(props) {
  return (
    <header className='header' id='header'>
      <NavLink className='topBarTitle' to='/online-store/'>
        QPICK
      </NavLink>
      <div className='headerMenu'>
        <NavLink className='headerImageContainer' to='/online-store/likes/'>
          <img className='headerImage' src='/online-store/images/icons/like.png' alt='like' />
          <div className='headerCounterImage'>{props.likesCount}</div>
        </NavLink>
        <NavLink className='headerImageContainer' to='/online-store/cart/'>
          <img className='headerImage' src='/online-store/images/icons/cart.png' alt='cart' />
          <div className='headerCounterImage'>{props.purchasedProductsCount}</div>
        </NavLink>
      </div>
    </header>
  );
}
