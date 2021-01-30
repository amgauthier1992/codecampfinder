import React, { useState } from 'react';
import TokenService from '../../services/token-service';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Sidebar.css';

export default function Sidebar(props) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    TokenService.clearAuthToken()
    props.history.push('/login')
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
          <ul className='side-menu-items' onClick={showSidebar}>
            <li className='side-menu-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link className='sidebar-link' to={item.path}>
                    {item.icon}
                    <span className='sidebar-span'>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className='nav-text'><a href='#' onClick={() => logout()}><HiIcons.HiLogout /><span className='sidebar-span'>Logout</span></a></li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
