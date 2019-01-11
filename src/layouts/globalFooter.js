import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './layout.scss';

export default function GlobalFooter() {
  const activeStyle = { fontWeight: 'bold', color: '#c77a37' };
  return (
    <div className={styles.globalFooter}>
      <NavLink exact activeStyle={activeStyle} to="/">
        Home
      </NavLink>
      <NavLink exact activeStyle={activeStyle} to="/news">
        News
      </NavLink>
    </div>
  );
}
