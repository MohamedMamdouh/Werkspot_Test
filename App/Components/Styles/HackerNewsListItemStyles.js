import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  titleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  commentsNumber: {
    fontSize: 20,
    fontWeight: "bold"
  },
  autherView: {
    flexDirection: "row"
  },
  autherText: {
    fontSize: 15,
    marginHorizontal: 10
  },
  timeText: {
    fontSize: 15
  },
  linkText: {
    margin: 10
  }
});
