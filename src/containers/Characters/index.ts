import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

//import { IStoreState } from "store";

import Characters from "./Characters";

import { handleInitAction, IStoreState } from "store";

const mapStateToProps = (state: IStoreState) => state;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ handleInitAction }, dispatch);

const CharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);

export default CharactersContainer;
