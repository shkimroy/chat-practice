import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user, router: { location } } = state;
  console.log("====================================");
  console.log("user : ", user);
  console.log("====================================");
  return {
    user,
    pathname: location.pathname
  }
}

export default connect(mapStateToProps)(Container);