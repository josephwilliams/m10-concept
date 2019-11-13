import React, { Component } from 'react';
import axios from 'axios';
import withUserData from '../hoc/withUserData'
import DashboardPage from '../components/DashboardPage';
import FormCardFundTransfer from '../components/FormCardFundTransfer';
import TransferHistoryCard from '../components/TransferHistoryCard';

class DashboardUnload extends Component {
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
      url: 'http://localhost:3000/unload-funds',
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
    const { fundsUnloaded, fundsAvailable } = userData;
    const fundsUnloadedArr = fundsUnloaded ? JSON.parse(fundsUnloaded) : [];
    const { inputTextAmount, completedFundTransfer } = this.state;
    const isTransactions = fundsUnloadedArr.length > 0;

    // start flow form content
    const FORM_CONTENT = {
      title: 'Unload wallet amount',
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
      subtitle: 'Funds unloaded.',
      buttonText: 'Continue',
      buttonLinkTo: '/dashboard-home',
    }

    return (
      <DashboardPage title={'Unload'}>
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
              fundsUnloadedArr.map((transaction, index) => (
                <TransferHistoryCard
                  title={'Unloaded USD'}
                  institution={transaction.institution}
                  amount={transaction.amount}
                  time={transaction.time}
                  key={index}
                  circleColor={'#cd3c3c'}
                />
              ))
            )}
        </div>
      </DashboardPage>
    );
  }
}

export default withUserData(DashboardUnload);
