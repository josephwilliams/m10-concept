import React, { Component } from 'react';
import DashboardPage from '../components/DashboardPage';

class DashboardHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentTransaction: [],
    };
  }

  render() {
    return (
      <DashboardPage title={'Dashboard'}>
        {'dashboard home'}
      </DashboardPage>
    );
  }
}

export default DashboardHome;
