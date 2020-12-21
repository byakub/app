import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  handleCharacterAction,
  IStoreState,
  selectCharacter,
} from 'store';

import CharacterProfile from './CharacterProfile';

const mapStateToProps = (state: IStoreState) => ({
  character: selectCharacter(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    handleCharacterAction
  }, dispatch);

const CharacterProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterProfile);

export default CharacterProfileContainer;
