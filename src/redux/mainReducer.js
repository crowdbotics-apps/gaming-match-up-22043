import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2163899Reducer from '../features/SignIn2163899/redux/reducers'
import SignIn2163885Reducer from '../features/SignIn2163885/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2163899: SignIn2163899Reducer,
SignIn2163885: SignIn2163885Reducer,

});