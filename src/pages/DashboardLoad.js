import React, { Component } from 'react';
import DashboardPage from '../components/DashboardPage';

class DashboardLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentTransaction: [],
    };
  }

  render() {
    return (
      <DashboardPage title={'Load'}>
        {'dashboard load'}
      </DashboardPage>
    );
  }
}

export default DashboardLoad;
