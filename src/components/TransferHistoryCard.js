import React from 'react';
import moment from 'moment';
import '../styles/TransferHistoryCard.css';

const TransferHistoryCard = ({
  title,
  institution,
  amount,
  time,
}) => (
  <div className={'transferHistoryCardWrapper'}>
    <div className={'transferHistoryCardColumnLeft'}>
      <div className={'transferHistoryCardTitle'}>
        {title}
      </div>
      <div className={'transferHistoryCardInstitution'}>
        {`Deposited funds from ${institution}`}
      </div>
    </div>
    <div className={'transferHistoryCardColumnRight'}>
      <div className={'transferHistoryCardAmount'}>
        {`${amount} USD`}
      </div>
      <div className={'transferHistoryCardTime'}>
        {time}
      </div>
    </div>
  </div>
);

export default TransferHistoryCard;
