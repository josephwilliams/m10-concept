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

  loadFunds = async () => {
    const { inputTextAmount } = this.state;
    const userEmail = window.email;
    const userInstitution = window.institution;
    const options = {
      method: 'POST',
      url: 'http://localhost:3000/upload-funds',
      data: {
        userEmail: userEmail,
        userInstitution: userInstitution,
        amount: inputTextAmount,
      },
    };
    await axios(options);
    this.setState({ completedFundTransfer: true });
  }

  render() {
    const { userData } = this.props;
    const { fundsUploaded, fundsAvailable } = userData;
    const fundsUploadedArr = fundsUploaded ? JSON.parse(fundsUploaded) : [];
    const { inputTextAmount, completedFundTransfer } = this.state;
    const isTransactions = fundsUploadedArr.length > 0;

    // start flow form content
    const FORM_CONTENT = {
      title: 'Load wallet amount',
      subtitle: `Available bank account balance: $${fundsAvailable}`,
      formLabel: 'Amount USD',
      buttonText: 'Continue',
      onInputChange: this.updateInputAmount,
      buttonOnClick: this.loadFunds,
      inputTextAmount: inputTextAmount,
      placeholder: '$',
    };

    // finish flow form content
    const FORM_CONTENT_SUCCESS = {
      title: 'Success!',
      subtitle: 'Funds loaded to wallet.',
      buttonText: 'Continue',
      buttonLinkTo: '/dashboard-home',
    }

    return (
      <DashboardPage title={'Load'}>
        <FormCardFundTransfer
          FORM_CONTENT={FORM_CONTENT}
          FORM_CONTENT_SUCCESS={FORM_CONTENT_SUCCESS}
          isComplete={completedFundTransfer}
        />
        {isTransactions && (
          <div className={'transactionsWrapper'}>
            <div className={'transactionsTitleWrapper'}>
              {'Transactions'}
            </div>
            {fundsUploadedArr.map((transaction, index) => (
              <TransferHistoryCard
                title={'Loaded USD'}
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

export default withUserData(DashboardLoad);
