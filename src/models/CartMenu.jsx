import '../static/css/cartMenu.css';

import React from 'react';
import PurchaseProductCard from './PurchaseProductCard';

import { loadPurchasedProductCount } from '../App';

export default function CartMenu(props) {
  console.log(props);
  const headphonesCards = props.headphones
    .filter(t => loadPurchasedProductCount(t.id) > 0)
    .map(t => <PurchaseProductCard headphone={t} />);

  const totalPrice = props.headphones.reduce(
    (prev, curr) => (prev += curr.price * loadPurchasedProductCount(curr.id)),
    0,
  );

  return (
    <div id='main_data'>
      <div className='cartTitle'>Корзина</div>
      <div className='cartContent'>
        <div className='purchases'>{headphonesCards}</div>
        <div className='cartTotals'>
          <div className='totalMoneyContainer'>
            <div className='totalMoney'>Итого</div>
            <div className='totalMoney'>{`₽ ${totalPrice}`}</div>
          </div>
          <div className='makeOrder'>Перейти к оформлению</div>
        </div>
      </div>
    </div>
  );
}
