import '../static/css/overviewProductCard.css';

import React from 'react';
import { updateCartPresenter } from '../App';

export default function OverviewProductCard(props) {
  const productId = `product-${props.id}`;

  function onBuyClick() {
    const productsInCart = Number(sessionStorage.getItem(productId));

    if (productsInCart === 0) {
      sessionStorage.setItem(productId, 1);
      updateCartPresenter();
    }
  }

  return (
    <div className='productCard'>
      <img
        className='overviewProductImage'
        src={`/images/headphones/headphone-${props.image}.jpg`}
        alt='headphone'
      />
      <div className='productInfoContainer'>
        <div className='productInfo'>
          <div className='productTitle'>{props.title}</div>
          <div className='productPrice'>
            <div>{props.price} ₽</div>
            <div className='productOldPrice'>{props.oldPrice ? `${props.oldPrice} ₽` : ''}</div>
          </div>
        </div>
        <div className='productInfo'>
          <span>
            <img className='ratingImage' src='/images/icons/star.png' alt='star' />
            <span>{props.rating}</span>
          </span>
          <div className='productBuyLabel' onClick={onBuyClick}>
            Купить
          </div>
        </div>
      </div>
    </div>
  );
}
