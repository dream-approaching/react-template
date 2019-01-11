import React from 'react';
import history from 'utils/history';
import { saveLocalStorage } from 'utils/utils';
import styles from './style.scss';

export default function Component() {
  const handleLogin = () => {
    console.log(123, history);
    saveLocalStorage('user', 'login');
    history.push('/');
  };

  return (
    <div onClick={handleLogin} className={styles.btn}>
      登录
    </div>
  );
}
