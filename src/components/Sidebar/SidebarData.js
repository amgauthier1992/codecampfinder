import React from 'react';
import * as BiIcons from 'react-icons/bi';
import * as HiIcons from 'react-icons/hi';
// import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <HiIcons.HiViewGrid />,
    cName: 'nav-text top-link', 
  },
  {
    title: 'Find Courses',
    path: '/search',
    icon: <BiIcons.BiCodeBlock />,
    cName: 'nav-text',
  },
  // {
  //   title: 'Settings',
  //   path: '/settings',
  //   icon: <FcIcons.FcSettings />,
  //   cName: 'nav-text',
  // },
];

