import React, { FunctionComponent } from 'react';
import NavItem from './NavItem';
import NavList from './NavList';

const Navigation: FunctionComponent = () => {
  return (
    <nav className='w-full p-1 text-white bg-dark-default sticky top-0 z-50 border-b-1 border-dark-lighter'>
      <NavList>
        <NavItem icon='🧐' />
        <NavItem icon='🧐' />
        <NavItem icon='🧐' />
        <NavItem icon='🧐' />
      </NavList>
    </nav>
  );
};

export default Navigation;
