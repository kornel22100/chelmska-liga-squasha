// DONE
import Axios from "axios";
import { LEAGUE_DATA_FAIL, LEAGUE_DATA_REQUEST, LEAGUE_DATA_SUCCESS } from "../constants/leagueConstants";

export const leagueData = (season, league, group) => async (dispatch) => {
  dispatch({
    type: LEAGUE_DATA_REQUEST,
    payload: { season, league, group },
  });
  try {
    const { data } = await Axios.post(`/api/leagues`, { season, league, group });
    dispatch({ type: LEAGUE_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LEAGUE_DATA_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};
