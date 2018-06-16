import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./Styles/HackerNewsListItemStyles";
import moment from 'moment'


export default class HackerNewsListItem extends Component {
  // static defaultProps = { show: true };

  //   static propTypes = {
  //     title: PropTypes.string,
  //     icon: PropTypes.string,
  //     style: PropTypes.object,
  //     show: PropTypes.bool
  //   }

  render() {
    const {url, title, comments, time, author} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.commentsNumber}>{comments}</Text>
        </View>
        <View style={styles.autherView}>
          <Text style={styles.autherText}>{author}</Text>
          <Text style={styles.timeText}>{(moment().diff(moment(time), 'days') < 7) ? moment(time).fromNow() : moment(time).format('MMMM Do YYYY')}</Text>
        </View>
        <Text style={styles.linkText}>
          {url && url.substring(0, 45)}...
        </Text>
      </View>
    );
  }
}
