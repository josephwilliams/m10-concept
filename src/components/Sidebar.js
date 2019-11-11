import React from 'react';
import {
  Link,
} from 'react-router-dom';
import TokenLogo from '../assets/tokenx-logo.svg';
import IconArrowInactive from '../assets/icon-arrow-inactive.svg';
import IconSettingInactive from '../assets/icon-setting-gear-inactive.svg';
import IconDashboardInactive from '../assets/icon-dashboard-inactive.svg';

import './Sidebar.css';

const sidebarLinks = [
  {
    title: 'Dashboard',
    linkTo: '/dashboard-home',
    icon: IconDashboardInactive,
  },
  {
    title: 'Load',
    linkTo: '/dashboard-load',
    icon: IconArrowInactive,
  },
  {
    title: 'Unload',
    linkTo: '/dashboard-unload',
    icon: IconArrowInactive,
    customIconStyle: {
      transform: 'rotate(180deg)',
    },
  },
  {
    title: 'Send',
    linkTo: '/dashboard-send',
    icon: IconArrowInactive,
    customIconStyle: {
      transform: 'rotate(270deg)',
    },
  },
  {
    title: 'Settings',
    linkTo: '/dashboard-settings',
    icon: IconSettingInactive,
  },
];

const Sidebar = () => {
  return (
    <div className={'sidebarWrapper'}>
      <div className={'sidebarIconImageWrapper'}>
        <img
         src={TokenLogo}
         alt={'Token'}
         style={{ width: 150 }}
        />
      </div>
      {sidebarLinks.map(sidebarLink => {
        const { title, linkTo, icon, customIconStyle } = sidebarLink;
        return (
          <Link to={linkTo} className={'sidebarLink'}>
            <img
              src={icon}
              alt={title}
              style={{
                width: 24,
                marginRight: '20px',
                ...customIconStyle,
              }}
            />
            {title}
          </Link>
        )
      })}
    </div>
  );
}

export default Sidebar;
