import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import icons from '../img/icons/*.png';

const App = () => {
  const [ cachingImages, setCachingImages ] = useState(true);
  const [ iconsCached, setIconsCached ] = useState(0);

  useEffect(() => {
    cacheImages();
  }, []);

  const cacheImages = async () => {
    const promises = await Object.values(icons).map(icon => {
      return new Promise((res, rej) => {
        const img = new Image();

        img.src = icon;
        img.onload = () => {
          setIconsCached(amount => amount + 1);
          res();
        };
        img.onerror =  () => {
          setIconsCached(amount => amount + 1);
          rej();
        };
      });
    });

    await Promise.all(promises);

    setCachingImages(false);
  };

  if (cachingImages) {
    return <div className='text-dc-accent text-3xl font-bold bg-dc-bg-dark h-screen grid items-center justify-center'>
      Loading {Math.round(iconsCached / Object.keys(icons).length * 100)}%
    </div>;
  }

  return <div className='text-dc-fg flex flex-col h-screen'>
    <Header />
    <Main />
    <Footer />
  </div>;
};

export default App;
