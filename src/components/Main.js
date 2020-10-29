import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage';
import RulesPage from '../pages/RulesPage';
import AboutPage from '../pages/AboutPage';

const Main = () => {
  return <main className='h-4 bg-dc-blue flex-1 flex justify-center py-4'>
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route path='/settings'>
        <SettingsPage />
      </Route>
      <Route path='/rules'>
        <RulesPage />
      </Route>
      <Route path='/about'>
        <AboutPage />
      </Route>
    </Switch>
  </main>;
};

export default Main;
