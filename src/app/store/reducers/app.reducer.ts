import * as appActions from '../actions/app.actions';

export interface State {
  isLoading?: Boolean;
}

export const initialState: State = {
  isLoading: false,
};

export function reducer(state = initialState, action: appActions.LoaderActions): State {
  switch (action.type) {
    case appActions.LoaderActionTypes.Show:
      return state;

    default:
      return state;
  }
}


export const getLoaderState = (state: State) => state.isLoading;
