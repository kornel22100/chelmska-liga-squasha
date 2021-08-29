// DONE
import { LEAGUE_DATA_FAIL, LEAGUE_DATA_REQUEST, LEAGUE_DATA_SUCCESS } from "../constants/leagueConstants";

export const leagueDataReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case LEAGUE_DATA_REQUEST:
      return { loading: true };
    case LEAGUE_DATA_SUCCESS:
      return { loading: false, data: action.payload };
    case LEAGUE_DATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};