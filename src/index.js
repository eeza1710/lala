import React, { Component } from "react";
import PropTypes from "prop-types";

// import styles from './styles.css'

export class ColoredHeadingOne extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text, color } = this.props;

    //return <div className={styles.test}>Example Component: {text}</div>;
    return <h1 style={{ color }}> {text}</h1>;
  }
}

export class ColoredHeadingTwo extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  render() {
    const { text, color } = this.props;

    //return <div className={styles.test}>Example Component: {text}</div>;
    return <h2 style={{ color }}> {text}</h2>;
  }
}
