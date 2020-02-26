import { Action } from '@ngrx/store';

export enum LoaderActionTypes {
  Show = 'Show Loader'
}

export class Loader implements Action {
  readonly type = LoaderActionTypes.Show;
}

export type LoaderActions = Loader;
