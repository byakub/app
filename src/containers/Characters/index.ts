import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

//import { IStoreState } from "store";

import Characters from "./Characters";

const mapStateToProps = (state: any) => state;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

const CharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);

export default CharactersContainer;
