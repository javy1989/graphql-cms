//Dependencies
import React, {PureComponent} from "react";

//Styles
import styles from './Header.scss'

class Header extends PureComponent {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <h1>Tame EP</h1>
          </div>

          <div className={styles.userProfile}>
            <div className={styles.avatar}>
              <img src="/images/avatar.png" alt="Ricardo Bravo"/>
            </div>
            <div className={styles.name}>
              Ricardo Bravo
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
