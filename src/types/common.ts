import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IStoreState } from 'store';

export type IThunk<R> = ThunkAction<R, IStoreState, {}, AnyAction>;

export interface IPromiseAction<T = string, P = object, M = object> {
  readonly type: T;
  readonly payload: P;
  readonly meta?: M;
}
