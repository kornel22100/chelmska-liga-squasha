// DONE
import Axios from "axios";
import { TOURNAMENT_DATA_FAIL, TOURNAMENT_DATA_REQUEST, TOURNAMENT_DATA_SUCCESS } from "../constants/tournamentConstants";

export const tournamentData = (name) => async (dispatch) => {
  dispatch({
    type: TOURNAMENT_DATA_REQUEST,
    payload: { name },
  });
  try {
    const { data } = await Axios.post(`/api/tournaments`, { name });
    dispatch({ type: TOURNAMENT_DATA_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: TOURNAMENT_DATA_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};
