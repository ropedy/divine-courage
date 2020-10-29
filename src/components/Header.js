import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../img/meta/logo';

const Header = () => {
  return <header className='h-16 bg-dc-blue-dark text-dc-red flex justify-center gap-4 items-center border-b border-dc-red'>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-yellow' to='/' exact>
      <Logo className='w-12 h-12 cursor-pointer' />
    </NavLink>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-yellow' to='/' exact>Main</NavLink>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-yellow' to='/settings'>Settings</NavLink>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-yellow' to='/rules'>Rules</NavLink>
    <NavLink className='nav-link' activeClassName='font-bold text-dc-yellow' to='/about'>About</NavLink>
  </header>;
};

export default Header;
