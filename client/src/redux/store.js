import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  listPopReducer,
  listPopMiddleReducer,
} from "./reducers/popReducer/popReducer";
import { listAgeReducer } from "./reducers/agesReducer/ageReducer";
import {
  listEduAgeReducer,
  listEduReducer,
  listTotalEduReducer,
} from "./reducers/eduReducer/eduReducer";
import { listFamilyReducer } from "./reducers/familyReducer/familyReducer";
import { listGradeReducer } from "./reducers/gradeReducer/gradeReducer";
import { listHousingReducer } from "./reducers/housingReducer/housingReducer";
import { listQualiReducer } from "./reducers/qualiReducer/qualiReducer";
import { listStatusReducer } from "./reducers/status/statusReducer";
const middleware = [thunk];
const finalReducer = combineReducers({
  listPopReducer: listPopReducer,
  listPopMiddleReducer: listPopMiddleReducer,
  listAgeReducer: listAgeReducer,
  listEduAgeReducer: listEduAgeReducer,
  listEduReducer: listEduReducer,
  listTotalEduReducer: listTotalEduReducer,
  listFamilyReducer: listFamilyReducer,
  listGradeReducer: listGradeReducer,
  listHousingReducer: listHousingReducer,
  listQualiReducer: listQualiReducer,
  listStatusReducer: listStatusReducer,
});

const initialState = {};
const store = createStore(
  finalReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
