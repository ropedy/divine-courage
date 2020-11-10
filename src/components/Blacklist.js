import React, { useState } from 'react';

import Accordion from './Accordion';

import heroList from '../../data/heroes';
import bootList from '../../data/boots';
import itemList from '../../data/items';

import icons from '../../img/icons/*.png';

const Blacklist = () => {
  const [ bootsBlacklist, setBootsBlacklist ] = useState([]);
  const [ itemBlacklist, setItemBlacklist ] = useState([]);
  const [ heroBlacklist, setHeroBlacklist ] = useState([]);

  const toggleItem = (list, func, id) => {
    if (list.includes(id)) {
      func(list.filter(h => h !== id));
    }
    else {
      func([ ...list, id ]);
    }
  };

  const resetItems = () => {
    setBootsBlacklist([]);
    setItemBlacklist([]);
  };

  return <>
    <Accordion title='Item blacklist' contentClass='flex flex-col'>
      <div className='mx-auto mb-2'>
        <button className='btn' onClick={resetItems}>Reset</button>
        <div
          className={'inline-block ml-3' + (bootsBlacklist.length === bootList.length ? ' text-red-500' : '')}
          title='All boots cannot be blacklisted.'
        >
          Boots: {bootsBlacklist.length}
        </div>
        <div
          className={'inline-block ml-3' + (itemBlacklist.length > itemList.length - 5 ? ' text-red-500' : '')}
          title='At least 5 items must be not blacklisted.'
        >
          Items: {itemBlacklist.length}
        </div>
      </div>
      <div className='grid grid-cols-6 max-w-120 sm:grid-cols-8 sm:max-w-160 lg:grid-cols-12 lg:max-w-240'>
        {bootList.map(boots => {
          return <img
            key={'item-' + boots.id}
            style={{ filter: bootsBlacklist.includes(boots.id) ? 'grayscale(100%)' : 'grayscale(0%)' }}
            onClick={() => toggleItem(bootsBlacklist, setBootsBlacklist, boots.id)}
            className='cursor-pointer'
            src={icons[boots.icon.replace(/_icon\.png$/, '')]}
          />;
        })}
        {itemList.map(item => {
          return <img
            key={'boot-' + item.id}
            style={{ filter: itemBlacklist.includes(item.id) ? 'grayscale(100%)' : 'grayscale(0%)' }}
            onClick={() => toggleItem(itemBlacklist, setItemBlacklist, item.id)}
            className='cursor-pointer'
            src={icons[item.icon.replace(/_icon\.png$/, '')]}
          />;
        })}
      </div>
    </Accordion>
    <Accordion title='Hero blacklist' contentClass='flex flex-col'>
      <div className='mx-auto mb-2'>
        <button className='btn' onClick={() => setHeroBlacklist([])}>Reset</button>
        <div
          className={'inline-block ml-3' + (heroBlacklist.length === heroList.length ? ' text-red-500' : '')}
          title='All heroes cannot be blacklisted.'
        >
          Heroes: {heroBlacklist.length}
        </div>
      </div>
      <div className='grid grid-cols-4 max-w-120 sm:grid-cols-6 sm:max-w-160 lg:grid-cols-10 lg:max-w-240'>
        {heroList.map(hero => {
          return <img
            key={'hero-' + hero.id}
            style={{ filter: heroBlacklist.includes(hero.id) ? 'grayscale(100%)' : 'grayscale(0%)' }}
            onClick={() => toggleItem(heroBlacklist, setHeroBlacklist, hero.id)}
            className='cursor-pointer'
            src={icons[hero.icon.replace(/_icon\.png$/, '')]}
          />;
        })}
      </div>
    </Accordion>
  </>;
};

export default Blacklist;
