import React from 'react';
import Sidebar from './Sidebar'
import '../styles/DashboardPage.css'

const DashboardPage = ({ children, title }) => (
  <div className={'dashboardPageWrapper'}>
    <Sidebar />
    <div className={'dashboardPageContentWrapper'}>
      <div className={'dashboardPageTitle'}>
        {title}
      </div>
      <div className={'dashboardPageContent'}>
        {children}
      </div>
    </div>
  </div>
);

export default DashboardPage;
