import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  handleCharactersPageAction,
  IStoreState,
  selectCharacters,
  selectMetaCharacters,
  setCurrentPageAction
} from 'store';

import Characters from './Characters';

const mapStateToProps = (state: IStoreState) => ({
  characters: selectCharacters(state),
  metaCharacters: selectMetaCharacters(state)
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ 
    handleCharactersPageAction,
    setCurrentPageAction
  }, dispatch);

const CharactersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Characters);

export default CharactersContainer;
