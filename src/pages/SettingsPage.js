import React from 'react';

import Blacklist from '../components/Blacklist';
import Whitelist from '../components/Whitelist';

const SettingsPage = () => {
  return <div className='flex flex-col px-2 h-content'>
    <h1 className='h1'>Settings</h1>
    <Blacklist />
    <Whitelist />
  </div>;
};

export default SettingsPage;
