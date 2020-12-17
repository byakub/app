import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import {
  selectCharacters,
  handleInitCharactersAction,
  IStoreState 
} from 'store'

import Characters from "./Characters";

const mapStateToProps = (state: IStoreState) => ({
  characters: selectCharacters(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ 
    handleInitCharactersAction
   }, dispatch);

const CharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);

export default CharactersContainer;
