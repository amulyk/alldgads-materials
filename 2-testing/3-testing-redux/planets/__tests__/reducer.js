// Reducer
import { planetsReducer } from "../reducer";

// Actions
import { planetsActions } from "../actions";

describe("Planets Reducer", () => {
  test("should return initial state by default", () => {
    expect(planetsReducer(void 0, {})).toMatchInlineSnapshot();
  });
  test("should handle START_FETCHING action", () => {
    expect(planetsReducer(void 0, planetsActions.startFetching()))
      .toMatchInlineSnapshot();
  });
  test("should handle STOP_FETCHING action", () => {
    expect(planetsReducer(void 0, planetsActions.stopFetching()))
      .toMatchInlineSnapshot();
  });
  test("should handle FILL action", () => {
    expect(planetsReducer(void 0, planetsActions.fill({ name: "Some Planet" })))
      .toMatchInlineSnapshot();
  });
  test("should handle SET_FETCHING_ERROR action", () => {
    expect(
      planetsReducer(
        void 0,
        planetsActions.setFetchingError("We have a problem")
      )
    ).toMatchInlineSnapshot();
  });
});
