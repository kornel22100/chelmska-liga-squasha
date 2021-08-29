// DONE
import Axios from "axios";
import { ARTICLE_FAIL, ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLES_FAIL, ARTICLES_REQUEST, ARTICLES_SUCCESS } from "../constants/articleConstants";

export const articles = () => async (dispatch) => {
  dispatch({
    type: ARTICLES_REQUEST,
  });
  try {
    const { data } = await Axios.get("/api/articles");
    dispatch({ type: ARTICLES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ARTICLES_FAIL, payload: error.message });
  }
};

export const article = (articleId) => async (dispatch) => {
  dispatch({
    type: ARTICLE_REQUEST,
    payload: articleId,
  });
  try {
    const { data } = await Axios.get(`/api/articles/${articleId}`);
    dispatch({ type: ARTICLE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ARTICLE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
  }
};
