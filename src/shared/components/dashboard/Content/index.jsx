import React, {Component} from 'react';
import {element} from 'prop-types';
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
  children: element.isRequired
};

export default Content;
