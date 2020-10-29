import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../img/meta/logo';

const Header = () => {
  return <header className='h-16 text-lg bg-dc-bg-dark text-dc-accent flex justify-center gap-6 items-center border-b border-dc-accent'>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-fg' to='/' exact>
      <Logo className='w-12 h-12 cursor-pointer' />
    </NavLink>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-fg' to='/' exact>Main</NavLink>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-fg' to='/settings'>Settings</NavLink>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-fg' to='/rules'>Rules</NavLink>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-fg' to='/about'>About</NavLink>
  </header>;
};

export default Header;
