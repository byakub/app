export interface IPromiseAction<T = string, P = object, M = object> {
  readonly type: T;
  readonly payload: P;
  readonly meta?: M;
}
