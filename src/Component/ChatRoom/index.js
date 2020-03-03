import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user: { userInfo } } = state;
  return {
    user: userInfo
  };
}

export default connect(mapStateToProps)(Container);