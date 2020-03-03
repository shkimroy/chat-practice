import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user, router: { location } } = state;
  return {
    user,
    pathname: location.pathname
  }
}

export default connect(mapStateToProps)(Container);