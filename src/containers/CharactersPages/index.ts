import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import {
  selectCharacters,
  selectMetaCharacters,
  handleCharactersPageAction,
  IStoreState 
} from 'store'

import CharactersPages from "./CharactersPages";

const mapStateToProps = (state: IStoreState) => ({
  characters: selectCharacters(state),
  metaCharacters: selectMetaCharacters(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ 
    handleCharactersPageAction,
   }, dispatch);

const CharactersPagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersPages);

export default CharactersPagesContainer;
