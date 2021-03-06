import React from 'react';

import icons from '../../img/icons/*.png';

const ItemCard = ({ item, isHero = false }) => {
  return <div className={`rounded-md bg-dc-bg-dark flex items-center overflow-hidden border-2 border-dc-accent ${isHero ? 'mb-4 lg:w-2/3 lg:mx-auto' : ''}`}>
    <img className='border-r-2 border-dc-accent' src={icons[item.icon.replace(/_icon\.png$/, '')]} style={{ height: isHero ? '70px' : '50px' }}></img>
    <span className={`m-auto p-3 ${isHero ? 'text-2xl' : ''}`}>{item.name}</span>
  </div>;
};

export default ItemCard;
