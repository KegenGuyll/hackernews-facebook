import React, { FunctionComponent } from 'react';

interface Props {
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const NavItem: FunctionComponent<Props> = ({ icon }) => {
  return (
    <li className='flex mx-2 cursor-pointer place-items-center place-content-center justify-center bg-dark-light hover:bg-dark-lighter rounded-full p-5 my-1 h-3 w-3'>
      {icon}
    </li>
  );
};

export default NavItem;
