import { combineReducers } from "redux";
import noteReducer from "./notesReducers";


const rootReducer = combineReducers ({
    notes: noteReducer,
});

export default rootReducer;