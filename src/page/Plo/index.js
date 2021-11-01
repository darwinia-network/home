import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';

import Header from './Header';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

const PloPage = () => {
  return (
    <>
      <Header />
      <Container>
        <div className={cx('main')}>
          <div className={cx('inner')}>
            PLO
          </div>
        </div>
      </Container>
    </>
  );
};

export default React.memo(PloPage);
