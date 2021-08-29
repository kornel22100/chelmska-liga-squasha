import { TOURNAMENT_DATA_FAIL, TOURNAMENT_DATA_REQUEST, TOURNAMENT_DATA_SUCCESS } from "../constants/tournamentConstants";

export const tournamentDataReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case TOURNAMENT_DATA_REQUEST:
      return { loading: true };
    case TOURNAMENT_DATA_SUCCESS:
      return { loading: false, data: action.payload };
    case TOURNAMENT_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};