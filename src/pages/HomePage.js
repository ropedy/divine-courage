import React, { useEffect, useRef, useState } from 'react';

import ItemCard from '../components/ItemCard';

import heroList from '../../data/heroes';
import bootList from '../../data/boots';
import itemList from '../../data/items';

const cdSec = 300;

const HomePage = () => {
  const [ build, setBuild ] = useState(null);
  const [ randomDisabled, setRandomDisabled] = useState(false);
  const [ cooldown, setCooldown ] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const cooldownActive = localStorage.lastRandom && +localStorage.lastRandom + 300 * 1000 > Date.now();

    if (cooldownActive) {
      setRandomDisabled(true);
      setCooldown(Math.ceil((+localStorage.lastRandom - Date.now()) / 1000 + cdSec));
    }

    if (localStorage.build) {
      setBuild(JSON.parse(localStorage.build));
    }
  }, []);

  useEffect(() => {
    if (randomDisabled) {
      intervalRef.current = setInterval(() => {
        setCooldown(cd => cd - 1);
      }, 1000);
    }
  }, [randomDisabled]);

  useEffect(() => {
    if (cooldown && cooldown < 0) {
      clearInterval(intervalRef.current);
      setRandomDisabled(false);
      setCooldown(null);
    }
  }, [cooldown]);

  const random = () => {
    let items;

    do {
      items = itemList.map(i => [Math.random(), i]).sort().map(i => i[1]).slice(0, 5);
    } while (items.some(i => i.id === 56) && Math.random() < .8);

    const hero = heroList.map(h => [Math.random(), h]).sort()[0][1];
    const boots = bootList.map(b => [Math.random(), b]).sort()[0][1];
    const price = boots.price + items.reduce((acc, i) => acc + i.price, 0);

    setBuild({ hero, boots, items, price });

    localStorage.build = JSON.stringify({ hero, boots, items, price });
    localStorage.lastRandom = Date.now();
    setRandomDisabled(true);
    setCooldown(cdSec);
  };

  return <div className='flex flex-col'>
    <h1 className='text-3xl text-dc-accent font-bold mx-auto'>Divine Courage</h1>
    <p className='mx-auto p-2 max-w-120 text-justify'>
      Divine Courage is random build generator for Dota 2. Press the button below to get started. Learn more from rules and about pages.
    </p>
    <button
      disabled={randomDisabled}
      className='mx-auto my-4 py-1 px-3 border-2 border-dc-accent active:border-dc-fg focus:outline-none bg-dc-bg-dark hover:bg-dc-accent rounded-md disabled:border-dc-bg-dark disabled:bg-dc-bg disabled:cursor-not-allowed transition-bg ease-out duration-150'
      onClick={random}
    >
      { randomDisabled ? 'Cooldown ' + cooldown : 'Generate' }
    </button>
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
