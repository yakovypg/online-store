import '../static/css/purchaseProductCard.css';

import React from 'react';
import { updateCartPresenter } from '../App';

export default function CartMenu(props) {
  const headphone = props.headphone;
  const id = `product-${headphone.id}`;

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
          src={`/images/headphones/headphone-${headphone.image}.jpg`}
          alt='headphone'
        />
        <div className='cardInfo'>
          <div className='cardTitle'>{headphone.title}</div>
          <div className='cardPrice'>{headphone.price} ₽</div>
        </div>
        <img
          className='cardImage'
          src='/images/icons/delete.png'
          alt='delete'
          onClick={onDeleteClick}
        />
      </div>
      <div className='cardData'>
        <div className='cardCounter'>
          <img
            className='cardImage'
            src='/images/icons/minus.png'
            alt='minus'
            onClick={onMinusClick}
          />
          <div className='cardCounterValue'>{Number(sessionStorage.getItem(id))}</div>
          <img
            className='cardImage'
            src='/images/icons/plus.png'
            alt='plus'
            onClick={onPlusClick}
          />
        </div>
        <div className='cardTotalPrice'>
          {Number(sessionStorage.getItem(id)) * headphone.price} ₽
        </div>
      </div>
    </div>
  );
}
