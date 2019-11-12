import React, { Component } from 'react';
import axios from 'axios';
import DashboardPage from '../components/DashboardPage';

class DashboardHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  getUserData = () => {
    const userEmail = window.email;
    const userData = axios.get(`https://m10-concept-api.herokuapp.com/user/${userEmail}`);
    this.setState({ userData: userData });
  }

  render() {
    const { userData } = this.state;
    console.log('userData', userData);
    return (
      <DashboardPage title={'Dashboard'}>
      </DashboardPage>
    );
  }
}

export default DashboardHome;
