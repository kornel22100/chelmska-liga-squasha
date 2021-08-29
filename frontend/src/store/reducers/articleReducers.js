// DONE
import { ARTICLE_FAIL, ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLES_FAIL, ARTICLES_REQUEST, ARTICLES_SUCCESS } from "../constants/articleConstants";

export const articlesReducer = (state = { loading: true, data: [] }, action) => {
  switch (action.type) {
    case ARTICLES_REQUEST:
      return { loading: true };
    case ARTICLES_SUCCESS:
      return { loading: false, data: action.payload };
    case ARTICLES_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const articleReducer = (state = { loading: true, data: {} }, action) => {
  switch (action.type) {
    case ARTICLE_REQUEST:
      return { loading: true };
    case ARTICLE_SUCCESS:
      return { loading: false, data: action.payload };
    case ARTICLE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
