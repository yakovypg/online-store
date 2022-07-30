import '../static/css/overviewMenu.css';

import React from 'react';
import OverviewProductCard from './OverviewProductCard';

export default function OverviewMenu(props) {
  const wiredHeadphones = props.headphones.filter(t => t.type === 'wired');
  const wirelessHeadphones = props.headphones.filter(t => t.type === 'wireless');

  const wiredHeadphonesCards = wiredHeadphones.map(t => (
    <OverviewProductCard
      id={t.id}
      title={t.title}
      image={t.image}
      rating={t.rating}
      price={t.price}
      oldPrice={t.oldPrice}
    />
  ));

  const wirelessHeadphonesCards = wirelessHeadphones.map(t => (
    <OverviewProductCard
      id={t.id}
      title={t.title}
      image={t.image}
      rating={t.rating}
      price={t.price}
      oldPrice={t.oldPrice}
    />
  ));

  return (
    <div>
      <div>
        <div className='headphoneTitle'>Наушники</div>
        <div className='headphoneList'>{wiredHeadphonesCards}</div>
      </div>
      <div>
        <div className='headphoneTitle'>Беспроводные наушники</div>
        <div className='headphoneList'>{wirelessHeadphonesCards}</div>
      </div>
    </div>
  );
}
