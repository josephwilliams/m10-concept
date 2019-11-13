import React, { Component } from 'react';
import axios from 'axios';
import withUserData from '../hoc/withUserData'
import DashboardPage from '../components/DashboardPage';
import FormCardFundTransfer from '../components/FormCardFundTransfer';
import TransferHistoryCard from '../components/TransferHistoryCard';

class DashboardLoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextAmount: '',
      inputTextRecipient: '',
      userData: {},
      completedFundTransfer: false,
    };
  }

  componentDidMount() {
    this.setState({ completedFundTransfer: false });
  }

  updateInputAmount = e => {
    this.setState({ inputTextAmount: e.target.value });
  }

  updateInputRecipient = e => {
    this.setState({ inputTextRecipient: e.target.value });
  }

  sendFunds = async () => {
    const { inputTextAmount, inputTextRecipient } = this.state;
    const userEmail = window.email;
    const userInstitution = window.institution;
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/send-funds',
      data: {
        userEmail: userEmail,
        recipientEmail: inputTextRecipient,
        userInstitution: userInstitution,
        amount: inputTextAmount,
      },
    };
    await axios(options);
    this.setState({ completedFundTransfer: true });
  }

  render() {
    const { userData } = this.props;
    const { fundsSent, fundsAvailable } = userData;
    const fundsSentArr = fundsSent ? JSON.parse(fundsSent) : [];
    const { inputTextAmount, inputTextRecipient, completedFundTransfer } = this.state;
    const isTransactions = fundsSentArr.length > 0;

    // start flow form content
    const FORM_CONTENT = {
      title: 'Send wallet amount',
      subtitle: `Available bank account balance: $${fundsAvailable || ''}`,
      formLabel: 'Amount USD',
      buttonText: 'Continue',
      onInputChange: this.updateInputAmount,
      onRecipientInputChange: this.updateInputRecipient,
      buttonOnClick: this.sendFunds,
      inputTextAmount: inputTextAmount,
      placeholder: '$',
    };

    // finish flow form content
    const FORM_CONTENT_SUCCESS = {
      title: 'Success!',
      subtitle: `$${inputTextAmount} sent to ${inputTextRecipient}.`,
      buttonText: 'Continue',
      buttonLinkTo: '/dashboard-home',
    }

    return (
      <DashboardPage title={'Send'}>
        <FormCardFundTransfer
          FORM_CONTENT={FORM_CONTENT}
          FORM_CONTENT_SUCCESS={FORM_CONTENT_SUCCESS}
          isComplete={completedFundTransfer}
        />
        <div className={'transactionsWrapper'}>
          <div className={'transactionsTitleWrapper'}>
            {'Transactions'}
          </div>
          {!isTransactions
            ? (
              <div className={'noTransactions'}>
                {'You have no past transactions.'}
              </div>
            ) : (
              fundsSentArr.map((transaction, index) => (
                <TransferHistoryCard
                  title={'Sent USD'}
                  institution={transaction.institution}
                  amount={transaction.amount}
                  time={transaction.time}
                  key={index}
                  circleColor={'#66bf5d'}
                />
              ))
            )}
        </div>
      </DashboardPage>
    );
  }
}

export default withUserData(DashboardLoad);
