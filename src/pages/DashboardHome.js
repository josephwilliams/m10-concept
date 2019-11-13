import React from 'react';
import Moment from 'moment';
import withUserData from '../hoc/withUserData';
import DashboardPage from '../components/DashboardPage';
import FundsBalanceCard from '../components/FundsBalanceCard';
import TransferHistoryCard from '../components/TransferHistoryCard';

function getTotalTransactionsList(userData) {
  const {
    fundsUnloaded,
    fundsLoaded,
    fundsSent,
    fundsReceived,
  } = userData;
  const fundsLoadedArr = fundsLoaded ? JSON.parse(fundsLoaded) : [];
  const fundsUnloadedArr = fundsUnloaded ? JSON.parse(fundsUnloaded) : [];
  const fundsSentArr = fundsSent ? JSON.parse(fundsSent) : [];
  const fundsReceivedArr = fundsReceived ? JSON.parse(fundsReceived) : [];

  const totalTransactionsList = [
    ...fundsUnloadedArr,
    ...fundsLoadedArr,
    ...fundsSentArr,
    ...fundsReceivedArr,
  ];

  const totalTransactionsListSorted = totalTransactionsList.sort((a,b) => (
    new Moment(a.time).format('MMMM Do YYYY, h:mm:ss a') -
    new Moment(b.time).format('MMMM Do YYYY, h:mm:ss a')
  ))

  return totalTransactionsListSorted;
}

const DashboardHome = ({ userData }) => {
  const {
    fundsAvailable,
  } = userData;
  const transactionsListSortedByDate = getTotalTransactionsList(userData);
  console.log('> transactionsListSortedByDate', transactionsListSortedByDate);
  const isTransactions = transactionsListSortedByDate.length > 0;
  const mostRecentTransaction = (
    transactionsListSortedByDate.length > 0 &&
    transactionsListSortedByDate[0]
  )
  return (
    <DashboardPage title={'Dashboard'}>
      <FundsBalanceCard
        currencyName={'USD'}
        fundsAvailable={fundsAvailable}
        mostRecentTransaction={mostRecentTransaction}
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
            transactionsListSortedByDate.map((transaction, index) => (
              <TransferHistoryCard
                title={'Unloaded USD'}
                institution={transaction.institution}
                amount={transaction.amount}
                time={transaction.time}
                key={index}
                circleColor={'#6d58ff'}
              />
            ))
          )}
      </div>
    </DashboardPage>
  )
}

export default withUserData(DashboardHome);
