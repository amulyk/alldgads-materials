// Actions
import { planetsActions } from '../actions';

describe('Planets Actions', () => {
  test('startFetching', () => {
    expect(planetsActions.startFetching()).toMatchSnapshot();
  });
  test('stopFetching', () => {
    expect(planetsActions.stopFetching()).toMatchSnapshot();
  });
  test('fetchAsync', () => {
    expect(planetsActions.fetchAsync()).toMatchSnapshot();
  });
  test('fill', () => {
    expect(planetsActions.fill({name: 'Some Planet'})).toMatchSnapshot();
  });
  test('setFetchingError', () => {
    expect(planetsActions.setFetchingError('We have a problem')).toMatchSnapshot();
  });
});
