import React, { Component } from 'react';
import axios from 'axios';
import DashboardPage from '../components/DashboardPage';
import FormCardFundTransfer from '../components/FormCardFundTransfer';
import TransferHistoryCard from '../components/TransferHistoryCard';

const FORM_CONTENT = {
  title: 'Load wallet amount',
  subtitle: 'Available bank account balance: $10,000,000',
  buttonText: 'Continue',
  placeholder: '$',
};

const FORM_CONTENT_SUCCESS = {
  title: 'Success!',
  subtitle: 'Funds loaded to wallet',
  buttonText: 'Continue',
  buttonLinkTo: '/dashboard-home',
}

class DashboardLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentTransaction: [
        {
          title: 'Loaded USD',
          institution: 'Token',
          amount: '10,000,000',
          time: 'just now',
        },
      ],
    };
  }

  loadFunds = amount => {
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
    const { recentTransaction } = this.state;
    const isTransactions = recentTransaction.length > 0;
    return (
      <DashboardPage title={'Load'}>
        <FormCardFundTransfer
          FORM_CONTENT={FORM_CONTENT}
          FORM_CONTENT_SUCCESS={FORM_CONTENT_SUCCESS}
        />
        {isTransactions && (
          <div className={'transactionsWrapper'}>
            <div className={'transactionsTitleWrapper'}>
              {'Transactions'}
            </div>
            {recentTransaction.map((transaction, index) => (
              <TransferHistoryCard
                title={transaction.title}
                institution={transaction.institution}
                amount={transaction.amount}
                time={transaction.time}
                key={index}
              />
            ))}
          </div>
        )}
      </DashboardPage>
    );
  }
}

export default DashboardLoad;
