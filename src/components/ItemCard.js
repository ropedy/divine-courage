import React from 'react';

import icons from '../../img/icons/*.png';

const ItemCard = ({ item, isHero = false }) => {
  return <div className={`rounded-md bg-dc-bg-dark flex items-center overflow-hidden border border-dc-fg shadow-lg ${isHero ? 'mb-4 lg:w-2/3 lg:mx-auto' : ''}`}>
    <img src={icons[item.icon]} style={{ height: isHero ? '100px' : '66px' }}></img>
    <span className={`m-auto p-4 ${isHero ? 'text-2xl' : ''}`}>{item.name}</span>
  </div>;
};

export default ItemCard;
