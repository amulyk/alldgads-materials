// Core
import { combineReducers } from 'redux';

// Reducers
import { planetsReducer as planets } from '../planets/reducer';

export const rootReducer = combineReducers({
    planets
});
