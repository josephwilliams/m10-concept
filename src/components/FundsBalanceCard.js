import React from 'react';
import '../styles/FundsBalanceCard.css';

export function getFundsBalanceCardDetails(transaction) {
  switch (transaction.type) {
    case 'LOAD':
      return {
        title: 'Loaded',
        circleColor: '#6d58ff',
      }
    case 'UNLOAD':
      return {
        title: 'Loaded',
        circleColor: '#cd3c3c',
      }
    default:
  }
}

const FundsBalanceCard = ({
  currencyName,
  fundsAvailable,
  mostRecentTransaction,
}) => {
  const mostRecentTransactionAmount = (mostRecentTransaction || {}).amount;
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
              {`Loaded $${mostRecentTransactionAmount}`}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FundsBalanceCard;
