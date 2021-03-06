import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as loader from "./app.reducer";

export interface State {
  loader: loader.State;
}

export const reducers: ActionReducerMap<State> = {
  loader: loader.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
