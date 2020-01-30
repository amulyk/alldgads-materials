// Types
import { types } from './types';

export const planetsActions = Object.freeze({
    startFetching: () => {
        return {
            type: types.PLANETS_START_FETCHING,
        }
    },
    stopFetching: () => {
        return {
            type: types.PLANETS_STOP_FETCHING,
        }
    },
    fill: (payload) => {
        return {
            type: types.PLANETS_FILL,
            payload
        }
    },
    setFetchingError: (error) => {
        return {
            type: types.PLANETS_SET_FETCHING_ERROR,
            error: true,
            payload: error
        }
    },
});
