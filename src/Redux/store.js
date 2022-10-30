import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  appReducer,
  authReducer,
});
const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export { store };
