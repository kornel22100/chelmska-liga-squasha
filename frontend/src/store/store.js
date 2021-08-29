import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { articleReducer, articlesReducer } from "./reducers/articleReducers";
import { leagueDataReducer } from "./reducers/leagueReducers";
import { tournamentDataReducer } from "./reducers/tournamentReducers";
import { accountReducer, updateAccountReducer, forgetPasswordReducer, resetPasswordReducer, signinReducer } from "./reducers/userReducers";

const initialState = {
  signin: { data: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null },
};
const reducer = combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  signin: signinReducer,
  forgetPassword: forgetPasswordReducer,
  resetPassword: resetPasswordReducer,
  leagueData: leagueDataReducer,
  tournamentData: tournamentDataReducer,
  account: accountReducer,
  updateAccount: updateAccountReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
