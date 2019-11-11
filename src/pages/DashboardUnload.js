import React, { Component } from 'react';
import DashboardPage from '../components/DashboardPage';

class DashboardUnload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentTransaction: [],
    };
  }

  render() {
    return (
      <DashboardPage title={'Unload'}>
        {'dashboard unload'}
      </DashboardPage>
    );
  }
}

export default DashboardUnload;
