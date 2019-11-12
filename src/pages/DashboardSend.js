import React, { Component } from 'react';
import axios from 'axios';
import DashboardPage from '../components/DashboardPage';
import FormCard from '../components/FormCard';

const FORM_CONTENT = {
  title: 'Send wallet amount',
  subtitle: 'Available bank account balance: ',
  buttonText: 'Continue',
  placeholder: '$',
};

class DashboardSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentTransaction: [],
    };
  }

  transferFunds = amount => {
    const userEmail = window.email;
    const options = {
      method: 'POST',
      url: 'https://m10-concept-api.herokuapp.com/load-user-funds',
      data: {
        userEmail: userEmail,
        amount: amount,
      },
    };
    const res = axios(options);
    console.log('res', res);
  }

  render() {
    return (
      <DashboardPage title={'Send'}>
        <FormCard
          title={FORM_CONTENT.title}
          subtitle={FORM_CONTENT.subtitle}
          buttonText={FORM_CONTENT.buttonText}
          placeholder={FORM_CONTENT.placeholder}
        />
      </DashboardPage>
    );
  }
}

export default DashboardSend;
