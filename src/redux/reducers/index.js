import { combineReducers } from "redux";

import { capsuleReducer } from './capsuleReducer';

const rootReducer = combineReducers({
  allCapsules: capsuleReducer,
});

export default rootReducer;