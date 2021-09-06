import React, { FunctionComponent } from 'react';

const NavList: FunctionComponent = ({ children }) => {
  return <ul className='flex flex-row justify-end'>{children}</ul>;
};

export default NavList;
