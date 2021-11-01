import React, { useState } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
import { Input } from 'antd';

import darwiniaIcon from './img/darwinia.png';
import twitterIcon from './img/twitter.png';
import mediumIcon from './img/medium.png';
import telegramIcon from './img/telegram.png';
import discordIcon from './img/discord.png';

const cx = classNames.bind(styles);

const Waitlist = () => {
  const [, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      <div className={cx('main')}>
        <img alt='...' src={darwiniaIcon} className={cx('darwinia-icon')} />
        <div className={cx('right-part')}>
          <h3 className={cx('join-the-waitlist')}>Join the waitlist</h3>
          <p className={cx('desc-join')}>Get alerted when our auction is about to start & receive emails for important updates and events.</p>
          <div className={cx('input-wrap')}>
            <Input
              placeholder='Enter your email'
              onChange={handleChange}
              className={cx('input-email')}
            />
            <button className={cx('join-btn')}>
              <span>Join</span>
            </button>
          </div>
          <p className={cx('desc-input')}>By submitting your email, you are consenting to receive future emails from Darwinia Network.</p>
          <div className={cx('contact-list')}>
            <img alt='...' className={cx('contact-icon')} src={twitterIcon} />
            <img alt='...' className={cx('contact-icon')} src={mediumIcon} />
            <img alt='...' className={cx('contact-icon')} src={telegramIcon} />
            <img alt='...' className={cx('contact-icon')} src={discordIcon} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Waitlist);
