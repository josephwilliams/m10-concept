import React from 'react';
import moment from 'moment';
import '../styles/TransferHistoryCard.css';

const TransferHistoryCard = ({
  title,
  institution,
  amount,
  note,
  time,
  circleColor,
}) => {
  const relTime = moment(time).fromNow();
  return (
    <div className={'transferHistoryCardWrapper'}>
      <div className={'transferHistoryCardColumnLeft'}>
        <div className={'transferHistoryCardTitle'}>
          <div
            className={'statusCircle'}
            style={{ backgroundColor: circleColor }}
          />
          {title}
        </div>
        <div className={'transferHistoryCardInstitution'}>
          {note || `Deposited funds from ${institution}`}
        </div>
      </div>
      <div className={'transferHistoryCardColumnRight'}>
        <div className={'transferHistoryCardAmount'}>
          {`${amount} USD`}
        </div>
        <div className={'transferHistoryCardTime'}>
          {relTime}
        </div>
      </div>
    </div>
  );
}

export default TransferHistoryCard;
