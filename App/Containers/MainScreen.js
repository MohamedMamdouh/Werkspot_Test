import React, { Component } from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from "react-native";
import { connect } from "react-redux";
import StoriesActions from "../Redux/StoriesRedux";
import HackerNewsListItem from "../Components/HackerNewsListItem";

// Styles
import styles from "./Styles/MainScreenStyles";

//ToDos
// Code indentation and commenting
// Optmize component life cycle and flat list

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      storiesInitialData: []
    };
  }

  _renderItem = ({ item: { by, time, descendants, url, title } }) => (
    <HackerNewsListItem
      author={by}
      time={time}
      comments={descendants}
      url={url}
      title={title}
    />
  );

  _keyExtractor = (item, index) => item.id;

  //Load more to prefetch date before the end of list beside load more
  _handleLoadMore = () => {
    if (!this.props.fetching) {
      let page = this.state.page + 1;
      this.setState({
        page
      });
      this.props.storiesRequest(page);
    }
  };

  componentWillMount() {
    this.props.storiesRequest(this.state.page);
  }

  componentWillReceiveProps(nextProps) {
    let { stories, fetching } = nextProps;
    if (!fetching && this.props.stories !== stories) {
      stories.length > 0
        ? this.setState({
            storiesInitialData: [...this.state.storiesInitialData, ...stories]
          })
        : null;
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={this.state.storiesInitialData}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          onEndReached={this._handleLoadMore}
        />
      </View>
    );
  }
}

//Map stories Request function to props
const mapDispatchToProps = dispatch => ({
  storiesRequest: _page => dispatch(StoriesActions.storiesRequest(_page))
});

//Get stories Data and fetching state from redux store state
const mapStateToProps = ({ stories: { stories } }) => {
  return {
    stories
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen);
