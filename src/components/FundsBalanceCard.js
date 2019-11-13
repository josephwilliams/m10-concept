import React from 'react';
import '../styles/FundsBalanceCard.css';

export function getFundsBalanceCardDetails(transaction) {
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
          {'$'}{fundsAvailable}
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
