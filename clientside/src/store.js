import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { marginReducer } from "./reducers/marginReducer";
import { userRegisterReducer } from "./reducers/userReducers";
import { tutorListReducer } from "./reducers/tutorReducer";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  tutorList: tutorListReducer,
  sideMargin: marginReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
