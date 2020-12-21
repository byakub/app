import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  handleInitCharactersAction,
  IStoreState,
  selectCharacters,
} from 'store';

import Main from './Main';

const mapStateToProps = (state: IStoreState) => ({
  characters: selectCharacters(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ 
    handleInitCharactersAction
  }, dispatch);

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default MainContainer;
