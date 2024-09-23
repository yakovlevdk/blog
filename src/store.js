// store.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { postsReducer } from "./reducers/postsReducer";
import { postReducer } from "./reducers/postReducer";
import { usersReducer } from "./reducers/usersReducer";
import { appReducer } from "./reducers/app-reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  post: postReducer,
  posts: postsReducer,
  app: appReducer,
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
  // applyMiddleware(thunk)
);
