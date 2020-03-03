import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  return {
    user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLogin: username => {
      dispatch(userActions.userLogin(username));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);