import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { IStoreState } from "store";

import Root from "./Root";

const mapStateToProps = (state: IStoreState) => state;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export const App = connect(mapStateToProps, mapDispatchToProps)(Root);
