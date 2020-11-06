import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setBuild, setOldBuild } from '../reducers/buildReducer';

import Build from '../components/Build';

import { getId } from '../utils/jsUtils';

import heroList from '../../data/heroes';
import bootList from '../../data/boots';
import itemList from '../../data/items';

const cdSec = 300;

const HomePage = () => {
  const dispatch = useDispatch();
  const { build, oldBuild } = useSelector(({ build }) => build);
  const [ randomDisabled, setRandomDisabled] = useState(false);
  const [ cooldown, setCooldown ] = useState(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const cooldownActive = localStorage.lastRandom && +localStorage.lastRandom + 300 * 1000 > Date.now();

    if (cooldownActive) {
      setRandomDisabled(true);
      setCooldown(Math.ceil((+localStorage.lastRandom - Date.now()) / 1000 + cdSec));
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

  useEffect(() => {
    if (build.location === -150 && build.hero) {
      dispatch(setBuild({ ...build, location: 0 }));
    }
  }, [build]);

  useEffect(() => {
    if (oldBuild.location === 0) {
      dispatch(setOldBuild({ ...oldBuild, location: 150 }));
    }
  }, [oldBuild]);

  const buildToString = b => {
    const hero = `${b.hero.name} with `;
    const boots = `${b.boots.name}, `;
    const items = `${b.items.map(i => i.name).join(', ')}. `.replace(/,(?!.*,)/, ' and');
    const cost = `Total cost: ${b.price}.`;

    return hero + boots + items + cost;
  };

  const random = () => {
    if (randomDisabled) {
      return;
    }

    let items;

    do {
      items = itemList.map(i => [Math.random(), i]).sort().map(i => i[1]).slice(0, 5);
    } while (items.some(i => i.id === 56) && Math.random() < .8);

    const hero = heroList.map(h => [Math.random(), h]).sort()[0][1];
    const boots = bootList.map(b => [Math.random(), b]).sort()[0][1];
    const price = boots.price + items.reduce((acc, i) => acc + i.price, 0);

    const randBuild = build.hero ?
      { hero, boots, items, price, id: getId(), location: -150 } :
      { ...build, hero, boots, items, price };
    const { id, location, ...strippedBuild } = randBuild; // eslint-disable-line

    dispatch(setBuild(randBuild));
    localStorage.build = JSON.stringify(strippedBuild);

    if (build.hero) {
      const oldRandBuild = { ...build, id: getId(), location: 0 };
      const { id, location, ...strippedOldBuild } = oldRandBuild; // eslint-disable-line

      dispatch(setOldBuild(oldRandBuild));
      localStorage.oldBuild = JSON.stringify(strippedOldBuild);
    }

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
      className='btn mx-auto my-4'
      onClick={random}
      title={randomDisabled ? 'Generator on cooldown' : 'Generate a build'}
    >
      { randomDisabled ? 'Cooldown ' + cooldown : 'Generate' }
    </button>
    <Build key={build.id} old={false} build={build} location={build.location} buildToString={buildToString} />
    <Build key={oldBuild.id} old={true} build={oldBuild} location={oldBuild.location} buildToString={buildToString} />
    {oldBuild.hero ? <>
      <h2 style={{ marginTop: '-16rem' }} className='text-1xl text-dc-accent font-bold mx-auto'>Previous build</h2>
      <div className='mx-auto p-2 max-w-120 text-justify'>
        {buildToString(oldBuild)}
      </div>
    </> : null}
  </div>;
};

export default HomePage;
