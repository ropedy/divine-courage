import React, { useState } from 'react';

import twConfig from '../../tailwind.config';

const Logo = props => {
  const [ color, setColor ] = useState(twConfig.theme.extend.colors['dc-accent']);

  const onEnter = () => {
    setColor(twConfig.theme.extend.colors['dc-fg']);
  };

  const onLeave = () => {
    setColor(twConfig.theme.extend.colors['dc-accent']);
  };

  return <svg
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
    viewBox='0 0 105.833 105.833'
    height='1em'
    width='1em'
    { ...props }>
    <rect
      ry={21.167}
      rx={21.167}
      height={105.833}
      width={105.833}
      fill={twConfig.theme.extend.colors['dc-bg']}
    />
    <g fill={color} className='transition ease-out duration-100'>
      <path d='M10.583 13.537v52.406a22.84 22.84 0 002.824 3.5c2.483 2.59 5.61 4.54 8.99 5.734V26.5a27.566 27.566 0 017.877-1.15c15.224 0 27.565 12.343 27.565 27.567 0 4.113-.92 8.174-2.694 11.885.291.508.602 1.005.939 1.487 2 2.952 4.71 5.387 7.801 7.145a39.38 39.38 0 005.768-20.517c0-21.75-17.631-39.38-39.38-39.38zm0 58.671v20.088h19.69a39.38 39.38 0 0019.072-4.926 44.407 44.407 0 01-8.734-8.9 27.566 27.566 0 01-10.337 2.012 27.566 27.566 0 01-19.69-8.274z' />
      <path d='M75.519 13.537a39.38 39.38 0 00-19.03 4.926c3.32 2.53 6.282 5.53 8.749 8.894a27.566 27.566 0 0110.317-2.006 27.566 27.566 0 01.005 0 27.566 27.566 0 0119.69 8.274V18.813a39.38 39.38 0 00-19.69-5.276 39.38 39.38 0 00-.041 0zm-33.56 18.845a39.38 39.38 0 00-5.778 20.535 39.38 39.38 0 0039.38 39.38A39.38 39.38 0 0095.25 87.02V72.208a27.566 27.566 0 01-19.69 8.274 27.566 27.566 0 01-27.566-27.565 27.566 27.566 0 012.69-11.876 23.725 23.725 0 00-5.07-6.097 22.957 22.957 0 00-3.655-2.562z' />
    </g>
  </svg>;
};

export default Logo;
