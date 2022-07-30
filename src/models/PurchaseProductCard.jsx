import '../static/css/purchaseProductCard.css';

import React from 'react';
import { updateCartPresenter } from '../App';

export default function CartMenu(props) {
  const id = `product-${props.id}`;
  const cardCounterValue = Number(sessionStorage.getItem(id));

  function onMinusClick() {
    const count = Number(sessionStorage.getItem(id));

    if (count > 0) {
      sessionStorage.setItem(id, count - 1);
      updateCartPresenter();
    }
  }

  function onPlusClick() {
    const count = Number(sessionStorage.getItem(id));

    sessionStorage.setItem(id, count + 1);
    updateCartPresenter();
  }

  function onDeleteClick() {
    sessionStorage.setItem(id, 0);
    updateCartPresenter();
  }

  return (
    <div className='card'>
      <div className='cardData'>
        <img
          className='purchaseProductImage'
          src={`/online-store/images/headphones/headphone-${props.image}.jpg`}
          alt='headphone'
        />
        <div className='cardInfo'>
          <div className='cardTitle'>{props.title}</div>
          <div className='cardPrice'>{props.price} ₽</div>
        </div>
        <img
          className='cardImage'
          src='/online-store/images/icons/delete.png'
          alt='delete'
          onClick={onDeleteClick}
        />
      </div>
      <div className='cardData'>
        <div className='cardCounter'>
          <img
            className='cardImage'
            src='/online-store/images/icons/minus.png'
            alt='minus'
            onClick={onMinusClick}
          />
          <div className='cardCounterValue'>{cardCounterValue}</div>
          <img
            className='cardImage'
            src='/online-store/images/icons/plus.png'
            alt='plus'
            onClick={onPlusClick}
          />
        </div>
        <div className='cardTotalPrice'>{cardCounterValue * props.price} ₽</div>
      </div>
    </div>
  );
}
