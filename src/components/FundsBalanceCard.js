import React from 'react';
import '../styles/FundsBalanceCard.css';

export function getFundsBalanceCardDetails({ transaction, sender, recipient }) {
  switch (transaction.type) {
    case 'LOAD':
      return {
        title: 'Loaded',
        circleColor: '#6d58ff',
      }
    case 'UNLOAD':
      return {
        title: 'Unloaded',
        circleColor: '#cd3c3c',
      }
    case 'SEND':
      return {
        title: 'Sent',
        note: `Sent funds to ${recipient}`,
        circleColor: '#66bf5d',
      }
    case 'RECEIVE':
      return {
        title: 'Received',
        note: `Received funds from ${sender}`,
        circleColor: '#46ebf4',
      }
    default:
      return {
        title: 'Transfered',
        circleColor: '#66bf5d',
      }
  }
}

const FundsBalanceCard = ({
  currencyName,
  fundsAvailable,
  mostRecentTransaction,
}) => {
  const mostRecentTransactionAmount = (mostRecentTransaction || {}).amount;
  const mostRecentTransactionDetails = (
    getFundsBalanceCardDetails({ transaction: mostRecentTransaction })
  );
  return (
    <div className={'fundsBalanceCardWrapper'}>
      <div className={'cardContentTitles'}>
        <div className={'cardCurrencyName'}>
          {currencyName}
        </div>
        <div className={'cardFundsAvailable'}>
          {'$'}{fundsAvailable || '0'}
        </div>
        <div className={'cardFundsDivider'} />
        {mostRecentTransaction && (
          <>
            <div className={'cardCurrencyLastTransactionTitle'}>
              {'Last Transaction'}
            </div>
            <div className={'cardMostRecentTransaction'}>
              {`${mostRecentTransactionDetails.title} $${mostRecentTransactionAmount}`}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FundsBalanceCard;
