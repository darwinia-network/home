import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

import what from './img/what.png';
import contribute from './img/contribute.png';
import timeline from './img/timeline.png';

const cx = classNames.bind(styles);

const Card = ({ icon, title, describe }) => {
  return (
    <div className={cx('card-main')}>
      <img alt='...' src={icon} className={cx('card-main-icon')} />
      <h5 className={cx('card-main-title')}>{title}</h5>
      <p className={cx('card-main-desc')}>{describe}</p>
    </div>
  );
};

const Crowloan = () => {
  const cardData = [
    {
      icon: what,
      title: 'What is Crowdloan？',
      describe: 'Understand Polkadot Parachain Auction and Darwinia Crowdloan.',
    },
    {
      icon: contribute,
      title: 'Contribute to Darwinia Crowdloan',
      describe: 'Unlock 200,000,000 RING and 8,000 KTON bonus, also BTC and Metaverse limited edition commemorative NFT waiting for you.',
    },
    {
      icon: timeline,
      title: 'Timeline',
      describe: 'Keep up-to-date with the Darwinia Network’s PLO plan.',
    },
  ];

  return (
    <Container>
      <div className={cx('main')}>
        {cardData.map((data, index) => (
          <Card key={index} icon={data.icon} title={data.title} describe={data.describe} />
        ))}
      </div>
    </Container>
  );
};

export default React.memo(Crowloan);
