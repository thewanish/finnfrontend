import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaBriefcase } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";

// dataene til navbar/navigasjonsbar
export const NavbarInfo =  [
    
  {
    title: 'Hjem',
    path: '/',
    icon: <AiFillHome />,
    cName: 'nav-text'
},
{
    title: 'Ny annonse',
    path: '/employer/create',
    icon: <FaCirclePlus />,
    cName: 'nav-text'
},
{
    title: 'Søk jobber',
    path: '/employee/feed',
    icon: <FaBriefcase />,
    cName: 'nav-text'
}


];
