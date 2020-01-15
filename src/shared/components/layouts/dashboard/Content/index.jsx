import React, {Component} from 'react';
import propTypes from '@propTypes';
//Styles
import styles from './Content.scss';

class Content extends Component {
  render() {
    const {children} = this.props;

    return (
      <section className={styles.content}>
        {children}
      </section>
    );
  }
}

Content.propTypes = {
  children: propTypes.children.isRequired
};

export default Content;
