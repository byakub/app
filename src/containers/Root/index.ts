import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Root from "./Root";

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

const RootContainer = connect(mapStateToProps, mapDispatchToProps)(Root);

export default RootContainer;
