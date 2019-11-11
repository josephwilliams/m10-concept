import React, { Component } from 'react';
import DashboardPage from '../components/DashboardPage';
import FormCard from '../components/FormCard';

const FORM_CONTENT = {
  title: 'Load wallet amount',
  subtitle: 'Available bank account balance: ',
  buttonTextLeft: 'Continue',
  placeholder: '$',
};

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
        <FormCard
          title={FORM_CONTENT.title}
          subtitle={FORM_CONTENT.subtitle}
          buttonTextLeft={FORM_CONTENT.buttonTextLeft}
          placeholder={FORM_CONTENT.placeholder}
        />
      </DashboardPage>
    );
  }
}

export default DashboardLoad;
