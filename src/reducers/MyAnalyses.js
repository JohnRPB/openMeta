import * as Actions from "../actions/MyAnalyses";

export function MyAnalysesPage(state = [], action) {
  switch (action.type) {
    case Actions.GET_ANALYSES:
      console.log("reducer => ", action);
      return {
        ...state,
        analyses: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}

export default MyAnalysesPage;
