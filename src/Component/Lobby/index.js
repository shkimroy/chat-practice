import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as roomActions } from "../../redux/modules/room";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    makeNewRoom: title => {
      return dispatch(roomActions.makeNewRoom(title));
    }
  };
}

export default connect(null, mapDispatchToProps)(Container);