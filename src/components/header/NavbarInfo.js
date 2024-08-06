import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

// dataene til navbar/navigasjonsbar
export const NavbarInfo =  [
    
  {
    title: 'Hjem',
    path: '/',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text'
},
{
    title: 'Lag annonse',
    path: '/employer/create',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
},
{
    title: 'Filtrer jobber',
    path: '/employee/feed',
    icon: <FaIcons.FaBuilding />,
    cName: 'nav-text'
}


];
