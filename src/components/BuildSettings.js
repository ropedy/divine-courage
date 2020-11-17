import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setItemSetting, setHeroSetting } from '../reducers/settingsReducer';

import { listValidators } from '../utils/buildUtils';

const BuildSettings = () => {
  const dispatch = useDispatch();
  const { itemSetting, heroSetting } = useSelector(({ settings }) => settings);
  const [ itemBlacklistMsg ] = useState(listValidators.itemBlacklist());
  const [ bootBlacklistMsg ] = useState(listValidators.bootBlacklist());
  const [ heroBlacklistMsg ] = useState(listValidators.heroBlacklist());
  const [ itemWhitelistMsg ] = useState(listValidators.itemWhitelist());
  const [ bootWhitelistMsg ] = useState(listValidators.bootWhitelist());
  const [ heroWhitelistMsg ] = useState(listValidators.heroWhitelist());

  useEffect(() => {
    // Reset settings in invalid states.
    const invalidItemBlacklist = (itemBlacklistMsg || bootBlacklistMsg) && itemSetting === 1;
    const invalidItemWhite = (itemWhitelistMsg || bootWhitelistMsg) && itemSetting === 2;
    const invalidHeroBlacklist = heroBlacklistMsg && heroSetting === 1;
    const invalidHeroWhite = heroWhitelistMsg && heroSetting === 2;

    if (invalidItemBlacklist || invalidItemWhite) {
      dispatch(setItemSetting(0));
    }
    if (invalidHeroBlacklist || invalidHeroWhite) {
      dispatch(setHeroSetting(0));
    }
  }, []);

  return <>
    <div className='mx-auto mb-2'>
      <button
        className={`btn relative rounded-none rounded-l border-2${itemSetting === 0 ? ' bg-dc-accent' : ''}`}
        onClick={() => dispatch(setItemSetting(0))}
      >
        All items
      </button>
      <button
        disabled={itemBlacklistMsg || bootBlacklistMsg}
        title={itemBlacklistMsg || bootBlacklistMsg}
        className={`btn relative rounded-none border-2 -ml-2px -mr-2px${itemSetting === 1 ? ' bg-dc-accent' : ''}`}
        onClick={() => dispatch(setItemSetting(1))}
      >
        Item blacklist
      </button>
      <button
        disabled={itemWhitelistMsg || bootWhitelistMsg}
        title={itemWhitelistMsg || bootWhitelistMsg}
        className={`btn relative rounded-none rounded-r border-2${itemSetting === 2 ? ' bg-dc-accent' : ''}`}
        onClick={() => dispatch(setItemSetting(2))}
      >
        Item whitelist
      </button>
    </div>
    <div className='mx-auto mb-4'>
      <button
        className={`btn relative rounded-none rounded-l border-2${heroSetting === 0 ? ' bg-dc-accent' : ''}`}
        onClick={() => dispatch(setHeroSetting(0))}
      >
        All heroes
      </button>
      <button
        disabled={heroBlacklistMsg}
        title={heroBlacklistMsg}
        className={`btn relative rounded-none border-2 -ml-2px -mr-2px${heroSetting === 1 ? ' bg-dc-accent' : ''}`}
        onClick={() => dispatch(setHeroSetting(1))}
      >
        Hero blacklist
      </button>
      <button
        disabled={heroWhitelistMsg}
        title={heroWhitelistMsg}
        className={`btn relative rounded-none rounded-r border-2${heroSetting === 2 ? ' bg-dc-accent' : ''}`}
        onClick={() => dispatch(setHeroSetting(2))}
      >
        Hero whitelist
      </button>
    </div>
  </>;
};

export default BuildSettings;
