import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import {
  selectCharacters
} from 'store'

import Characters from "./Characters";

import { 
  handleInitCharactersAction, 
  handleCharactersPageAction,
  IStoreState 
} from "store";

const mapStateToProps = (state: IStoreState) => ({
  characters: selectCharacters(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ 
    handleInitCharactersAction,
    handleCharactersPageAction
   }, dispatch);

const CharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);

export default CharactersContainer;
