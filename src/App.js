import './App.css';

import TopBar from './models/TopBar';
import BottomBar from './models/BottomBar';
import OverviewMenu from './models/OverviewMenu';
import CartMenu from './models/CartMenu';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const headphones = [
  {
    id: 1,
    image: 1,
    type: 'wired',
    title: 'Apple BYZ S852I',
    price: 2927,
    oldPrice: 3527,
    rating: 4.7,
  },
  {
    id: 2,
    image: 2,
    type: 'wired',
    title: 'Apple EarPods',
    price: 2327,
    rating: 4.5,
  },
  {
    id: 3,
    image: 3,
    type: 'wired',
    title: 'Apple EarPods',
    price: 2327,
    rating: 4.5,
  },
  {
    id: 4,
    image: 1,
    type: 'wired',
    title: 'Apple BYZ S852I',
    price: 2927,
    oldPrice: 3527,
    rating: 4.7,
  },
  {
    id: 5,
    image: 2,
    type: 'wired',
    title: 'Apple EarPods',
    price: 2327,
    rating: 4.5,
  },
  {
    id: 6,
    image: 3,
    type: 'wired',
    title: 'Apple EarPods',
    price: 2327,
    rating: 4.5,
  },
  {
    id: 7,
    image: 4,
    type: 'wireless',
    title: 'Apple AirPods',
    price: 9527,
    rating: 4.7,
  },
  {
    id: 8,
    image: 5,
    type: 'wireless',
    title: 'GERLAX GH-04',
    price: 6627,
    rating: 4.7,
  },
  {
    id: 9,
    image: 6,
    type: 'wireless',
    title: 'BOROFONE BO4',
    price: 7527,
    rating: 4.7,
  },
];

let refreshCount;
let setRefreshCount;

export function refreshLayout() {
  setRefreshCount(refreshCount + 1);
}

export function updateCartPresenter() {
  const count = getPurchasedProductsCount();
  document.getElementById('header').setAttribute('purchasedProductsCount', count);

  refreshLayout();
}

export function loadPurchasedProductCount(id) {
  const count = Number(sessionStorage.getItem(`product-${id}`));
  return isNaN(count) ? 0 : count;
}

export function getPurchasedProductsCount() {
  return headphones.reduce((prev, curr) => (prev += loadPurchasedProductCount(curr.id)), 0);
}

function App() {
  const [refreshValue, setRefreshValue] = useState(0);

  refreshCount = refreshValue;
  setRefreshCount = setRefreshValue;

  for (const headphone of headphones) {
    sessionStorage.setItem(headphone.id, 0);
  }

  const purchasedProductsCount = getPurchasedProductsCount();

  return (
    <BrowserRouter>
      <div className='App'>
        <TopBar likesCount={2} purchasedProductsCount={purchasedProductsCount} />
        <div className='wrapper'>
          <Routes>
            <Route path='/online-store' element={<OverviewMenu headphones={headphones} />} />
            <Route path='/online-store/cart' element={<CartMenu headphones={headphones} />} />
          </Routes>
        </div>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
