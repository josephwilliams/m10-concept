import React from 'react';
import {
  Link,
} from 'react-router-dom';
import lodashGet from 'lodash/get';
import classnames from 'classnames';
import TokenLogo from '../assets/tokenx-logo.svg';
import IconArrowInactive from '../assets/icon-arrow-inactive.svg';
import IconSettingInactive from '../assets/icon-setting-gear-inactive.svg';
import IconDashboardInactive from '../assets/icon-dashboard-inactive.svg';
import '../styles/Sidebar.css';

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
  const relUrl = lodashGet(window, 'location.pathname');
  return (
    <div className={'sidebarWrapper'}>
      <Link to={'/'}>
        <div className={'sidebarIconImageWrapper'}>
          <img
           src={TokenLogo}
           alt={'Token'}
           style={{ width: 150 }}
          />
        </div>
      </Link>
      {sidebarLinks.map(sidebarLink => {
        const { title, linkTo, icon, customIconStyle } = sidebarLink;
        const isCurrentPath = relUrl === linkTo
        return (
          <Link
            className={classnames(
              'sidebarLink',
              isCurrentPath && 'sidebarLinkCurrent',
            )}
            to={linkTo}
            key={title}
          >
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
