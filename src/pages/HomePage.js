import React, { useState } from 'react';

import ItemCard from '../components/ItemCard';

import heroList from '../../data/heroes';
import bootList from '../../data/boots';
import itemList from '../../data/items';

const HomePage = () => {
  const [ build, setBuild ] = useState(null);

  const random = () => {
    let items;

    do {
      items = itemList.map(i => [Math.random(), i]).sort().map(i => i[1]).slice(0, 5);
    } while (items.some(i => i.id === 56) && Math.random() < .8);

    const hero = heroList.map(h => [Math.random(), h]).sort()[0][1];
    const boots = bootList.map(b => [Math.random(), b]).sort()[0][1];
    const price = boots.price + items.reduce((acc, i) => acc + i.price, 0);

    setBuild({ hero, boots, items, price });
  };

  return <div className='flex flex-col'>
    <h1 className='text-3xl text-dc-accent font-bold mx-auto'>Divine Courage</h1>
    <button className='mx-auto my-4 py-1 px-3 border-2 border-dc-accent active:border-dc-fg focus:outline-none bg-dc-bg-dark hover:bg-dc-accent rounded-md transition-bg ease-out duration-150' onClick={random}>Random</button>
    { build ? <div>
      <ItemCard item={ { ...build.hero } } isHero={true} />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        <ItemCard item={ { ...build.boots } } isHero={false} />
        {build.items.map(it =>
          <ItemCard key={it.id} item={ { ...it } } isHero={false} />
        )}
      </div>
      <div className='flex justify-center my-4'>Total price: {build.price}</div>
    </div> : null}
  </div>;
};

export default HomePage;
