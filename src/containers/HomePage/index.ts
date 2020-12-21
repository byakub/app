import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  handleInitCharactersAction,
  IStoreState,
  mainCharactersSelector,
} from 'store';

import HomePage from './HomePage';

const mapStateToProps = (state: IStoreState) => ({
  mainCharacters: mainCharactersSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ 
    handleInitCharactersAction
  }, dispatch);

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;
