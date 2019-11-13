import React from 'react';
import Moment from 'moment';
import withUserData from '../hoc/withUserData';
import DashboardPage from '../components/DashboardPage';
import FundsBalanceCard, {
  getFundsBalanceCardDetails,
} from '../components/FundsBalanceCard';
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
    new Moment(a.time).diff(new Moment(b.time))
  ))

  return totalTransactionsListSorted.reverse();
}

const DashboardHome = ({ userData }) => {
  const {
    fundsAvailable,
  } = userData;
  const transactionsListSortedByDate = getTotalTransactionsList(userData);
  const isTransactions = transactionsListSortedByDate.length > 0;
  const mostRecentTransaction = (
    isTransactions &&
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
            transactionsListSortedByDate.map((transaction, index) => {
              const details = getFundsBalanceCardDetails({
                transaction,
                recipient: transaction.recipientEmail,
                sender: transaction.senderEmail,
              });
              return (
                <TransferHistoryCard
                  title={`${details.title} USD`}
                  institution={transaction.institution}
                  amount={transaction.amount}
                  time={transaction.time}
                  note={details.note}
                  key={index}
                  circleColor={details.circleColor}
                />
              )
            }
          ))}
      </div>
    </DashboardPage>
  )
}

export default withUserData(DashboardHome);
