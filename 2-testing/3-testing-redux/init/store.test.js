// Core
import { combineReducers, createStore } from 'redux';

// Reducers
import { profileReducer as profile } from '../bus/profile/reducer';
import { starshipsReducer as starships } from '../bus/starships/reducer';
import { planetsReducer as planets } from '../bus/planets/reducer';

// Instruments
import { store } from './store';

const referenceRootReducer = combineReducers({
  profile,
  starships,
  planets
});

const referenceStore = createStore(referenceRootReducer);

describe('Redux Store', () => {
  test('shoud have a valid state shape', () => {
    expect(store.getState()).toEqual(referenceStore.getState());
  });
});
