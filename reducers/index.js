import { combineReducers } from 'redux';

import ListingReducer from './listing-reducer';

const appReducer = combineReducers({
  listings: ListingReducer,
});

export default appReducer;
