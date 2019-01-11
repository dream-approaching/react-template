import React from 'react';
import history from 'utils/history';
import { clearLocalStorage } from 'utils/utils';
import styles from './layout.scss';

export default function GlobalHeader() {
  const handleQuit = () => {
    clearLocalStorage();
    history.push('/login');
  };
  return (
    <div onClick={handleQuit} className={styles.globalHeader}>
      退出登录
    </div>
  );
}
