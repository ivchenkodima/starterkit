/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Footer.css';
import classnames from 'classnames';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <span className={styles.text}>© Your Company</span>
          <span className={styles.spacer}>·</span>
          <Link className={styles.link} to="/">Home</Link>
          <span className={styles.spacer}>·</span>
          <Link className={styles.link} to="/admin">Admin</Link>
          <span className={styles.spacer}>·</span>
          <Link className={styles.link} to="/privacy">Privacy</Link>
          <span className={classnames(styles.spacer, styles.spacer__active)}>·</span>
          <Link className={styles.link} to="/not-found">Not Found</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
