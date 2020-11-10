import React from 'react';

import ItemCard from '../components/ItemCard';

const Build = ({ build, old, location, buildToString }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(buildToString(build));
  };

  const props = {
    style: {
      transform: `translate(${location}vw, ${old ? '-100%' : '0'})`
    },
    className: 'transition-transform ease-out duration-1000'
  };

  return build.hero ? <div {...props}>
    <ItemCard item={ { ...build.hero } } isHero={true} />
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2'>
      <ItemCard item={ { ...build.boots } } isHero={false} />
      {build.items.map(it =>
        <ItemCard key={it.id} item={ { ...it } } isHero={false} />
      )}
    </div>
    <div className='flex justify-center items-center my-4'>
      <span>Total cost: {build.price}</span>
      <button className='m-0 ml-2 btn' onClick={copyToClipboard} title='Copy build to clipboard'>Copy</button>
    </div>
  </div> : <div {...props} />;
};

export default Build;
