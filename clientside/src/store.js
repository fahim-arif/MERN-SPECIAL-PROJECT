import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { marginReducer } from "./reducers/marginReducer";
import { userRegisterReducer, userLoginReducer } from "./reducers/userReducers";
import {
  getSingleTutorReducer,
  tutorListReducer,
} from "./reducers/tutorReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  tutorList: tutorListReducer,
  tutorInfo: getSingleTutorReducer,
  sideMargin: marginReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
