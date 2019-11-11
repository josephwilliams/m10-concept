import React, { Component } from 'react';
import DashboardPage from '../components/DashboardPage';

class DashboardSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentTransaction: [],
    };
  }

  render() {
    return (
      <DashboardPage title={'Send'}>
        {'dashboard send'}
      </DashboardPage>
    );
  }
}

export default DashboardSend;
