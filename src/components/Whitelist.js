import React, { useState } from 'react';

import Accordion from './Accordion';

import heroList from '../../data/heroes';
import bootList from '../../data/boots';
import itemList from '../../data/items';

import icons from '../../img/icons/*.png';

const Whitelist = () => {
  const [ bootsWhitelist, setBootsWhitelist ] = useState([]);
  const [ itemWhitelist, setItemWhitelist ] = useState([]);
  const [ heroWhitelist, setHeroWhitelist ] = useState([]);

  const toggleItem = (list, func, id) => {
    if (list.includes(id)) {
      func(list.filter(h => h !== id));
    }
    else {
      func([ ...list, id ]);
    }
  };

  const resetItems = () => {
    setBootsWhitelist([]);
    setItemWhitelist([]);
  };

  return <>
    <Accordion title='Item whitelist' contentClass='flex flex-col'>
      <div className='mx-auto mb-2'>
        <button className='btn' onClick={resetItems}>Reset</button>
        <div
          className={'inline-block ml-3' + (bootsWhitelist.length === 0 ? ' text-red-500' : '')}
          title='At least one pair of boots must be whitelisted.'
        >
          Items: {bootsWhitelist.length}
        </div>
        <div
          className={'inline-block ml-3' + (itemWhitelist.length < 5 ? ' text-red-500' : '')}
          title='At least five items must be whitelisted.'
        >
          Items: {itemWhitelist.length}
        </div>
      </div>
      <div className='grid grid-cols-6 max-w-120 sm:grid-cols-8 sm:max-w-160 lg:grid-cols-12 lg:max-w-240'>
        {bootList.map(boots => {
          return <img
            key={'item-' + boots.id}
            style={{ filter: bootsWhitelist.includes(boots.id) ? 'grayscale(0%)' : 'grayscale(100%)' }}
            onClick={() => toggleItem(bootsWhitelist, setBootsWhitelist, boots.id)}
            className='cursor-pointer'
            src={icons[boots.icon.replace(/_icon\.png$/, '')]}
          />;
        })}
        {itemList.map(item => {
          return <img
            key={'boot-' + item.id}
            style={{ filter: itemWhitelist.includes(item.id) ? 'grayscale(0%)' : 'grayscale(100%)' }}
            onClick={() => toggleItem(itemWhitelist, setItemWhitelist, item.id)}
            className='cursor-pointer'
            src={icons[item.icon.replace(/_icon\.png$/, '')]}
          />;
        })}
      </div>
    </Accordion>
    <Accordion title='Hero whitelist' contentClass='flex flex-col'>
      <div className='mx-auto mb-2'>
        <button className='btn' onClick={() => setHeroWhitelist([])}>Reset</button>
        <div
          className={'inline-block ml-3' + (heroWhitelist.length === 0 ? ' text-red-500' : '')}
          title='At least one hero must be whitelisted.'
        >
          Heroes: {heroWhitelist.length}
        </div>
      </div>
      <div className='grid grid-cols-4 max-w-120 sm:grid-cols-6 sm:max-w-160 lg:grid-cols-10 lg:max-w-240'>
        {heroList.map(hero => {
          return <img
            key={'hero-' + hero.id}
            style={{ filter: heroWhitelist.includes(hero.id) ? 'grayscale(0%)' : 'grayscale(100%)' }}
            onClick={() => toggleItem(heroWhitelist, setHeroWhitelist, hero.id)}
            className='cursor-pointer'
            src={icons[hero.icon.replace(/_icon\.png$/, '')]}
          />;
        })}
      </div>
    </Accordion>
  </>;
};

export default Whitelist;