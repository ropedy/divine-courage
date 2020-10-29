import React, { useState } from 'react';

import heroList from '../../data/heroes';
import bootList from '../../data/boots';
import itemList from '../../data/items';

const HomePage = () => {
  const [ build, setBuild ] = useState(null);

  const random = () => {
    const hero = heroList.map(h => [Math.random(), h]).sort()[0][1];
    const boots = bootList.map(b => [Math.random(), b]).sort()[0][1];
    const items = itemList.map(i => [Math.random(), i]).sort().map(i => i[1]).slice(0, 5);
    const price = boots.price + items.reduce((acc, i) => acc + i.price, 0);

    setBuild({ hero, boots, items, price });
  };

  return <div className='flex flex-col'>
    <h1 className='text-3xl text-dc-red font-bold flex justify-center'>Divine Courage</h1>
    <button onClick={random}>Random</button>
    { build ? <div>
      <div>Total price: {build.price}</div>
      <div>Hero: {build.hero.name}</div>
      <div>Boots: {build.boots.name}</div>
      {build.items.map((it, i) => <div key={it.id}>Item {i + 1}: {it.name}</div>)}
    </div> : null}
  </div>;
};

export default HomePage;
