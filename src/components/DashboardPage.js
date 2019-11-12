import React from 'react';
import Sidebar from './Sidebar'
import '../styles/DashboardPage.css'

const DashboardPage = ({
  title, children
}) => (
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
